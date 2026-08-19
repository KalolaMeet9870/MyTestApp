import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';
import { moderateScale, verticalScale } from '../../theme';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    loaderContainer: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      padding: moderateScale(16),
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(100),
    },
    card: {
      backgroundColor: theme.cardBackground,
      borderRadius: moderateScale(12),
      borderWidth: 1,
      borderColor: theme.border,
      padding: moderateScale(20),
      shadowColor: theme.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: theme.isDark ? 0.3 : 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: verticalScale(16),
      textAlign: 'center',
    },
    divider: {
      height: 1,
      backgroundColor: theme.divider,
      marginBottom: verticalScale(20),
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(6),
    },
    label: {
      fontSize: moderateScale(13),
      fontWeight: '600',
      color: theme.textSecondary,
    },
    requiredAsterisk: {
      fontSize: moderateScale(13),
      fontWeight: 'bold',
      color: theme.danger,
    },
    // Birthdate Pressable container
    dateFieldContainer: {
      marginBottom: verticalScale(14),
      width: '100%',
    },
    datePressable: {
      height: verticalScale(42),
      borderRadius: moderateScale(8),
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: moderateScale(12),
      justifyContent: 'center',
      backgroundColor: theme.inputBackground,
    },
    dateText: {
      fontSize: moderateScale(14),
      color: theme.text,
    },
    datePlaceholderText: {
      fontSize: moderateScale(14),
      color: theme.inputPlaceholder,
    },
    // Dropdown Styling
    dropdownContainer: {
      marginBottom: verticalScale(14),
      width: '100%',
    },
    dropdown: {
      height: verticalScale(42),
      borderRadius: moderateScale(8),
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: moderateScale(12),
      backgroundColor: theme.inputBackground,
    },
    dropdownListContainer: {
      backgroundColor: theme.cardBackground,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: moderateScale(8),
      marginTop: verticalScale(2),
    },
    dropdownItemText: {
      color: theme.text,
      fontSize: moderateScale(14),
    },
    dropdownActiveItem: {
      backgroundColor: theme.isDark ? theme.border : theme.primaryLight,
    },
    dropdownSelectedText: {
      color: theme.text,
      fontSize: moderateScale(14),
    },
    dropdownPlaceholder: {
      color: theme.inputPlaceholder,
      fontSize: moderateScale(14),
    },
    dropdownSearchInput: {
      height: verticalScale(38),
      fontSize: moderateScale(14),
      color: theme.text,
      borderColor: theme.border,
      borderRadius: moderateScale(6),
      backgroundColor: theme.inputBackground,
    },
    // Error & Success Feedback
    errorText: {
      fontSize: moderateScale(11),
      marginTop: verticalScale(4),
      fontWeight: '500',
      color: theme.danger,
    },
    feedbackContainer: {
      marginTop: verticalScale(16),
      padding: moderateScale(12),
      borderRadius: moderateScale(8),
      alignItems: 'center',
      borderWidth: 1,
    },
    successFeedback: {
      backgroundColor: theme.cardBackground,
      borderColor: theme.accent,
    },
    successText: {
      color: theme.accent,
      fontWeight: '600',
      fontSize: moderateScale(13),
      textAlign: 'center',
    },
    // Buttons
    buttonContainer: {
      marginTop: verticalScale(24),
      width: '100%',
    },
    saveButton: {
      backgroundColor: theme.primary,
      borderRadius: moderateScale(8),
      paddingVertical: verticalScale(12),
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    saveButtonText: {
      color: theme.white,
      fontSize: moderateScale(14),
      fontWeight: 'bold',
    },
    // Inline iOS DateTimePicker layout styling
    iosPickerWrapper: {
      backgroundColor: theme.inputBackground,
      borderRadius: moderateScale(12),
      padding: moderateScale(8),
      marginTop: verticalScale(6),
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
    },
    iosPickerDoneButton: {
      alignSelf: 'flex-end',
      paddingVertical: verticalScale(6),
      paddingHorizontal: moderateScale(12),
      marginBottom: verticalScale(4),
    },
    iosPickerDoneText: {
      color: theme.primary,
      fontWeight: 'bold',
      fontSize: moderateScale(14),
    },
    iosDatePicker: {
      width: '100%',
    },
  });
