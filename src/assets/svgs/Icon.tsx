import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { memo } from "react";
import { ViewStyle } from "react-native";
// import Urgent from "./"

const cIcons = {
  // "c-urgent": Urgent,
};

type IconNameType =
  | keyof typeof cIcons
  | React.ComponentProps<typeof FontAwesome5>["name"];

const Icon = memo(function Icon_({
  size,
  color,
  name,
  solid = false,
  light = false,
  brand = false,
  style = {},
  fill,
  width,
  height,
}: {
  size: number;
  color: string;
  name: IconNameType;
  solid?: boolean;
  light?: boolean;
  brand?: boolean;
  style?: ViewStyle;
  fill?: string;
  width?: number;
  height?: number;
}) {
  if (name in cIcons) {
    const CIcon = cIcons[name as "c-message"];

    return (
      <CIcon
        width={width ?? size}
        height={height ?? size}
        color={color}
        style={style}
        fill={fill || "transparent"}
      />
    );
  }

  return (
    <FontAwesome5
      name={name as React.ComponentProps<typeof FontAwesome5>["name"]}
      size={size}
      color={color}
      solid={solid}
      light={light}
      brand={brand}
      style={style}
    />
  );
});

export default Icon;
export { cIcons };
export type { IconNameType };
