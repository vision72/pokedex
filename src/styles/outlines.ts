import {StyleSheet, ViewStyle} from 'react-native';
import * as Colors from './colors';

// Define a type for border radius options
type BorderRedius = 'base' | 'large' | 'max';

// Define a record for border radius values
export const borderRadius: Record<BorderRedius, number> = {
  base: 8, // 'base' radius value is 8
  large: 16, // 'large' radius value is 16
  max: 9999, // 'max' radius value is 9999 (very large, typically for circular shapes)
};

// Define a type for border width options
type BorderWidth = 'hairline' | 'thin' | 'base' | 'thick';

// Define a record for border width values
export const borderWidth: Record<BorderWidth, number> = {
  hairline: StyleSheet.hairlineWidth, // 'hairline' width uses the predefined hairline width from StyleSheet
  thin: 1, // 'thin' width is 1
  base: 2, // 'base' width is 2
  thick: 3, // 'thick' width is 3
};

// Define a type for shadow options
type Shadow = 'base';

// Define a record for shadow styles
export const shadow: Record<Shadow, ViewStyle> = {
  base: {
    shadowColor: Colors.grayScale.Dark, // Shadow color is taken from Colors module
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 3, // Vertical shadow offset
    },
    shadowOpacity: 0.27, // Opacity of the shadow
    shadowRadius: 4.65, // Blur radius of the shadow
    elevation: 6, // Elevation property for Android
  },
};
