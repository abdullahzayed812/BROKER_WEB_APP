import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { PropertyCard } from "./PropertyCard";

const mockListings = [
  {
    id: "1",
    type: "Apartment, Duplex",
    location: "Zamalek, Cairo",
    date: "1 Jan, 2025",
    price: "15M EGP",
    broker: "Ahmed @ Coldwell Banker",
    tags: ["Request", "Buy", "Primary"],
  },
  {
    id: "2",
    type: "Apartment",
    location: "New Cairo",
    date: "23 Feb, 2025",
    price: "7,000,000 EGP",
    broker: "Ali @ REMAS",
    tags: ["Request", "Buy", "Resale"],
  },
  {
    id: "3",
    type: "Apartment, Duplex",
    location: "Zamalek, Cairo",
    date: "1 Month from 06-01-2024",
    price: "3,000 EGP Daily",
    broker: "Sara @ Coldwell Banker",
    tags: ["Request", "Rent", "Short Stays"],
  },
  {
    id: "4",
    type: "Apartment, Duplex",
    location: "Zamalek, Cairo",
    date: "1 Jan, 2025",
    price: "18M EGP",
    broker: "Ahmed @ Coldwell Banker",
    tags: ["Request", "Buy", "Resale"],
  },
];

export const ListingGrid: React.FC = () => {
  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">2,457 Requests</Text>
        <View className="flex-row items-center">
          <Text className="text-gray-600">Saved Searches 3</Text>
          <View className="w-6 h-6 bg-gray-300 rounded-full ml-2" />{" "}
          {/* Placeholder for star icon */}
        </View>
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-gray-600">Sort by: Budget</Text>
          <View className="w-4 h-4 bg-gray-300 ml-1" />{" "}
          {/* Placeholder for dropdown icon */}
        </TouchableOpacity>
      </View>
      <FlatList
        data={mockListings}
        renderItem={({ item }) => <PropertyCard listing={item} />}
        keyExtractor={(item) => item.id}
        // numColumns={2}
        // columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};
