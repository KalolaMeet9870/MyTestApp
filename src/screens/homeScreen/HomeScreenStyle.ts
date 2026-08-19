import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme';
import { moderateScale, verticalScale } from '../../theme';

export const getStyles = (theme: ThemeColors) => StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollContent: {
    padding: moderateScale(16),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(100),
  },
  headerContainer: {
    width: '100%',
    marginBottom: verticalScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: theme.text,
  },
  card: {
    width: '100%',
    backgroundColor: theme.cardBackground,
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: theme.border,
    padding: moderateScale(16),
    shadowColor: theme.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: theme.isDark ? 0.3 : 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: verticalScale(4),
  },
  divider: {
    height: 1,
    backgroundColor: theme.divider,
    marginVertical: verticalScale(8),
  },
  loaderContainer: {
    height: verticalScale(180),
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsList: {
    marginTop: verticalScale(4),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  detailLabel: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: theme.textSecondary,
    flex: 1,
    paddingRight: moderateScale(10),
  },
  detailValue: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: theme.text,
    flex: 1.5,
    textAlign: 'right',
  },
  permissionWarningContainer: {
    marginTop: verticalScale(16),
    backgroundColor: theme.isDark ? 'rgba(251, 188, 5, 0.1)' : 'rgba(251, 188, 5, 0.05)',
    borderRadius: moderateScale(8),
    padding: moderateScale(12),
    borderWidth: 1,
    borderColor: theme.warning,
    alignItems: 'center',
  },
  permissionWarningText: {
    fontSize: moderateScale(13),
    color: theme.isDark ? '#FCD34D' : '#D97706',
    textAlign: 'center',
    marginBottom: verticalScale(10),
    fontWeight: '500',
  },
  permissionButton: {
    backgroundColor: theme.primary,
    borderRadius: moderateScale(6),
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(16),
  },
  permissionButtonText: {
    color: theme.white,
    fontSize: moderateScale(13),
    fontWeight: 'bold',
  },
  // Photos feature styles
  photoCard: {
    marginTop: verticalScale(16),
  },
  previewContainer: {
    height: verticalScale(200),
    width: '100%',
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: theme.border,
    overflow: 'hidden',
    backgroundColor: theme.isDark ? '#1E1E1E' : '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(16),
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
    tintColor: theme.textSecondary,
    marginBottom: verticalScale(8),
  },
  placeholderText: {
    fontSize: moderateScale(14),
    color: theme.textSecondary,
    fontWeight: '500',
  },
  photosButton: {
    backgroundColor: theme.primary,
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  photosButtonText: {
    color: theme.white,
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
});
