import React from "react";
import { ScrollView, Pressable, Text } from "react-native";

interface FilterOptionsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = ["Show: All", "For you", "Urgent", "Resale", "Rent"];

const FilterOptions: React.FC<FilterOptionsProps> = ({
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="px-4 py-2"
    >
      {filters.map((filter) => (
        <Pressable
          key={filter}
          onPress={() => setActiveFilter(filter)}
          className={`py-2 px-4 rounded-full mr-2 ${
            activeFilter === filter
              ? "bg-blue-500"
              : "bg-white border border-gray-300"
          }`}
        >
          <Text
            className={activeFilter === filter ? "text-white" : "text-gray-600"}
          >
            {filter}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default FilterOptions;
