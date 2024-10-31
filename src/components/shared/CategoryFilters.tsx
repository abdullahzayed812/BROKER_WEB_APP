import React, { ReactNode, useState } from "react";
import { ScrollView, Pressable, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const categories: { name: string; icon: ReactNode }[] = [
  { name: "Show: All", icon: "" },
  {
    name: "For you",
    icon: (
      <MaterialCommunityIcons name="pencil-ruler" size={14} color="black" />
    ),
  },
  {
    name: "Urgent",
    icon: (
      <MaterialCommunityIcons
        name="information-outline"
        size={14}
        color="black"
      />
    ),
  },
  {
    name: "Resale",
    icon: <Feather name="divide-square" size={14} color="black" />,
  },
  { name: "Rent", icon: "" },
];

export default function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState<string>("Show: All");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 20 }}
      className=" p-4"
    >
      {categories.map((category, index) => (
        <Pressable
          key={index}
          onPress={() => setActiveCategory(category.name)}
          className={`flex-row items-center ${
            activeCategory === category.name ? "bg-blue-50" : "bg-white"
          } px-4 py-2 rounded-lg mr-2 border border-gray-300`}
          style={{ gap: 8 }}
        >
          {category.icon ? <Text>{category.icon}</Text> : null}
          <Text className="text-[12px] font-normal">{category.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
