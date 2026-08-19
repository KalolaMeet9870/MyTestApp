import { useState, useEffect, useCallback } from 'react';
import { Platform, PermissionsAndroid, Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { launchImageLibrary } from 'react-native-image-picker';
import Strings from '../../constants';

export interface DeviceDetails {
  os: string;
  osVersion: string;
  deviceModel: string;
  deviceName: string;
  deviceId: string;
  appVersion: string;
}

export type PermissionStatus = 'unknown' | 'granted' | 'denied';

export const useHomeScreenController = () => {
  const [deviceDetails, setDeviceDetails] = useState<DeviceDetails | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>('unknown');
  const [loading, setLoading] = useState<boolean>(true);

  // Photos feature states
  const [selectedPhotoUri, setSelectedPhotoUri] = useState<string | null>(null);
  const [photosPermissionStatus, setPhotosPermissionStatus] = useState<PermissionStatus>('unknown');

  const fetchDeviceDetails = useCallback(async (hasPermission: boolean) => {
    try {
      const os = DeviceInfo.getSystemName() || Platform.OS;
      const osVersion = DeviceInfo.getSystemVersion() || String(Platform.Version);
      const deviceModel = DeviceInfo.getModel() || 'Unknown';
      const appVersion = DeviceInfo.getVersion() || 'Unknown';

      let deviceId: string = Strings.NOT_AVAILABLE;
      try {
        deviceId = await DeviceInfo.getUniqueId();
      } catch (e) {
        console.error('Failed to get unique ID', e);
      }

      let deviceName: string = Strings.NOT_AVAILABLE;
      if (Platform.OS === 'android') {
        const needsPerm = Number(Platform.Version) >= 31;
        if (needsPerm && !hasPermission) {
          deviceName = Strings.PERMISSION_DENIED;
        } else {
          try {
            deviceName = await DeviceInfo.getDeviceName();
          } catch (e) {
            console.error('Failed to get device name', e);
          }
        }
      } else {
        // iOS
        try {
          deviceName = await DeviceInfo.getDeviceName();
        } catch (e) {
          console.error('Failed to get device name', e);
        }
      }

      setDeviceDetails({
        os,
        osVersion,
        deviceModel,
        deviceName,
        deviceId,
        appVersion,
      });
    } catch (error) {
      console.error('Failed to fetch device details', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const requestBluetoothPermission = async (): Promise<boolean> => {
    if (Platform.OS !== 'android' || Number(Platform.Version) < 31) {
      setPermissionStatus('granted');
      return true;
    }

    try {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
      );

      if (hasPermission) {
        setPermissionStatus('granted');
        return true;
      }

      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        {
          title: 'Bluetooth Permission Required',
          message: 'Permission is required to display your device name.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionStatus('granted');
        return true;
      } else {
        setPermissionStatus('denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      setPermissionStatus('denied');
      return false;
    }
  };

  useEffect(() => {
    const init = async () => {
      if (Platform.OS === 'android' && Number(Platform.Version) >= 31) {
        const hasPermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
        );
        if (hasPermission) {
          setPermissionStatus('granted');
          fetchDeviceDetails(true);
        } else {
          // Request permission on mount
          const granted = await requestBluetoothPermission();
          fetchDeviceDetails(granted);
        }
      } else {
        setPermissionStatus('granted');
        fetchDeviceDetails(true);
      }
    };

    init();
  }, [fetchDeviceDetails]);

  const handleRequestPermission = async () => {
    setLoading(true);
    const granted = await requestBluetoothPermission();
    await fetchDeviceDetails(granted);
  };

  // Photos permission and picker logic
  const checkPhotosPermission = useCallback(async (): Promise<boolean> => {
    if (Platform.OS === 'ios') {
      return photosPermissionStatus === 'granted';
    }

    try {
      const isAndroid13OrAbove = Platform.OS === 'android' && Number(Platform.Version) >= 33;
      const permission = isAndroid13OrAbove
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      return await PermissionsAndroid.check(permission);
    } catch (err) {
      console.warn(err);
      return false;
    }
  }, [photosPermissionStatus]);

  const requestPhotosPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'ios') {
      return new Promise((resolve) => {
        Alert.alert(
          'Photo Library Access Required',
          'This app requires photo library access to let you select a photo for preview.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
              onPress: () => {
                setPhotosPermissionStatus('denied');
                resolve(false);
              },
            },
            {
              text: 'OK',
              onPress: () => {
                setPhotosPermissionStatus('granted');
                resolve(true);
              },
            },
          ]
        );
      });
    }

    try {
      const isAndroid13OrAbove = Platform.OS === 'android' && Number(Platform.Version) >= 33;
      const permission = isAndroid13OrAbove
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const result = await PermissionsAndroid.request(permission, {
        title: 'Photos Permission Required',
        message: 'This app requires access to your photos to display a preview.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        setPhotosPermissionStatus('granted');
        return true;
      } else {
        setPhotosPermissionStatus('denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      setPhotosPermissionStatus('denied');
      return false;
    }
  };

  useEffect(() => {
    const initPhotosPermission = async () => {
      if (Platform.OS === 'android') {
        const isGranted = await checkPhotosPermission();
        setPhotosPermissionStatus(isGranted ? 'granted' : 'unknown');
      }
    };
    initPhotosPermission();
  }, [checkPhotosPermission]);

  const handleSelectPhoto = async () => {
    const isGranted = await checkPhotosPermission();
    if (!isGranted) {
      const requestResult = await requestPhotosPermission();
      if (!requestResult) {
        return;
      }
    }

    try {
      launchImageLibrary(
        {
          mediaType: 'photo',
          quality: 0.8,
        },
        (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.error('ImagePicker Error: ', response.errorMessage);
          } else if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri;
            if (uri) {
              setSelectedPhotoUri(uri);
            }
          }
        }
      );
    } catch (error) {
      console.error('Failed to launch image library', error);
    }
  };

  return {
    deviceDetails,
    permissionStatus,
    loading,
    handleRequestPermission,
    selectedPhotoUri,
    photosPermissionStatus,
    handleSelectPhoto,
  };
};
