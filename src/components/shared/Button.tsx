import React from "react";
import { Text, Pressable } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  primary?: boolean;
  classes?: string;
  textClasses?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  primary = false,
  classes,
  textClasses,
}) => (
  <Pressable
    onPress={onPress}
    className={`${classes} py-3 px-6 rounded-full ${
      primary ? "bg-blue-500" : "bg-blue-100"
    }`}
  >
    <Text
      className={`${textClasses} text-center font-semibold ${
        primary ? "text-white" : "text-blue-500"
      }`}
    >
      {title}
    </Text>
  </Pressable>
);
