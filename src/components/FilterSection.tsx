import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FilterSection: React.FC = () => {
  return (
    <View className="p-4 border-b border-gray-200 bg-white">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-gray-600 mr-1">Show: All</Text>
          <Ionicons name="chevron-down" size={16} color="gray" />
        </TouchableOpacity>
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Text className="text-gray-600">For you</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-600">Urgent</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-600">Resale</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-lg">3,488 Requests</Text>
        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="heart-outline" size={18} color="gray" />
          <Text className="text-gray-600 mx-2">Saved Searches</Text>
          <Ionicons name="funnel-outline" size={18} color="gray" />
          <Text className="text-gray-600 ml-1">Sort</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterSection;
