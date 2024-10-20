import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// import { Info } from 'lucide-react-native';

export default function TextInputSection() {
  return (
    <View className="mb-4">
      <View className="flex-row justify-between mb-1">
        <Text className="font-medium">Paste Text (English/عربي)</Text>
        <Pressable className="flex-row items-center">
          <Text className="text-blue-500 mr-1">How it works</Text>
          {/* <Info size={16} color="#3b82f6" /> */}
          <MaterialIcons icon="chevron-down" size={24} color="black" />
        </Pressable>
      </View>
      <TextInput
        multiline
        numberOfLines={4}
        className="border border-gray-300 rounded-md p-2"
        placeholder="Example: For rent Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house..."
      />
    </View>
  );
}
