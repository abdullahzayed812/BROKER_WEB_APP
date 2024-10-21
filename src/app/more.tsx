import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const MoreScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="bg-white p-4 mb-4">
        <View className="flex-row items-center mb-4">
          <Image
            source={{ uri: "https://example.com/profile-image.jpg" }}
            className="w-12 h-12 rounded-full mr-4"
          />
          <View>
            <View className="flex-row items-center">
              <Text className="font-bold text-lg mr-2">Ahmed Radwan</Text>
              <View className="bg-green-100 rounded-full px-2 py-1">
                <Text className="text-green-800 text-xs">Admin</Text>
              </View>
            </View>
            <Text className="text-gray-500">@Coldwill Banker</Text>
          </View>
          <TouchableOpacity className="ml-auto">
            <Text className="text-blue-500">EN</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-blue-50 p-4 rounded-lg mb-4">
          <Text className="font-semibold mb-2">Invite Users</Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 flex-1 mr-2">
              https://app.sds.com/ref/etr541531
            </Text>
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded">
              <Text className="text-white">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg">
          <Text className="text-white font-semibold text-center">
            Advertise with us
          </Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white p-4 mb-4">
        <Text className="font-bold text-lg mb-4">Dashboard</Text>
        <Link href="members" asChild>
          <TouchableOpacity className="flex-row items-center justify-between py-2 border-b border-gray-200">
            <Text>Members</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        </Link>
        <Link href="/contacts" asChild>
          <TouchableOpacity className="flex-row items-center justify-between py-2 border-b border-gray-200">
            <Text>Contacted</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        </Link>
        <TouchableOpacity className="flex-row items-center justify-between py-2">
          <Text>Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="bg-white p-4">
        <Text className="font-bold text-lg mb-4">For Companies</Text>
        <TouchableOpacity className="flex-row items-center justify-between py-2">
          <Text>About us</Text>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreScreen;
