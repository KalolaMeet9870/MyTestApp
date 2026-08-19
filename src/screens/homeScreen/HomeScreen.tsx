import React from 'react';
import { Text, View, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { getStyles } from './HomeScreenStyle';
import { useHomeScreenController } from './HomeScreenController';
import { useTheme } from '../../theme';
import Strings from '../../constants';
import { Icons } from '../../assets';

export default function HomeScreen() {
  const {
    deviceDetails,
    permissionStatus,
    loading,
    handleRequestPermission,
    selectedPhotoUri,
    photosPermissionStatus,
    handleSelectPhoto,
  } = useHomeScreenController();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const renderDetailRow = (label: string, value: string) => {
    return (
      <View style={styles.detailRow} key={label}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue} numberOfLines={2} ellipsizeMode="tail">
          {value}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{Strings.DEVICE_DETAILS_TITLE}</Text>
        <View style={styles.divider} />

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={theme.primary} />
          </View>
        ) : (
          <View style={styles.detailsList}>
            {renderDetailRow(Strings.OS, deviceDetails?.os || Strings.NOT_AVAILABLE)}
            {renderDetailRow(Strings.OS_VERSION, deviceDetails?.osVersion || Strings.NOT_AVAILABLE)}
            {renderDetailRow(Strings.DEVICE_MODEL, deviceDetails?.deviceModel || Strings.NOT_AVAILABLE)}
            {renderDetailRow(Strings.DEVICE_NAME, deviceDetails?.deviceName || Strings.NOT_AVAILABLE)}
            {renderDetailRow(Strings.DEVICE_ID, deviceDetails?.deviceId || Strings.NOT_AVAILABLE)}
            {renderDetailRow(Strings.APP_VERSION, deviceDetails?.appVersion || Strings.NOT_AVAILABLE)}
          </View>
        )}

        {!loading && permissionStatus === 'denied' && (
          <View style={styles.permissionWarningContainer}>
            <Text style={styles.permissionWarningText}>
              {Strings.PERMISSION_REQUIRED}
            </Text>
            <TouchableOpacity
              style={styles.permissionButton}
              onPress={handleRequestPermission}
              activeOpacity={0.8}
            >
              <Text style={styles.permissionButtonText}>{Strings.GRANT_PERMISSION}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={[styles.card, styles.photoCard]}>
        <Text style={styles.cardTitle}>{Strings.PHOTOS_CARD_TITLE}</Text>
        <View style={styles.divider} />

        <View style={styles.previewContainer}>
          {selectedPhotoUri ? (
            <Image source={{ uri: selectedPhotoUri }} style={styles.previewImage} resizeMode="contain" />
          ) : (
            <View style={styles.placeholderContainer}>
              <Image source={Icons.gallery} style={styles.placeholderIcon} resizeMode="contain" />
              <Text style={styles.placeholderText}>{Strings.PHOTO_PREVIEW_PLACEHOLDER}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.photosButton}
          onPress={handleSelectPhoto}
          activeOpacity={0.8}
        >
          <Text style={styles.photosButtonText}>{Strings.SELECT_PHOTO}</Text>
        </TouchableOpacity>

        {photosPermissionStatus === 'denied' && (
          <View style={styles.permissionWarningContainer}>
            <Text style={styles.permissionWarningText}>
              {Strings.PHOTOS_PERMISSION_REQUIRED}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
