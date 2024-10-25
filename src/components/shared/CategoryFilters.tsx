import React, { useState } from "react";
import { ScrollView, Pressable, Text } from "react-native";

const categories = ["Show: All", "For you", "Urgent", "Resale", "Rent"];

export default function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState<string>("Show: All");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-12 p-4"
    >
      {categories.map((category, index) => (
        <Pressable
          key={index}
          onPress={() => setActiveCategory(category)}
          className={`self-start ${
            activeCategory === category ? "bg-blue-50" : "bg-white"
          } px-4 py-2 rounded-lg mr-2 border border-gray-300`}
        >
          <Text>{category}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
