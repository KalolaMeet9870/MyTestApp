import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';
import { moderateScale, verticalScale } from '../../theme';

export const getStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(16),
  },
  text: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: verticalScale(20),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.cardBackground,
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: theme.border,
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(16),
    width: '85%',
    shadowColor: theme.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: theme.isDark ? 0.2 : 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: moderateScale(15),
    fontWeight: '600',
    color: theme.text,
  },
});
