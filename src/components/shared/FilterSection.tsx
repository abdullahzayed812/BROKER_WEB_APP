import React from "react";
import { View, Text } from "react-native";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  children,
}) => (
  <View className="mb-6">
    <Text className="text-lg font-bold mb-2">{title}</Text>
    {children}
  </View>
);
