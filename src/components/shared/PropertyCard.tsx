import React, { useState } from "react";
import { View, Text, Image, Pressable, Platform, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { QuickMessageModal } from "../modals/QuickMessage";
import { ContactStatus } from "./ContactStatus";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SwitchButton } from "./SwitchButton";

export interface User {
  name: string;
  image: string;
}

export interface PropertyDetails {
  type: string;
  bedrooms: number;
  bathrooms: number;
}

export interface Property {
  id: number;
  type: string;
  subType: string;
  tag: string;
  user: User;
  property: PropertyDetails;
  location: string;
  date: string;
  price: string;
  matchedProperties: number;
}

interface PropertyCardProps {
  property: Property;
  isEditable?: boolean;
  isContactStatus?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isEditable = false,
  isContactStatus = false,
}) => {
  const [showQuickMessageModal, setShowQuickMessageModal] = useState(false);

  const renderRightActions = () => (
    <View className="flex-row items-center">
      <Pressable className="w-[80px] justify-center items-center bg-green_50 rounded-lg">
        <Text className="text-lg font-bold text-green_500">Edit</Text>
      </Pressable>
      <Pressable className="w-[80px] justify-center items-center bg-green_500 rounded-lg">
        <Text className="text-lg font-bold text-white">Delete</Text>
      </Pressable>
    </View>
  );

  const renderTags = () => (
    <View className="flex-row">
      <Text className="bg-gray_50 text-primary_500 font-semibold text-sm px-2 py-1 rounded-full mr-1">
        {property.type}
      </Text>

      <Text
        className={`text-sm px-2 py-1 rounded-full mr-1 ${
          property.subType === "Buy"
            ? "bg-brown_50 text-brown_500"
            : "bg-purple_50 text-purple_500"
        }`}
      >
        {property.subType}
      </Text>

      <Text className="text-sm px-2 py-1 rounded-full bg-purple_50 text-purple_500">
        {property.tag}
      </Text>
    </View>
  );

  const renderUserInfo = () => (
    <View className="md:flex hidden flex-row items-center mt-2">
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
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Ionicons name="home-outline" size={16} color="#6B7280" />
          <Text className="text-sm font-semibold ml-2">
            {property.property.type}{" "}
          </Text>
        </View>
        <View className="flex-row items-center" style={{ gap: 12 }}>
          <View className="flex-row items-center" style={{ gap: 4 }}>
            <Ionicons
              name="bed-outline"
              size={Platform.OS !== "web" ? 18 : 3}
              color="#6B7280"
            />
            <Text className="text-gray_500">{property.property.bathrooms}</Text>
          </View>
          <View className="flex-row items-center" style={{ gap: 4 }}>
            <MaterialCommunityIcons
              name="bathtub-outline"
              size={Platform.OS !== "web" ? 18 : 3}
              color="#6B7280"
            />
            <Text className="text-gray_500">{property.property.bedrooms}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={16} color="#6B7280" />
          <Text className="text-sm font-semibold ml-2">
            {property.location} <Text className="text-blue-500">+2</Text>
          </Text>
        </View>
        {Platform.OS !== "web" ? renderPrice() : null}
      </View>
      {renderAdditionalInfo()}
    </View>
  );

  const renderAdditionalInfo = () => (
    <View className="md:flex hidden">
      <View className="flex-row items-center mt-1">
        <Ionicons name="calendar-outline" size={16} color="#6B7280" />
        <Text className="text-sm text-gray-600 ml-2">{property.date}</Text>
      </View>
      <View className="flex-row items-center mt-1">
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
      {Platform.OS === "web" ? renderPrice() : null}
    </View>
  );

  const renderPrice = () => (
    <Text className="self-end text-lg font-bold text-blue-600 ">
      <Text className="text-[12px] text-gray_500">installments</Text>{" "}
      {property.price}
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
      <View className="flex-row items-center" style={{ gap: 6 }}>
        <Pressable className="p-3 rounded-lg bg-blue-50">
          <Ionicons name="pencil-outline" size={24} color="blue" />
        </Pressable>
        <Pressable className="p-3 rounded-lg bg-red-50">
          <Ionicons name="trash-outline" size={24} color="red" />
        </Pressable>
      </View>

      {renderSwitchButton()}
    </View>
  );

  const renderSwitchButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
      <View
        className="flex-row items-center p-3 rounded-lg bg-white border border-blue-100"
        style={{ gap: 8 }}
      >
        <Text className="text-lg">{isEnabled ? "ON" : "OFF"}</Text>
        <SwitchButton value={isEnabled} onValueChange={toggleSwitch} />
      </View>
    );
  };

  return (
    <View className="rounded-lg border border-gray-100 p-4 w-full md:max-w-sm">
      <View className="flex-row justify-between items-start">
        {renderTags()}
        {isEditable ? (
          <Ionicons name="share-social-outline" size={20} color="gray" />
        ) : (
          <View className="flex-row" style={{ gap: 8 }}>
            <Text className="text-gray_500">1h</Text>
            <Ionicons name="star-outline" size={20} />
            <Ionicons name="share-social-outline" size={20} />
          </View>
        )}
      </View>
      {renderUserInfo()}
      {renderPropertyDetails()}
      {renderMatchedProperties()}
      {isEditable ? renderEditableButtons() : renderActionButtons()}

      {isContactStatus ? (
        <ContactStatus date={"whatsapp"} method={"whatsapp"} />
      ) : null}

      {showQuickMessageModal && (
        <QuickMessageModal
          isVisible={showQuickMessageModal}
          onClose={() => setShowQuickMessageModal(false)}
        />
      )}
    </View>
  );
};

export default PropertyCard;
