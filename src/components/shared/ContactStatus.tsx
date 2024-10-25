import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ContactStatusProps {
  date: string;
  method: "whatsapp" | "email" | "phone";
}

export const ContactStatus: React.FC<ContactStatusProps> = ({
  date,
  method,
}) => {
  const getMethodIcon = () => {
    switch (method) {
      case "whatsapp":
        return "logo-whatsapp";
      case "email":
        return "mail-outline";
      case "phone":
        return "call-outline";
      default:
        return "help-outline";
    }
  };

  return (
    <View className="flex-row justify-between items-center bg-green-50 rounded-lg px-4 py-2">
      <Text className="text-sm text-green-800">Last Contacted on {date}</Text>
      <View className="flex-row items-center rounded-lg bg-white p-1">
        <Text className="text-sm text-bold mr-1 text-green-800">Via</Text>
        <Ionicons name={getMethodIcon()} size={16} color="#25D366" />
      </View>
    </View>
  );
};
