import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PropertyItemProps {
  item: {
    type: string;
    action: string;
    tag: string;
    time: string;
    stars: number;
    shares: number;
    property: string;
    location: string;
    price: string;
    paymentType: string;
  };
}

const PropertyItem: React.FC<PropertyItemProps> = ({ item }) => {
  return (
    <View className="bg-white m-2 p-4 rounded-lg border border-gray-200">
      <View className="flex-row justify-between items-start">
        <View>
          <View className="flex-row space-x-2 mb-1">
            <Text className="text-primary font-bold">{item.type}</Text>
            <Text
              className={`font-bold ${
                item.action === "Buy" ? "text-secondary" : "text-orange-500"
              }`}
            >
              {item.action}
            </Text>
            <Text className="text-gray-600">{item.tag}</Text>
          </View>
          <View className="flex-row items-center mb-1">
            <Ionicons name="home-outline" size={16} color="gray" />
            <Text className="text-gray-800 ml-1">{item.property}</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={16} color="gray" />
            <Text className="text-gray-600 ml-1">{item.location}</Text>
          </View>
        </View>
        <View className="items-end">
          <Text className="text-gray-500 mb-1">{item.time}</Text>
          <View className="flex-row items-center">
            <Ionicons name="star-outline" size={16} color="#CCCCCC" />
            <Text className="text-gray-600 mx-1">{item.stars}</Text>
            <Ionicons name="share-social-outline" size={16} color="#CCCCCC" />
            <Text className="text-gray-600 ml-1">{item.shares}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-gray-600">{item.paymentType}</Text>
        <Text className="text-primary font-bold text-lg">{item.price}</Text>
      </View>
    </View>
  );
};

export default PropertyItem;
