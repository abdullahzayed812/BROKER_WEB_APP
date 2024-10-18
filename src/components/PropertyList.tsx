import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropertyModal, { Property } from "./PropertyModal";

const PropertyList: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const properties: Property[] = [
    {
      id: "1",
      type: "Villa",
      location: "New Cairo, Cairo",
      price: "30M EGP",
      paymentType: "Installments",
      bedrooms: 5,
      bathrooms: 4,
      tags: ["Inventory", "For Sale", "Primary"],
      agent: {
        name: "Ahmed Radwan",
        company: "Coldwill Banker",
        avatar: "https://example.com/avatar.jpg",
        rating: 4.5,
      },
      extraDetails:
        "For rent: Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house.",
      matchedProperties: [
        "https://example.com/property1.jpg",
        "https://example.com/property2.jpg",
        "https://example.com/property3.jpg",
        "https://example.com/property4.jpg",
        "https://example.com/property5.jpg",
      ],
    },
    // Add more properties here...
  ];

  const renderProperty = ({ item }: { item: Property }) => (
    <TouchableOpacity
      onPress={() => setSelectedProperty(item)}
      className="bg-white p-4 mb-4 rounded-lg shadow"
    >
      <View className="flex-row justify-between mb-2">
        <View className="flex-row items-center">
          <Ionicons
            name="home-outline"
            size={20}
            color="gray"
            className="mr-2"
          />
          <Text className="font-semibold">{item.type}</Text>
        </View>
        <View className="flex-row">
          <TouchableOpacity className="mr-2">
            <Ionicons name="star-outline" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="share-social-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center mb-2">
        <Ionicons
          name="location-outline"
          size={16}
          color="gray"
          className="mr-1"
        />
        <Text className="text-gray-600">{item.location}</Text>
      </View>
      <View className="flex-row justify-between mb-2">
        <Text className="font-bold text-blue-500 text-xl">{item.price}</Text>
        <Text className="text-gray-600">{item.paymentType}</Text>
      </View>
      <View className="flex-row mb-2">
        <View className="flex-row items-center mr-4">
          <Ionicons
            name="bed-outline"
            size={16}
            color="gray"
            className="mr-1"
          />
          <Text className="text-gray-600">{item.bedrooms}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons
            name="water-outline"
            size={16}
            color="gray"
            className="mr-1"
          />
          <Text className="text-gray-600">{item.bathrooms}</Text>
        </View>
      </View>
      <View className="flex-row flex-wrap mb-2">
        {item.tags.map((tag, index) => (
          <View
            key={index}
            className={`rounded-full px-2 py-1 mr-2 mb-2 ${
              tag === "Inventory"
                ? "bg-yellow-200"
                : tag === "For Sale"
                ? "bg-pink-200"
                : tag === "For Rent"
                ? "bg-orange-200"
                : tag === "Primary"
                ? "bg-purple-200"
                : tag === "Resale"
                ? "bg-blue-200"
                : tag === "Short stays"
                ? "bg-green-200"
                : "bg-gray-200"
            }`}
          >
            <Text className="text-xs">{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={properties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id}
        className="mt-4"
      />
      {selectedProperty && (
        <PropertyModal
          isVisible={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
          property={selectedProperty}
        />
      )}
    </View>
  );
};

export default PropertyList;
