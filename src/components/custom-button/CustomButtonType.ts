import { ImageSourcePropType } from 'react-native';

export type CustomButtonProps = Partial<{
  buttonText: string;
  pressEvent: () => void;
  buttonStyle: any;
  textStyle: any;
  image: ImageSourcePropType;
  imageStyle: any;
  leftIcon: ImageSourcePropType;
  leftIconStyle: any;
  leftIconText: string;
  leftIconTextStyle: any;
  isLoading: boolean;
  disabled: boolean;
  activeOpacity: number;
}>;
