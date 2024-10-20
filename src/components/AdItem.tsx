import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Feather } from "@expo/vector-icons";

interface AdItemProps {
  request: {
    type: string;
    location: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
  };
}

export const AdItem: React.FC<AdItemProps> = ({ request }) => {
  return (
    <View className="bg-white p-4 border-b border-gray-200">
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row">
          <Text className="text-blue-600 font-bold mr-2">Request</Text>
          <Text className="text-purple-600 font-bold mr-2">Buy</Text>
          <Text className="text-pink-600 font-bold">Primary</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-400 mr-2">1h</Text>
          <TouchableOpacity className="mr-2">
            <Feather name="star" size={16} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share-2" size={16} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="font-bold mb-1">{request.type}</Text>
      <Text className="text-gray-600 mb-2">
        {request.location} <Text className="text-blue-500">+2</Text>
      </Text>
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center">
          <Feather icon="bed" size={16} color="gray" className="mr-1" />
          <Text className="text-gray-600 mr-2">{request.bedrooms}</Text>
          <Feather name="droplet" size={16} color="gray" className="mr-1" />
          <Text className="text-gray-600">{request.bathrooms}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-400 mr-2">Installments</Text>
          <Text className="text-blue-600 font-bold">{request.price}</Text>
        </View>
      </View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row">
          <TouchableOpacity className="bg-blue-100 p-2 rounded-full mr-2">
            <Feather name="edit-2" size={16} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-red-100 p-2 rounded-full">
            <Feather name="trash-2" size={16} color="red" />
          </TouchableOpacity>
        </View>
        <Switch />
      </View>
    </View>
  );
};
