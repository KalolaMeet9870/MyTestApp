import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';
import { moderateScale } from '../../theme';

export const getStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: theme.text,
  },
});
