import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Property {
  id: string;
  type: string;
  location: string;
  price: string;
  paymentType: string;
  bedrooms: number;
  bathrooms: number;
  tags: string[];
  timeAgo: string;
}

interface PropertyListScreenProps {
  title: string;
  subtitle: string;
  properties: Property[];
  showEditControls?: boolean;
}

const PropertyListScreen: React.FC<PropertyListScreenProps> = ({
  title,
  subtitle,
  properties,
  showEditControls = false,
}) => {
  const [activeTab, setActiveTab] = useState("Requests");
  const [searchQuery, setSearchQuery] = useState("");

  const renderProperty = ({ item }: { item: Property }) => (
    <View className="bg-white p-4 mb-4 rounded-lg">
      <View className="flex-row justify-between mb-2">
        <View className="flex-row">
          {item.tags.map((tag, index) => (
            <View
              key={index}
              className={`rounded-full px-2 py-1 mr-2 ${
                tag === "Request"
                  ? "bg-blue-100"
                  : tag === "Buy"
                  ? "bg-pink-100"
                  : "bg-purple-100"
              }`}
            >
              <Text
                className={`text-xs ${
                  tag === "Request"
                    ? "text-blue-800"
                    : tag === "Buy"
                    ? "text-pink-800"
                    : "text-purple-800"
                }`}
              >
                {tag}
              </Text>
            </View>
          ))}
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-500 mr-2">{item.timeAgo}</Text>
          <TouchableOpacity>
            <Ionicons name="star-outline" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className="ml-2">
            <Ionicons name="share-social-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center mb-2">
        <Ionicons name="home-outline" size={20} color="gray" className="mr-2" />
        <Text className="font-semibold">{item.type}</Text>
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
      {showEditControls && (
        <View className="flex-row justify-between mt-2">
          <View className="flex-row">
            <TouchableOpacity className="mr-2">
              <Ionicons name="create-outline" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
          <Switch />
        </View>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100">
      <View className="flex-row justify-between items-center p-4 bg-white">
        <Text className="text-2xl font-bold">{title}</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="flex-row border-b border-gray-200">
        <TouchableOpacity
          onPress={() => setActiveTab("Requests")}
          className={`flex-1 py-2 ${
            activeTab === "Requests" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <Text
            className={`text-center ${
              activeTab === "Requests" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Requests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("Inventory")}
          className={`flex-1 py-2 ${
            activeTab === "Inventory" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <Text
            className={`text-center ${
              activeTab === "Inventory" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Inventory
          </Text>
        </TouchableOpacity>
      </View>
      {showEditControls && (
        <View className="p-4">
          <View className="flex-row bg-white rounded-full items-center px-4 py-2">
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              className="flex-1 ml-2"
              placeholder="Search Requests"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      )}
      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="text-gray-500">{subtitle}</Text>
        <TouchableOpacity>
          <Text className="text-blue-500">Sort</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={properties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-4"
      />
    </View>
  );
};

export default PropertyListScreen;
