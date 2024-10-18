import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function BottomTabs() {
  return (
    <View className="flex-row justify-around items-center bg-white border-t border-green-600 py-2">
      <Link href="/" asChild>
        <TouchableOpacity className="items-center">
          <Ionicons name="search" size={24} color="#007AFF" />
          <Text className="text-xs mt-1 text-blue-500">Find</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/favorites" asChild>
        <TouchableOpacity className="items-center">
          <Ionicons name="star-outline" size={24} color="gray" />
          <Text className="text-xs mt-1 text-gray-500">Favorites</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity className="items-center">
        <View className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center -mt-5">
          <Text className="text-white text-3xl">+</Text>
        </View>
      </TouchableOpacity>
      <Link href="/my-ads" asChild>
        <TouchableOpacity className="items-center">
          <Ionicons name="document-text-outline" size={24} color="gray" />
          <Text className="text-xs mt-1 text-gray-500">My Ads</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/more" asChild>
        <TouchableOpacity className="items-center">
          <Ionicons name="menu-outline" size={24} color="gray" />
          <Text className="text-xs mt-1 text-gray-500">More</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
