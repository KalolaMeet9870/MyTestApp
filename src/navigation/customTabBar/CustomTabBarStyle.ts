import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';
import { moderateScale, verticalScale, horizontalScale } from '../../theme';

export const getStyles = (theme: ThemeColors) => StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: theme.tabBackground,
    paddingVertical: moderateScale(10),
    paddingHorizontal: horizontalScale(12),
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: theme.tabBorder,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabLabelActive: {
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    marginTop: verticalScale(4),
    color: theme.tabActive,
  },
  tabLabelInactive: {
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    marginTop: verticalScale(4),
    color: theme.tabInactive,
  },
  iconActive: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: theme.tabActive,
  },
  iconInactive: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: theme.tabInactive,
  },
});
