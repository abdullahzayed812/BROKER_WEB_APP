import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropertyCard from "@/components/web/PropertyCard";
import { generateList } from "@/utility";
import { propertyItem } from "@/components/web/PropertyList";

const FilterDropdown = ({ label }) => (
  <Pressable className="bg-white rounded-lg px-4 py-2 flex-row items-center">
    <Text className="text-gray-700">{label}</Text>
    <Ionicons name="chevron-down" size={20} color="#9CA3AF" className="ml-2" />
  </Pressable>
);

export default function ContactedRequestsPage() {
  return (
    <View>
      <View className="flex-row items-center space-x-4 mb-6">
        <FilterDropdown label="Requests" />
        <FilterDropdown label="Rent" />
        <FilterDropdown label="Location" />
        <Pressable className="bg-blue-100 rounded-lg px-4 py-2 flex-row items-center">
          <Text className="text-blue-600 mr-2">All</Text>
          <Ionicons name="options-outline" size={20} color="#3B82F6" />
        </Pressable>
      </View>

      <Text className="text-2xl font-semibold mb-6">45 Contacted Requests</Text>

      <View className="flex-row flex-wrap" style={{ gap: 12 }}>
        {generateList(10, propertyItem).map((request) => (
          <View className="w-full max-w-sm">
            <PropertyCard property={request} isEditable={false} />
          </View>
        ))}
      </View>
    </View>
  );
}
