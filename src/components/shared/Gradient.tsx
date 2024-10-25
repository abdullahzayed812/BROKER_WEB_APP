import React from "react";
import { View, ViewStyle } from "react-native";

interface GradientProps {
  colors: string[];
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const Gradient: React.FC<GradientProps> = ({
  colors,
  style,
  children,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors[0],
          //   backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
