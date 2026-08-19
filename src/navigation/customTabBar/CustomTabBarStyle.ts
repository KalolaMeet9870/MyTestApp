import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';
import { moderateScale, verticalScale, horizontalScale } from '../../theme';

export const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.tabBackground,
    paddingVertical: moderateScale(10),
    paddingHorizontal: horizontalScale(12),
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    borderColor: Colors.tabBorder,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabLabel: {
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    marginTop: verticalScale(4),
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});
