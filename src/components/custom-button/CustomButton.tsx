import React, { memo } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Colors, moderateScale } from '../../theme';
import { CustomButtonProps } from './CustomButtonType';

const CustomButton = ({
  buttonText,
  pressEvent,
  buttonStyle,
  textStyle,
  image,
  imageStyle,
  leftIcon,
  leftIconStyle,
  leftIconText,
  leftIconTextStyle,
  isLoading = false,
  disabled = false,
  activeOpacity = 0.85,
}: CustomButtonProps) => (
  <TouchableOpacity
    onPress={pressEvent}
    style={[buttonStyle, (disabled || isLoading) && styles.disabled]}
    disabled={disabled || isLoading}
    activeOpacity={activeOpacity}
  >
    {isLoading ? (
      <ActivityIndicator color={Colors.white} size="small" />
    ) : (
      <>
        {leftIcon && (
          <Image source={leftIcon} style={[styles.leftIcon, leftIconStyle]} />
        )}
        {leftIconText ? (
          <Text style={[styles.leftIconText, leftIconTextStyle]}>
            {leftIconText}
          </Text>
        ) : null}
        {buttonText ? (
          <Text style={textStyle}>{buttonText}</Text>
        ) : null}
        {image && (
          <Image source={image} style={[styles.rightIcon, imageStyle]} />
        )}
      </>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
  leftIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
    resizeMode: 'contain',
  },
  rightIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
  },
  leftIconText: {
    fontSize: moderateScale(20),
    lineHeight: moderateScale(24),
  },
});

export default memo(CustomButton);
