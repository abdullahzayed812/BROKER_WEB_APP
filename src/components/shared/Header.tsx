import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Header() {
  return (
    <View className="md:flex hidden flex-row justify-between items-center py-8 px-16 bg-white border-b border-gray-200">
      <View>
        <Text className="text-2xl font-bold text-blue-500 mr-2">SDS</Text>
        <Text className="text-sm text-gray-500">Side-by-Side</Text>
      </View>

      <View className="flex-row items-center">
        <Link href="/" asChild>
          <Pressable className="mr-4">
            <Text className="">Find</Text>
          </Pressable>
        </Link>
        <Link href="/favorites" asChild>
          <Pressable className="mr-4">
            <Text className="">Favorites</Text>
          </Pressable>
        </Link>
        <Link href="/my-ads" asChild>
          <Pressable className="mr-4">
            <Text className="">My Ads</Text>
          </Pressable>
        </Link>
        <Link href="/members" asChild>
          <Pressable className="mr-4">
            <Text className="">Members</Text>
          </Pressable>
        </Link>
        <Link href="/contacts" asChild>
          <Pressable className="mr-4">
            <Text className="">Contacts</Text>
          </Pressable>
        </Link>
        <Link href="/add-request" asChild>
          <Pressable className="bg-blue-500 px-6 py-4 rounded-lg">
            <Text className="text-white">Create Ad</Text>
          </Pressable>
        </Link>
      </View>

      <View className="flex-row">
        <Pressable className="ml-4">
          <Ionicons name="person-outline" size={24} color="#000" />
        </Pressable>
        <Pressable className="ml-4">
          <Ionicons name="globe-outline" size={24} color="#000" />
        </Pressable>
        <Pressable className="ml-4">
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </Pressable>
      </View>
    </View>
  );
}
