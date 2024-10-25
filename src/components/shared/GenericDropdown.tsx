import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps<T> {
  label: string;
  options: T[];
  selectedValue: T | null;
  onSelect: (item: T) => void;
  displayProperty?: keyof T;
  placeholder?: string;
}

export default function GenericDropdown<T>({
  label,
  options,
  selectedValue,
  onSelect,
  displayProperty,
  placeholder = "Select an option",
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: T) => {
    onSelect(item);
    setIsOpen(false);
  };

  const getDisplayValue = (item: T | null) => {
    if (item === null) return placeholder;
    if (displayProperty && typeof item === "object") {
      return String((item as any)[displayProperty]);
    }
    return String(item);
  };

  return (
    <View className="flex-row items-center flex-1">
      <Text className="flex-1 text-sm font-medium text-gray-700 mb-1">
        {label}
      </Text>
      <TouchableOpacity
        onPress={toggleDropdown}
        className="flex-1 flex-row items-center justify-between bg-white border border-gray-300 rounded-md px-3 py-2"
      >
        <Text
          className={`${selectedValue ? "text-gray-900" : "text-gray-500"}`}
        >
          {getDisplayValue(selectedValue)}
        </Text>
        <Ionicons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color="gray"
        />
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
          className="flex-1 bg-black bg-opacity-50"
        >
          <View className="bg-white rounded-t-lg mt-auto">
            <ScrollView className="max-h-80">
              {options.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelect(item)}
                  className="px-4 py-3 border-b border-gray-200"
                >
                  <Text className="text-gray-800">{getDisplayValue(item)}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
