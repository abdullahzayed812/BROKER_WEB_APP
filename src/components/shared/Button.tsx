import React from "react";
import { Text, Pressable } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

interface ButtonProps {
  onPress: () => void;
  title?: string;
  primary?: boolean;
  classes?: string;
  textClasses?: string;
  icon?: any;
  iconColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  primary = false,
  classes,
  textClasses,
  icon,
  iconColor,
}) => (
  <Pressable
    onPress={onPress}
    className={`${classes} py-3 px-6 rounded-lg ${
      icon ? "flex-row items-center" : ""
    } ${primary ? "bg-blue-500" : "bg-blue-100"}`}
    style={{ gap: 8 }}
  >
    {icon ? <FontAwesome name={icon} size={18} color={iconColor} /> : null}

    {title ? (
      <Text
        className={`${textClasses} text-center font-semibold ${
          primary ? "text-white" : "text-blue-500"
        }`}
      >
        {title}
      </Text>
    ) : null}
  </Pressable>
);
