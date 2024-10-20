import React from "react";
import { View, Text, Pressable } from "react-native";

type InputMethodSelectorProps = {
  inputMethod: string;
  setInputMethod: (method: string) => void;
};

export default function InputMethodSelector({
  inputMethod,
  setInputMethod,
}: InputMethodSelectorProps) {
  return (
    <View className="mb-4">
      <Text className="mb-2 font-medium">How do you want to add your Ad?</Text>
      <View className="flex-row">
        <Pressable
          onPress={() => setInputMethod("Paste Text")}
          className="flex-row items-center mr-4"
        >
          <View
            className={`w-5 h-5 rounded-full border-2 ${
              inputMethod === "Paste Text"
                ? "border-blue-500"
                : "border-gray-300"
            } mr-2`}
          >
            {inputMethod === "Paste Text" && (
              <View className="w-3 h-3 rounded-full bg-blue-500 m-auto" />
            )}
          </View>
          <Text>Paste Text</Text>
        </Pressable>
        <Pressable
          onPress={() => setInputMethod("Fill Details")}
          className="flex-row items-center"
        >
          <View
            className={`w-5 h-5 rounded-full border-2 ${
              inputMethod === "Fill Details"
                ? "border-blue-500"
                : "border-gray-300"
            } mr-2`}
          >
            {inputMethod === "Fill Details" && (
              <View className="w-3 h-3 rounded-full bg-blue-500 m-auto" />
            )}
          </View>
          <Text>Fill Details</Text>
        </Pressable>
      </View>
    </View>
  );
}
