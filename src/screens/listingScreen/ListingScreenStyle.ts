import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';
import { moderateScale, verticalScale } from '../../theme';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    searchContainer: {
      padding: moderateScale(12),
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      backgroundColor: theme.cardBackground,
    },
    searchInput: {
      height: verticalScale(40),
      backgroundColor: theme.inputBackground,
      borderRadius: moderateScale(8),
      paddingHorizontal: moderateScale(12),
      borderWidth: 1,
      borderColor: theme.border,
      color: theme.text,
      fontSize: moderateScale(14),
    },
    listContent: {
      paddingHorizontal: moderateScale(16),
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(110), // extra padding to clear absolute bottom tab bar
    },
    itemContainer: {
      flexDirection: 'row',
      backgroundColor: theme.cardBackground,
      borderRadius: moderateScale(10),
      borderWidth: 1,
      borderColor: theme.border,
      padding: moderateScale(12),
      shadowColor: theme.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: theme.isDark ? 0.2 : 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    avatarContainer: {
      position: 'relative',
      marginRight: moderateScale(12),
      alignSelf: 'center',
    },
    avatar: {
      width: moderateScale(54),
      height: moderateScale(54),
      borderRadius: moderateScale(27),
      backgroundColor: theme.inputBackground,
    },
    statusDot: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: moderateScale(14),
      height: moderateScale(14),
      borderRadius: moderateScale(7),
      borderWidth: 2,
      borderColor: theme.cardBackground,
    },
    statusDotOnline: {
      backgroundColor: theme.statusOnline,
    },
    statusDotBusy: {
      backgroundColor: theme.statusBusy,
    },
    statusDotOffline: {
      backgroundColor: theme.statusOffline,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    nameRow: {
      marginBottom: verticalScale(4),
    },
    nameText: {
      fontSize: moderateScale(15),
      fontWeight: 'bold',
      color: theme.text,
    },
    roleText: {
      fontSize: moderateScale(12),
      color: theme.textSecondary,
      marginTop: verticalScale(1),
      fontWeight: '600',
    },
    detailsContainer: {
      marginTop: verticalScale(4),
    },
    detailText: {
      fontSize: moderateScale(12),
      color: theme.textSecondary,
      paddingVertical: verticalScale(1.5),
    },
    separator: {
      height: verticalScale(12),
    },
    emptyContainer: {
      flex: 1,
      height: verticalScale(300),
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: moderateScale(14),
      color: theme.textSecondary,
      fontWeight: '500',
    },
  });
