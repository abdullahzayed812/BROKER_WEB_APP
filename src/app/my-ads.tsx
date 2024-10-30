import React from "react";
import PropertyList from "@/components/shared/PropertyList";
import SearchBar from "@/components/shared/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { HeaderMobile } from "@/components/shared/HeaderMobile";
import AppHeader from "@/components/shared/AppHeader";

const MyAdsScreen: React.FC = () => {
  return (
    <>
      <AppHeader
        title={"My Ads"}
        onBackPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        onNotificationPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        hasNotifications={false}
      />

      <SearchBar />

      <HeaderMobile />

      <View className="h-4" />

      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="text-sm text-gray_900">
          <Text className="font-bold">14,987</Text> Requests
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          className="flex-row itemsc-e
         p-2"
          style={{ gap: 6 }}
        >
          <Text className="text-gray-700 font-semibold">Sort</Text>
          <Ionicons name="swap-vertical-outline" size={18} color="#4B5563" />
        </TouchableOpacity>
      </View>

      <PropertyList isEditableCard />
    </>
  );
};

export default MyAdsScreen;
