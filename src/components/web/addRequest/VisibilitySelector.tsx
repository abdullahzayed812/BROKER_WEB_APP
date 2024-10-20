import React from "react";
import { View, Text, Pressable } from "react-native";

type VisibilitySelectorProps = {
  visibility: string;
  setVisibility: (visibility: string) => void;
};

export default function VisibilitySelector({
  visibility,
  setVisibility,
}: VisibilitySelectorProps) {
  return (
    <View className="mb-4">
      <Text className="mb-2 font-medium">Show as</Text>
      <View className="flex-row">
        <Pressable
          onPress={() => setVisibility("Internal")}
          className="flex-row items-center mr-4"
        >
          <View
            className={`w-5 h-5 rounded-full border-2 ${
              visibility === "Internal" ? "border-blue-500" : "border-gray-300"
            } mr-2`}
          >
            {visibility === "Internal" && (
              <View className="w-3 h-3 rounded-full bg-blue-500 m-auto" />
            )}
          </View>
          <Text>Internal</Text>
        </Pressable>
        <Pressable
          onPress={() => setVisibility("Public")}
          className="flex-row items-center"
        >
          <View
            className={`w-5 h-5 rounded-full border-2 ${
              visibility === "Public" ? "border-blue-500" : "border-gray-300"
            } mr-2`}
          >
            {visibility === "Public" && (
              <View className="w-3 h-3 rounded-full bg-blue-500 m-auto" />
            )}
          </View>
          <Text>Public</Text>
        </Pressable>
      </View>
    </View>
  );
}
