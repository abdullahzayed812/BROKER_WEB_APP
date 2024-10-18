import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View className="flex-row items-center bg-white rounded-lg p-2 mb-4">
      <Ionicons name="search" size={20} color="gray" />
      <TextInput
        className="flex-1 ml-2"
        placeholder="Search Location"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity>
        <Ionicons name="options-outline" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
