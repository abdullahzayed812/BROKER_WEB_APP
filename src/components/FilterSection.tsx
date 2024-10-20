import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export const FilterSection: React.FC = () => {
  return (
    <View className="my-4">
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-md">
          <Text className="text-white">Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white px-4 py-2 rounded-md border border-gray-300">
          <Text className="text-gray-600">Inventory</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row bg-white rounded-md border border-gray-300">
        <View className="w-6 h-6 bg-gray-300 self-center ml-2" />
        {/* Placeholder for search icon */}
        <TextInput placeholder="Search Location" className="flex-1 px-4 py-2" />
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-r-md">
          <Text className="text-white">Filters</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity className="bg-white px-4 py-2 rounded-md border border-gray-300">
          <Text className="text-gray-600">Show: All</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white px-4 py-2 rounded-md border border-gray-300">
          <Text className="text-gray-600">For you</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white px-4 py-2 rounded-md border border-gray-300">
          <Text className="text-gray-600">Urgent</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white px-4 py-2 rounded-md border border-gray-300">
          <Text className="text-gray-600">Resale</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white px-4 py-2 rounded-md border border-gray-300">
          <Text className="text-gray-600">Rent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
