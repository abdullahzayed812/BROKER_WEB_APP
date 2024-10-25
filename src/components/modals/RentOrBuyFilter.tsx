import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ModalContainer } from "../shared/ModalContainer";

interface RentOrBuyFilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFilterChange: (filters: {
    type: "rent" | "buy";
    duration: "long" | "short";
  }) => void;
}

export function RentOrBuyFilterModal({
  isVisible,
  onClose,
  onFilterChange,
}: RentOrBuyFilterModalProps) {
  const [type, setType] = useState<"rent" | "buy">("buy");
  const [duration, setDuration] = useState<"long" | "short">("long");

  const handleTypeChange = (newType: "rent" | "buy") => {
    setType(newType);
  };

  const handleDurationChange = (newDuration: "long" | "short") => {
    setDuration(newDuration);
  };

  const handleApply = () => {
    onFilterChange({ type, duration });
    onClose();
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="p-6">
        <Text className="text-2xl font-semibold mb-6">Rent or Buy</Text>

        <View className="flex-row mb-6 bg-gray-100 rounded-lg p-1">
          <TouchableOpacity
            onPress={() => handleTypeChange("rent")}
            className={`flex-1 py-3 rounded-md ${
              type === "rent" ? "bg-white shadow" : ""
            }`}
          >
            <Text
              className={`text-center ${
                type === "rent"
                  ? "text-blue-500 font-semibold"
                  : "text-gray-600"
              }`}
            >
              Rent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTypeChange("buy")}
            className={`flex-1 py-3 rounded-md ${
              type === "buy" ? "bg-white shadow" : ""
            }`}
          >
            <Text
              className={`text-center ${
                type === "buy" ? "text-blue-500 font-semibold" : "text-gray-600"
              }`}
            >
              Buy
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mb-8">
          <TouchableOpacity
            onPress={() => handleDurationChange("long")}
            className="flex-row items-center mb-4"
          >
            <View
              className={`w-6 h-6 rounded-full border-2 ${
                duration === "long"
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-300"
              } mr-3 items-center justify-center`}
            >
              {duration === "long" && (
                <View className="w-3 h-3 rounded-full bg-white" />
              )}
            </View>
            <Text className="text-lg text-gray-700">Long Stays</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDurationChange("short")}
            className="flex-row items-center"
          >
            <View
              className={`w-6 h-6 rounded-full border-2 ${
                duration === "short"
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-300"
              } mr-3 items-center justify-center`}
            >
              {duration === "short" && (
                <View className="w-3 h-3 rounded-full bg-white" />
              )}
            </View>
            <Text className="text-lg text-gray-700">Short Stays</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-blue-500 py-4 rounded-lg"
          onPress={handleApply}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Show 55 Requests
          </Text>
        </TouchableOpacity>
      </View>
    </ModalContainer>
  );
}
