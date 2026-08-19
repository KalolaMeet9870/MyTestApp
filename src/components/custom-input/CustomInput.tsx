import React, { memo, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useTheme, moderateScale, verticalScale } from '../../theme';
import { CustomInputProps } from './CustomInputType';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  errorMessage,
  editable = true,
  required = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  secureTextEntry = false,
  autoCorrect = true,
  maxLength,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
}: CustomInputProps) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Dynamic styles based on state and theme
  const borderStyle = errorMessage
    ? { borderColor: theme.danger }
    : isFocused
    ? { borderColor: theme.primary }
    : { borderColor: theme.border };

  const backgroundStyle = editable
    ? { backgroundColor: theme.inputBackground }
    : { backgroundColor: theme.divider, opacity: 0.5 };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, { color: theme.textSecondary }, labelStyle]}>
            {label}
          </Text>
          {required && <Text style={[styles.requiredAsterisk, { color: theme.danger }]}> *</Text>}
        </View>
      )}

      <TextInput
        style={[
          styles.input,
          {
            color: editable ? theme.text : theme.textSecondary,
          },
          borderStyle,
          backgroundStyle,
          inputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.inputPlaceholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {errorMessage ? (
        <Text style={[styles.errorText, { color: theme.danger }, errorStyle]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: verticalScale(14),
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(6),
  },
  label: {
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
  requiredAsterisk: {
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  input: {
    height: verticalScale(42),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    borderWidth: 1,
    fontSize: moderateScale(14),
  },
  errorText: {
    fontSize: moderateScale(11),
    marginTop: verticalScale(4),
    fontWeight: '500',
  },
});

export default memo(CustomInput);
