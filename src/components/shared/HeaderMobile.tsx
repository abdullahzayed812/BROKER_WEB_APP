import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type DropdownOption = "Requests" | "Rent" | "Location";

export function HeaderMobile() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownOption | null>(
    null
  );

  const toggleDropdown = (dropdown: DropdownOption) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleRequestsPress = () => {
    console.log("Requests dropdown pressed");
    toggleDropdown("Requests");
    // Add your logic here for handling the Requests dropdown
  };

  const handleRentPress = () => {
    console.log("Rent dropdown pressed");
    toggleDropdown("Rent");
    // Add your logic here for handling the Rent dropdown
  };

  const handleLocationPress = () => {
    console.log("Location dropdown pressed");
    toggleDropdown("Location");
    // Add your logic here for handling the Location dropdown
  };

  const handleMenuPress = () => {
    console.log("Menu icon pressed");
    // Add your logic here for handling the menu icon press
  };

  return (
    <View className="md:hidden flex flex-row items-center justify-between p-4 bg-white">
      <TouchableOpacity
        className="flex-row items-center bg-blue-500 px-4 py-2 rounded-md"
        onPress={handleRequestsPress}
      >
        <Text className="text-white font-semibold mr-2">Requests</Text>
        <Ionicons name="chevron-down" size={18} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center"
        onPress={handleRentPress}
      >
        <Text className="text-gray-700 mr-2">Rent</Text>
        <Ionicons name="chevron-down" size={18} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center"
        onPress={handleLocationPress}
      >
        <Text className="text-gray-700 mr-2">Location</Text>
        <Ionicons name="chevron-down" size={18} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleMenuPress}>
        <Ionicons name="menu" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
