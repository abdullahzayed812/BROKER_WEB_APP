import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function BottomTabs() {
  return (
    <View className="md:hidden flex flex-row justify-around items-center bg-white border-t border-gray-400 py-2">
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
      <Link href="/add-request" asChild>
        <TouchableOpacity className="items-center justify-center">
          <View className="bg-blue-400 w-14 h-14 border-2 border-yellow-600 rounded-full flex items-center justify-center">
            <Text className="text-white text-3xl">+</Text>
          </View>
        </TouchableOpacity>
      </Link>
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
