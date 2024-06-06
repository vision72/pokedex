import React from 'react';
import { Text as RNText, StyleSheet, TextProps, TextStyle } from 'react-native';
import { Typography } from '../../../styles';

// Define the available text properties that can be passed to the component
type TextP = {
  fontSize?: Typography.FontSize; // Optional font size from the Typography styles
  fontWeight?: Typography.FontWeight; // Optional font weight from the Typography styles
  header?: Typography.Header; // Optional header style from the Typography styles
  body?: Typography.Body; // Optional body style from the Typography styles
};

// Extend the text properties with native text props to create a comprehensive type for the component props
type ETextProps = TextP & TextProps;

// Create styles based on the provided properties
const styles = (props: TextP): TextStyle =>
  StyleSheet.create({
    text: {
      alignSelf: 'center', // Center align the text by default
      ...(props.header ? Typography.header[props.header] : {}), // Apply header style if provided
      ...(props.body ? Typography.body[props.body] : {}), // Apply body style if provided
      ...(props.fontSize ? Typography.fontSize[props.fontSize] : {}), // Apply font size if provided
      ...(props.fontWeight ? Typography.fontWeight[props.fontWeight] : {}), // Apply font weight if provided
    },
  }).text; // Access the created 'text' style directly

// Define the custom Text component
export default function Text({
  fontSize,
  fontWeight,
  header,
  body,
  ...restProps
}: ETextProps) {
  return (
    // Render the native Text component with the generated styles and any additional props passed to the component
    <RNText
      style={styles({ fontSize, fontWeight, header, body })}
      {...restProps}>
      {restProps.children}
    </RNText>
  );
}
