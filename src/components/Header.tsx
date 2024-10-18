import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center p-4 border-b border-gray-200 bg-white">
      <View className="flex-row space-x-2 flex-1">
        <TouchableOpacity className="bg-primary px-4 py-2 rounded-full flex-row items-center">
          <Text className="text-white font-bold">Requests</Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="white"
            style={{ marginLeft: 4 }}
          />
        </TouchableOpacity>
        <TouchableOpacity className="px-4 py-2 flex-row items-center">
          <Text className="text-gray-600">Rent</Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="gray"
            style={{ marginLeft: 4 }}
          />
        </TouchableOpacity>
        <TouchableOpacity className="px-4 py-2 flex-row items-center">
          <Text className="text-gray-600">Location</Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="gray"
            style={{ marginLeft: 4 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Ionicons name="options-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
