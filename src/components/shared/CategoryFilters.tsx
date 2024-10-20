import React from "react";
import { ScrollView, Pressable, Text } from "react-native";

const categories = ["Show: All", "For you", "Urgent", "Resale", "Rent"];

export default function CategoryFilters() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-12"
    >
      {categories.map((category, index) => (
        <Pressable
          key={index}
          className="self-start bg-white px-4 py-2 rounded-lg mr-2 border border-gray-300"
        >
          <Text>{category}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
