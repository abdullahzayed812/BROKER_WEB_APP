import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AdItem } from "./AdItem";

const mocAds = [
  {
    id: "1",
    type: "Apartment, Duplex",
    location: "Zamalek, Cairo",
    price: "15M EGP",
    bedrooms: 5,
    bathrooms: 3,
  },
  {
    id: "2",
    type: "Apartment, Duplex",
    location: "Zamalek, Cairo",
    price: "15M EGP",
    bedrooms: 5,
    bathrooms: 3,
  },
  {
    id: "3",
    type: "Apartment, Duplex",
    location: "Zamalek, Cairo",
    price: "15M EGP",
    bedrooms: 5,
    bathrooms: 3,
  },
];

export const AdsList = () => {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="text-gray-600">45 Requests</Text>
        <TouchableOpacity className="flex-row items-center">
          <Feather name="arrow-down" size={16} color="gray" />
          <Text className="text-gray-600 ml-1">Sort</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={mocAds}
        renderItem={({ item }) => <AdItem request={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
