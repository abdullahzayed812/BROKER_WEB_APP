import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ModalContainer } from "../shared/ModalContainer";

type FilterOption = "requests" | "inventory" | "showAll";

interface ShowContentModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function ShowContentModal({
  isVisible,
  onClose,
}: ShowContentModalProps) {
  const [selectedOption, setSelectedOption] =
    useState<FilterOption>("requests");

  const handleOptionChange = (option: FilterOption) => {
    setSelectedOption(option);
  };

  const handleApply = () => {
    // Handle apply logic here
    console.log("Applied filter:", selectedOption);
    onClose();
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="px-4 py-6">
        <Text className="text-2xl font-semibold mb-4">Show</Text>
        <View className="mb-4">
          {["Requests", "Inventory"].map((option, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-row items-center py-3 ${
                option === "Requests" ? "bg-primary_50" : "bg-secondary_50"
              } mb-3 rounded-lg p-2`}
              onPress={() =>
                handleOptionChange(
                  option.toLowerCase().replace(" ", "") as FilterOption
                )
              }
            >
              <View
                className={`w-5 h-5 rounded-full border-2 mr-3 ${
                  selectedOption === option.toLowerCase().replace(" ", "")
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                } justify-center items-center`}
              >
                {selectedOption === option.toLowerCase().replace(" ", "") && (
                  <View className="w-2 h-2 rounded-full bg-white" />
                )}
              </View>
              <Text
                className={`text-base ${
                  option === "Requests"
                    ? "text-primary_500"
                    : "text-secondary_500"
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-lg"
          onPress={handleApply}
        >
          <Text className="text-white text-center text-base font-semibold">
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </ModalContainer>
  );
}
