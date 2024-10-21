import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropertyCard from "@/components/shared/PropertyCard";
import { generateList } from "@/utility";
import { propertyItem } from "@/components/shared/PropertyList";
import AppHeader from "@/components/shared/AppHeader";
import { router } from "expo-router";

const FilterDropdown = ({ label }) => (
  <Pressable className="bg-white rounded-lg px-4 py-2 flex-row items-center">
    <Text className="text-gray-700">{label}</Text>
    <Ionicons name="chevron-down" size={20} color="#9CA3AF" className="ml-2" />
  </Pressable>
);

export default function ContactedRequestsPage() {
  return (
    <View>
      <View className="flex-row flex-wrap justify-center" style={{ gap: 12 }}>
        {generateList(10, propertyItem).map((request) => (
          <View className="w-full max-w-sm">
            <PropertyCard property={request} isEditable={false} />
          </View>
        ))}
      </View>
    </View>
  );
}
