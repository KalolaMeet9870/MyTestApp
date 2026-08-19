import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Strings from '../../constants';

const SETTINGS_STORAGE_KEY = '@app_user_settings';

export interface UserSettings {
  name: string;
  email: string;
  birthdate: string; // stored as ISO date string
  country: string; // country code/value
}

export const useSettingsScreenController = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [country, setCountry] = useState<string>('');
  
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load saved settings from AsyncStorage on mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
        if (savedSettings) {
          const parsed: UserSettings = JSON.parse(savedSettings);
          setName(parsed.name || '');
          setEmail(parsed.email || '');
          setBirthdate(parsed.birthdate ? new Date(parsed.birthdate) : null);
          setCountry(parsed.country || '');
        }
      } catch (e) {
        console.error('Failed to load settings', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadSettings();
  }, []);

  // Format Date object to YYYY-MM-DD
  const formatDate = useCallback((date: Date | null): string => {
    if (!date) {
      return '';
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  // Date picker selection change handler
  const onDatePickerChange = useCallback((event: any, selectedDate?: Date) => {
    // For Android, this is triggered when they hit "OK" or "Cancel"
    // For iOS, this is triggered on scroll
    if (selectedDate) {
      // Clamp date to not allow future date
      const now = new Date();
      const finalDate = selectedDate > now ? now : selectedDate;
      setBirthdate(finalDate);
      
      // Clear birthdate validation error if set
      setErrors((prev) => {
        const next = { ...prev };
        delete next.birthdate;
        return next;
      });
    }

    // Android hides picker immediately after user action (set or dismiss)
    if (event.type === 'set' || event.type === 'dismissed') {
      setShowDatePicker(false);
    }
  }, []);

  // Simple form validation
  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate Name
    if (!name.trim()) {
      newErrors.name = Strings.ERROR_NAME_REQUIRED;
    }

    // Validate Email
    const emailTrimmed = email.trim();
    if (!emailTrimmed) {
      newErrors.email = Strings.ERROR_EMAIL_REQUIRED;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailTrimmed)) {
        newErrors.email = Strings.ERROR_EMAIL_INVALID;
      }
    }

    // Validate Birthdate
    if (!birthdate) {
      newErrors.birthdate = Strings.ERROR_BIRTHDATE_REQUIRED;
    }

    // Validate Country
    if (!country) {
      newErrors.country = Strings.ERROR_COUNTRY_REQUIRED;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, email, birthdate, country]);

  // Form submission handler
  const handleSave = useCallback(async () => {
    setShowSuccess(false);
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    try {
      const settingsPayload: UserSettings = {
        name: name.trim(),
        email: email.trim(),
        birthdate: birthdate ? birthdate.toISOString() : '',
        country,
      };

      await AsyncStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settingsPayload));
      setShowSuccess(true);

      // Hide success message automatically after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }, [name, email, birthdate, country, validateForm]);

  return {
    name,
    setName,
    email,
    setEmail,
    birthdate,
    setBirthdate,
    country,
    setCountry,
    showDatePicker,
    setShowDatePicker,
    errors,
    setErrors,
    showSuccess,
    isLoading,
    formatDate,
    onDatePickerChange,
    handleSave,
  };
};
