import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AppHeaderProps {
  onBackPress: () => void;
  onNotificationPress: () => void;
  hasNotifications: boolean;
}

export default function AppHeader({
  onBackPress,
  onNotificationPress,
  hasNotifications,
}: AppHeaderProps) {
  return (
    <View className="md:hidden flex flex-row justify-between items-center p-4 bg-white">
      <TouchableOpacity onPress={onBackPress} className="p-2">
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
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
