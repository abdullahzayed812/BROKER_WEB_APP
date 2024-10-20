import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Property {
  type: string;
  location: string;
  date: string;
  price: string;
  broker: string;
  tags: string[];
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 mb-4 w-[300px]">
      <View className="flex-row mb-2">
        {property.tags.map((tag, index) => (
          <View key={index} className="bg-gray-200 rounded-full px-2 py-1 mr-1">
            <Text className="text-xs text-gray-600">{tag}</Text>
          </View>
        ))}
      </View>
      <View className="flex-row justify-between mb-2">
        <View className="w-8 h-8 bg-gray-300 rounded-full" />{" "}
        {/* Placeholder for broker avatar */}
        <Text className="text-sm text-gray-600 mb-2">{property.broker}</Text>
        <TouchableOpacity>
          <View className="w-6 h-6 bg-gray-300" />{" "}
          {/* Placeholder for star icon */}
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="w-6 h-6 bg-gray-300" />{" "}
          {/* Placeholder for share icon */}
        </TouchableOpacity>
      </View>
      <Text className="font-bold">{property.type}</Text>
      <Text className="text-gray-600 text-sm">{property.location}</Text>
      <Text className="text-gray-600 text-sm">{property.date}</Text>
      <Text className="text-lg font-bold text-blue-600">{property.price}</Text>
      <View className="flex-row items-center my-2">
        <Text className="text-xs text-gray-600 mr-2">
          15 Matched properties
        </Text>
        <View className="flex-row">
          {[1, 2, 3, 4].map((_, index) => (
            <View
              key={index}
              className="w-6 h-6 bg-gray-300 rounded-full -ml-2"
            /> /* Placeholder for matched property avatars */
          ))}
        </View>
      </View>
      <View className="flex-row justify-between mt-2">
        <TouchableOpacity className="bg-blue-500 rounded-md py-1 px-2">
          <Text className="text-white text-center text-xs">Details</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-500 rounded-md py-1 px-2">
          <Text className="text-white text-center text-xs">WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-500 rounded-md py-1 px-2">
          <Text className="text-white text-center text-xs">Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
