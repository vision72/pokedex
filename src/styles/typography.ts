import {TextStyle} from 'react-native';

// Define a type for font sizes with various options
type FontSize = 'x10' | 'x20' | 'x30' | 'x40' | 'x50';

// Define an object to map font size options to TextStyle objects with specific font sizes
export const fontSize: Record<FontSize, TextStyle> = {
  x10: {
    fontSize: 8, // Smallest font size
  },
  x20: {
    fontSize: 12, // Small font size
  },
  x30: {
    fontSize: 14, // Medium font size
  },
  x40: {
    fontSize: 16, // Large font size
  },
  x50: {
    fontSize: 24, // Largest font size
  },
};

// Define a type for font weights with two options: 'regular' and 'bold'
type FontWeight = 'regular' | 'bold';

// Define an object to map font weight options to TextStyle objects with specific font weights
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    fontWeight: '400', // Regular font weight
  },
  bold: {
    fontWeight: '700', // Bold font weight
  },
};

// Define a type for header styles with various options
type Header = 'subtitle3' | 'subtitle2' | 'subtitle1' | 'headline';

// Define an object to map header options to TextStyle objects
export const header: Record<Header, TextStyle> = {
  subtitle3: {
    ...fontWeight.bold, // Use bold font weight
    ...fontSize.x20, // Use font size x20
  },
  subtitle2: {
    ...fontSize.x30, // Use font size x30
    ...fontWeight.bold, // Use bold font weight
  },
  subtitle1: {
    ...fontSize.x40, // Use font size x40
    ...fontWeight.bold, // Use bold font weight
  },
  headline: {
    ...fontSize.x50, // Use font size x50
    ...fontWeight.bold, // Use bold font weight
  },
};

// Define a type for body text styles with various options
type Body = 'caption' | 'body3' | 'body2' | 'body1';

// Define an object to map body options to TextStyle objects
export const body: Record<Body, TextStyle> = {
  caption: {
    ...fontSize.x10, // Use font size x10
    ...fontWeight.regular, // Use regular font weight
  },
  body3: {
    ...fontSize.x20, // Use font size x20
    ...fontWeight.regular, // Use regular font weight
  },
  body2: {
    ...fontSize.x30, // Use font size x30
    ...fontWeight.regular, // Use regular font weight
  },
  body1: {
    ...fontSize.x40, // Use font size x40
    ...fontWeight.regular, // Use regular font weight
  },
};
