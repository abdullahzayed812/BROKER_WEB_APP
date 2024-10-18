import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center p-4 bg-white">
      {Platform.OS === "web" ? (
        <>
          <Text className="text-2xl font-bold">SDS</Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity>
              <Text className="text-gray-600">Find</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-600">Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-600">My Ads</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-600">Members</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-600">Contacted</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded">
            <Text className="text-white">Create Ad</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View className="flex-1">
            <TouchableOpacity className="bg-yellow-400 rounded-full py-2 px-4">
              <Text className="font-semibold">Inventory</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center space-x-4">
            <TouchableOpacity>
              <Text className="text-gray-600">Rent</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-600">Location</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Header;
