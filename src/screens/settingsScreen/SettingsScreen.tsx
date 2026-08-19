import React from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';

import { CustomButton } from '../../components/custom-button';
import { CustomInput } from '../../components/custom-input';
import Strings from '../../constants';
import { COUNTRIES } from '../../constants/Countries';
import { useTheme } from '../../theme';
import { useSettingsScreenController } from './SettingsScreenController';
import { getStyles } from './SettingsScreenStyle';

export default function SettingsScreen() {
  const {
    name,
    setName,
    email,
    setEmail,
    birthdate,
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
  } = useSettingsScreenController();

  const { theme, isDark } = useTheme();
  const styles = getStyles(theme);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>

          {/* Name Field */}
          <CustomInput
            label={Strings.SETTINGS_NAME_LABEL}
            placeholder={Strings.SETTINGS_NAME_PLACEHOLDER}
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (errors.name) {
                setErrors((prev) => {
                  const next = { ...prev };
                  delete next.name;
                  return next;
                });
              }
            }}
            errorMessage={errors.name}
            required
            autoCapitalize="words"
          />

          {/* Email Address Field */}
          <CustomInput
            label={Strings.SETTINGS_EMAIL_LABEL}
            placeholder={Strings.SETTINGS_EMAIL_PLACEHOLDER}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) {
                setErrors((prev) => {
                  const next = { ...prev };
                  delete next.email;
                  return next;
                });
              }
            }}
            errorMessage={errors.email}
            required
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Birthdate Field */}
          <View style={styles.dateFieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{Strings.SETTINGS_BIRTHDATE_LABEL}</Text>
              <Text style={styles.requiredAsterisk}> *</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.datePressable, errors.birthdate && { borderColor: theme.danger }]}
              onPress={() => setShowDatePicker(prev => !prev)}
            >
              {birthdate ? (
                <Text style={styles.dateText}>{formatDate(birthdate)}</Text>
              ) : (
                <Text style={styles.datePlaceholderText}>{Strings.SETTINGS_BIRTHDATE_PLACEHOLDER}</Text>
              )}
            </TouchableOpacity>

            {errors.birthdate ? (
              <Text style={styles.errorText}>{errors.birthdate}</Text>
            ) : null}

            {/* iOS DateTimePicker renders inline inside a collapsible wrapper */}
            {Platform.OS === 'ios' && showDatePicker && (
              <View style={styles.iosPickerWrapper}>
                <TouchableOpacity
                  style={styles.iosPickerDoneButton}
                  onPress={() => setShowDatePicker(false)}
                >
                  <Text style={styles.iosPickerDoneText}>Done</Text>
                </TouchableOpacity>
                <DateTimePicker
                  value={birthdate || new Date()}
                  mode="date"
                  display="spinner"
                  maximumDate={new Date()}
                  onChange={onDatePickerChange}
                  textColor={theme.text}
                  style={styles.iosDatePicker}
                />
              </View>
            )}

            {/* Android DateTimePicker renders its own dialog pop-up */}
            {Platform.OS === 'android' && showDatePicker && (
              <DateTimePicker
                value={birthdate || new Date()}
                mode="date"
                display="default"
                maximumDate={new Date()}
                onChange={onDatePickerChange}
              />
            )}
          </View>

          {/* Country Field */}
          <View style={styles.dropdownContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{Strings.SETTINGS_COUNTRY_LABEL}</Text>
              <Text style={styles.requiredAsterisk}> *</Text>
            </View>
            <Dropdown
              style={[styles.dropdown, errors.country && { borderColor: theme.danger }]}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.dropdownSelectedText}
              inputSearchStyle={styles.dropdownSearchInput}
              containerStyle={styles.dropdownListContainer}
              itemTextStyle={styles.dropdownItemText}
              activeColor={isDark ? theme.border : theme.primaryLight}
              data={COUNTRIES}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={Strings.SETTINGS_COUNTRY_PLACEHOLDER}
              value={country}
              onChange={(item) => {
                setCountry(item.value);
                if (errors.country) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.country;
                    return next;
                  });
                }
              }}
            />
            {errors.country ? (
              <Text style={styles.errorText}>{errors.country}</Text>
            ) : null}
          </View>

          {/* Feedback Messages */}
          {showSuccess && (
            <View style={[styles.feedbackContainer, styles.successFeedback]}>
              <Text style={styles.successText}>{Strings.SETTINGS_SUCCESS_MESSAGE}</Text>
            </View>
          )}

          {/* Save Button */}
          <View style={styles.buttonContainer}>
            <CustomButton
              buttonText={Strings.SETTINGS_SAVE_BUTTON}
              pressEvent={handleSave}
              buttonStyle={styles.saveButton}
              textStyle={styles.saveButtonText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
