import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors'; import { moderateScale, verticalScale } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(5),
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: verticalScale(10),
  },
});
