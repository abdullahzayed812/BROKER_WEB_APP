import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AppHeaderProps {
  title: string;
  onBackPress: () => void;
  onNotificationPress: () => void;
  hasNotifications: boolean;
  hasBackButton?: boolean;
}

export default function AppHeader({
  title,
  onBackPress,
  onNotificationPress,
  hasNotifications,
  hasBackButton,
}: AppHeaderProps) {
  return (
    <View className="md:hidden flex flex-row justify-between items-center px-4 pt-4 bg-white">
      {hasBackButton ? (
        <TouchableOpacity onPress={onBackPress} className="p-2">
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      ) : null}

      {title ? (
        <Text className="text-[22px] font-bol text-gray-900">{title}</Text>
      ) : null}

      <View className="flex-1" />

      <TouchableOpacity onPress={onNotificationPress} className="p-2 relative">
        <Ionicons name="notifications-outline" size={24} color="black" />
        {hasNotifications && (
          <View className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </TouchableOpacity>
    </View>
  );
}
