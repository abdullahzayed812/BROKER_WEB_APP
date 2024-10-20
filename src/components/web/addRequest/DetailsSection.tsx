import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
// import { ChevronDown, Minus, Plus, Pencil } from "lucide-react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function DetailsSection() {
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(1);

  return (
    <View className="border border-dashed border-gray-300 rounded-md p-4 mb-4">
      <Text className="font-medium mb-4">Details</Text>

      <View className="mb-4">
        <Text className="mb-1">Rent or Buy</Text>
        <Pressable className="flex-row justify-between items-center border border-gray-300 rounded-md p-2">
          <Text>Rent or Buy</Text>
          {/* <ChevronDown size={20} color="#000" /> */}
          <MaterialIcons icon="chevron-down" size={24} color="black" />
        </Pressable>
      </View>

      <View className="mb-4">
        <Text className="mb-1">Types</Text>
        <Pressable className="flex-row justify-between items-center border border-gray-300 rounded-md p-2">
          <Text className="text-red-500">Select</Text>
          {/* <ChevronDown size={20} color="#000" /> */}
          <MaterialIcons icon="chevron-down" size={24} color="black" />
        </Pressable>
      </View>

      <View className="mb-4">
        <Text className="mb-1">Status</Text>
        <Pressable className="flex-row justify-between items-center border border-gray-300 rounded-md p-2">
          <Text>Furnished</Text>
          {/* <ChevronDown size={20} color="#000" /> */}
          <MaterialIcons icon="chevron-down" size={24} color="black" />
        </Pressable>
      </View>

      <View className="mb-4">
        <Text className="mb-1">Budget</Text>
        <View className="flex-row justify-between items-center border border-gray-300 rounded-md p-2">
          <Text>30,000 EGP Monthly</Text>
          {/* <Pencil size={20} color="#3b82f6" /> */}
          <MaterialIcons icon="chevron-down" size={24} color="black" />
        </View>
      </View>

      <View className="mb-4">
        <Text className="mb-1">Locations</Text>
        <View className="space-y-2">
          <Pressable className="flex-row justify-between items-center bg-gray-100 rounded-md p-2">
            <Text>Cairo, Zamalek</Text>
            {/* <ChevronDown size={20} color="#000" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </Pressable>
          <Pressable className="flex-row justify-between items-center bg-gray-100 rounded-md p-2">
            <Text>Cairo, Zamalek</Text>
            {/* <ChevronDown size={20} color="#000" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </Pressable>
          <Pressable className="flex-row justify-between items-center bg-gray-100 rounded-md p-2">
            <Text>Cairo, Zamalek</Text>
            {/* <ChevronDown size={20} color="#000" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      <View className="mb-4">
        <Text className="mb-1">No. of Bedrooms</Text>
        <View className="flex-row items-center">
          <Pressable
            onPress={() => setBedrooms(Math.max(0, bedrooms - 1))}
            className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
          >
            {/* <Minus size={20} color="#000" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </Pressable>
          <Text className="mx-4">{bedrooms}</Text>
          <Pressable
            onPress={() => setBedrooms(bedrooms + 1)}
            className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
          >
            {/* <Plus size={20} color="#000" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      <View className="mb-4">
        <Text className="mb-1">No. of Bathrooms</Text>
        <View className="flex-row items-center">
          <Pressable
            onPress={() => setBathrooms(Math.max(0, bathrooms - 1))}
            className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
          >
            {/* <Minus size={20} color="#000" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </Pressable>
          <Text className="mx-4">{bathrooms}</Text>
          <Pressable
            onPress={() => setBathrooms(bathrooms + 1)}
            className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
          >
            {/* <Plus size={20} color="#000" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      <View className="mb-4">
        <Text className="mb-1">Duration</Text>
        <View className="flex-row justify-between items-center border border-gray-300 rounded-md p-2">
          <Text>1 Month</Text>
          <View className="flex-row items-center">
            <Text className="text-gray-500 mr-2">From 06-01-2024</Text>
            {/* <Pencil size={20} color="#3b82f6" /> */}
            <MaterialIcons icon="chevron-down" size={24} color="black" />
          </View>
        </View>
      </View>

      <View>
        <Text className="font-medium mb-2">Extra Details</Text>
        <TextInput
          multiline
          numberOfLines={4}
          className="border border-gray-300 rounded-md p-2"
          value="For rent Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house..."
        />
      </View>
    </View>
  );
}
