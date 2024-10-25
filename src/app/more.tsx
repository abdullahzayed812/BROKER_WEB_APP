import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const AdminDashboard: React.FC = () => {
  return (
    <ScrollView className="flex-1 100">
      <View className="bg-white p-4 rounded-lg m-4 shadow-sm">
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-gray-200 rounded-full mr-3 items-center justify-center">
              <Ionicons name="person-outline" size={24} color="#4A5568" />
            </View>
            <View>
              <View className="flex-row items-center">
                <Text className="text-xs font-semibold text-green-500 mr-2">
                  Admin
                </Text>
                <Text className="text-lg font-semibold">Ahmed Radwan</Text>
              </View>
              <Text className="text-sm text-gray-500">@Coldwill Banker</Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row items-center bg-gray-100 px-2 py-1 rounded">
            <Text className="mr-1">EN</Text>
            <Ionicons name="chevron-down" size={16} color="#4A5568" />
          </TouchableOpacity>
        </View>
        <View className="bg-blue-50 p-3 rounded-lg mb-2">
          <Text className="text-sm font-semibold mb-2">Invite Users</Text>
          <View className="flex-row">
            <TextInput
              className="flex-1 bg-white border border-gray-200 rounded-l-lg px-3 py-2 text-sm"
              placeholder="https://app.sds.com/refPetr541531"
            />
            <TouchableOpacity className="bg-blue-500 rounded-r-lg px-4 py-2">
              <Text className="text-white font-semibold">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity className="mx-4 mb-4">
        <LinearGradient
          colors={["#4ade80", "#3b82f6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="rounded-lg p-4"
        >
          <View className="flex-row items-center justify-center">
            <Ionicons
              name="megaphone-outline"
              size={24}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text className="text-white font-semibold text-lg">
              Advertise with us
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <View className="bg-white rounded-lg mx-4 mb-4 shadow-sm">
        <Text className="text-lg font-semibold p-4 border-b border-gray-100">
          Dashboard
        </Text>
        {[
          { icon: "people-outline", label: "Members", href: "/members" },
          { icon: "call-outline", label: "Contacted", href: "/contacts" },
          { icon: "settings-outline", label: "Settings", href: "" },
        ].map((item, index) => (
          <Link href={item.href} asChild>
            <TouchableOpacity
              key={index}
              className="flex-row items-center p-4 border-b border-gray-100"
            >
              <Ionicons
                name={item.icon as any}
                size={24}
                color="#4A5568"
                className="mr-3"
              />
              <Text className="flex-1">{item.label}</Text>
              <Ionicons name="chevron-forward" size={24} color="#4A5568" />
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View className="bg-white rounded-lg mx-4 mb-4 shadow-sm">
        <Text className="text-lg font-semibold p-4 border-b border-gray-100">
          For Companies
        </Text>
        {[
          { icon: "information-circle-outline", label: "About us" },
          { icon: "mail-outline", label: "Contact us" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center p-4 border-b border-gray-100"
          >
            <Ionicons
              name={item.icon as any}
              size={24}
              color="#4A5568"
              className="mr-3"
            />
            <Text className="flex-1">{item.label}</Text>
            <Ionicons name="chevron-forward" size={24} color="#4A5568" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default AdminDashboard;
