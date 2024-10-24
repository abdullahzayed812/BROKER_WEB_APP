import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function OnboardingPage() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View style={{ height: height * 0.6 }}>
        <View className="relative w-full h-full">
          <Image
            source={require("@/assets/images/whatsAppChat.png")}
            className="absolute top-8 self-center"
            style={{ width: width - 32, height: height * 0.4 }}
            resizeMode="contain"
          />
          <Image
            source={require("@/assets/images/person.png")}
            className="absolute bottom-0 right-0"
            style={{ width: width * 0.8, height: height * 0.4 }}
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="flex-1 justify-end px-6 pb-12">
        <Text className="text-2xl font-bold mb-4">
          Tired of missing opportunities?
        </Text>
        <Text className="text-gray-600 mb-8">
          Enjoy our easy-to-use app, featuring a marketplace of requests and
          inventories from all other companies.
        </Text>
        <TouchableOpacity
          className="bg-blue-500 py-4 rounded-lg items-center"
          onPress={() => router.replace("/")}
        >
          <Text className="text-white font-semibold text-lg">
            Go to Marketplace
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
