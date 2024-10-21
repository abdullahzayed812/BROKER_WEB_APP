import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer"; // Assuming this is the path to your ModalContainer component

type SortOption = "lowToHigh" | "highToLow";

interface SortingModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSort: (option: SortOption) => void;
}

export function SortingModal({
  isVisible,
  onClose,
  onSort,
}: SortingModalProps) {
  const [selectedOption, setSelectedOption] = useState<SortOption>("lowToHigh");

  const handleSort = () => {
    onSort(selectedOption);
    onClose();
  };

  const RadioButton = ({ selected }: { selected: boolean }) => (
    <View
      className={`w-6 h-6 rounded-full border-2 ${
        selected ? "border-blue-500" : "border-gray-300"
      } justify-center items-center`}
    >
      {selected && <View className="w-3 h-3 rounded-full bg-blue-500" />}
    </View>
  );

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="bg-white rounded-t-3xl p-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-semibold">Sort by</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="flex-row items-center py-4 bg-gray-50 rounded-lg mb-3"
          onPress={() => setSelectedOption("lowToHigh")}
        >
          <RadioButton selected={selectedOption === "lowToHigh"} />
          <Text className="ml-3 text-lg">Budget - Low to High</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center py-4 bg-gray-50 rounded-lg mb-6"
          onPress={() => setSelectedOption("highToLow")}
        >
          <RadioButton selected={selectedOption === "highToLow"} />
          <Text className="ml-3 text-lg">Budget - High to Low</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-500 py-4 rounded-lg items-center"
          onPress={handleSort}
        >
          <Text className="text-white text-lg font-semibold">Sort</Text>
        </TouchableOpacity>
      </View>
    </ModalContainer>
  );
}
