import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { QuickMessageModal } from "../modals/QuickMessage";

export interface Property {
  id: number;
  type: string;
  subType: string;
  tag: string;
  user: {
    name: string;
    image: string;
  };
  property: {
    type: string;
    bedrooms: number;
    bathrooms: number;
  };
  location: string;
  date: string;
  price: string;
  matchedProperties: number;
}

interface PropertyCardProps {
  property: Property;
  isEditable?: boolean;
}

export function PropertyCard({
  property,
  isEditable = false,
}: PropertyCardProps) {
  const [showQuickMessageModal, setShowQuickMessageModal] = useState(false);

  const renderTags = () => (
    <View className="flex-row">
      <Text className="text-blue-600 font-semibold mr-2">{property.type}</Text>
      <Text
        className={`text-xs px-2 py-1 rounded-full mr-1 ${
          property.subType === "Buy"
            ? "bg-purple-100 text-purple-600"
            : "bg-orange-100 text-orange-600"
        }`}
      >
        {property.subType}
      </Text>
      <Text className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-600">
        {property.tag}
      </Text>
    </View>
  );

  const renderUserInfo = () => (
    <View className="flex-row items-center mt-2">
      <Image
        source={{ uri: property.user.image }}
        className="w-8 h-8 rounded-full mr-2"
      />
      <Text className="text-sm text-gray-600">{property.user.name}</Text>
      <Text className="text-xs text-gray-400 ml-auto">1d</Text>
    </View>
  );

  const renderPropertyDetails = () => (
    <View className="mt-2">
      <View className="flex-row items-center">
        <Ionicons name="home-outline" size={16} color="#6B7280" />
        <Text className="text-sm font-semibold ml-2">
          {property.property.type}{" "}
          <Text className="font-normal text-gray-500">
            {"\u{1F6CF}"} {property.property.bedrooms} {"\u{1F6BF}"}{" "}
            {property.property.bathrooms}
          </Text>
        </Text>
      </View>
      <View className="flex-row items-center justify-between mt-1">
        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={16} color="#6B7280" />
          <Text className="text-sm text-gray-600 ml-2">
            {property.location} <Text className="text-blue-500">+2 more</Text>
          </Text>
        </View>

        <Text className="md:hidden flex text-lg font-bold text-blue-600 mt-2">
          BOT {property.price}
          {isEditable && (
            <Text className="text-sm font-normal text-gray-500"> Monthly</Text>
          )}
        </Text>
      </View>
      <View className="md:flex hidden flex-row items-center mt-1">
        <Ionicons name="calendar-outline" size={16} color="#6B7280" />
        <Text className="text-sm text-gray-600 ml-2">{property.date}</Text>
      </View>
      <View className="md:flex hidden flex-row items-center mt-1">
        <Ionicons name="git-compare-outline" size={16} color="#6B7280" />
        <Text className="text-sm text-gray-600 ml-2">
          {isEditable ? "Side-by-side deal" : "50:50% deal"}
        </Text>
        <Ionicons
          name="information-circle-outline"
          size={16}
          color="#6B7280"
          className="ml-1"
        />
      </View>
    </View>
  );

  const renderPrice = () => (
    <Text className="md:flex hidden text-lg font-bold text-blue-600 mt-2">
      BOT {property.price}
      {isEditable && (
        <Text className="text-sm font-normal text-gray-500"> Monthly</Text>
      )}
    </Text>
  );

  const renderMatchedProperties = () => (
    <View className="md:flex hidden flex-row items-center bg-blue-50 rounded-lg p-2 mt-2">
      <Text className="text-sm text-blue-600 mr-2">
        {property.matchedProperties} Matched properties
      </Text>
      <View className="flex-row">
        {[1, 2, 3].map((_, index) => (
          <Image
            key={index}
            source={{ uri: "/placeholder.svg?height=24&width=24" }}
            className="w-6 h-6 rounded-full -ml-1 border border-white"
          />
        ))}
        <View className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center -ml-1 border border-white">
          <Text className="text-xs text-gray-600">
            +{property.matchedProperties - 3}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderActionButtons = () => (
    <View className="md:flex hidden flex-row justify-between mt-4">
      <Pressable className="bg-blue-100 py-2 px-4 rounded-full flex-1 mr-2">
        <Text className="text-blue-600 text-center font-semibold">Details</Text>
      </Pressable>
      <Pressable
        className="bg-green-500 py-2 px-4 rounded-full flex-1 mr-2"
        onPress={() => setShowQuickMessageModal(true)}
      >
        <Text className="text-white text-center font-semibold">WhatsApp</Text>
      </Pressable>
      <Pressable className="bg-gray-200 py-2 px-4 rounded-full flex-1">
        <Text className="text-gray-700 text-center font-semibold">Call</Text>
      </Pressable>
    </View>
  );

  const renderEditableButtons = () => (
    <View className="flex-row justify-between items-center mt-4">
      <Pressable className="p-2">
        <Ionicons name="create-outline" size={24} color="blue" />
      </Pressable>
      <Pressable className="p-2">
        <Ionicons name="trash-outline" size={24} color="red" />
      </Pressable>
      <View className="flex-row items-center bg-gray-200 rounded-full p-1">
        <View className="w-6 h-6 bg-blue-500 rounded-full" />
        <Text className="ml-2 mr-1 text-sm font-semibold">ON</Text>
      </View>
    </View>
  );

  return (
    <View className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
      <View className="flex-row justify-between items-start">
        {renderTags()}
        {isEditable ? (
          <Ionicons name="share-social-outline" size={20} color="gray" />
        ) : (
          <View className="flex-row">
            <Ionicons
              name="star-outline"
              size={20}
              color="gold"
              className="mr-2"
            />
            <Ionicons name="share-social-outline" size={20} color="gray" />
          </View>
        )}
      </View>
      {renderUserInfo()}
      {renderPropertyDetails()}
      {renderPrice()}
      {renderMatchedProperties()}
      {isEditable ? renderEditableButtons() : renderActionButtons()}

      {showQuickMessageModal ? (
        <QuickMessageModal
          isVisible={showQuickMessageModal}
          onClose={() => setShowQuickMessageModal(false)}
        />
      ) : null}
    </View>
  );
}
