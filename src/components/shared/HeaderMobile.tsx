import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LocationFilter } from "../modals/LocationFilter";
import { AdvancedFilterModal } from "../modals/AdvancedFilter";
import { ShowContentModal } from "../modals/ShowContent";
import { RentOrBuyFilterModal } from "../modals/RentOrBuyFilter";

type DropdownOption = "Requests" | "Rent" | "Location";

export function HeaderMobile() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownOption | null>(
    null
  );
  const [showRendRentModal, setShowRentRentModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showAdvancedFilterModal, setShowAdvancedFilterModal] = useState(false);

  const [isShowContentModalVisible, setIsShowContentModalVisible] =
    useState(false);

  const toggleDropdown = (dropdown: DropdownOption) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleRequestsPress = () => {
    console.log("Requests dropdown pressed");
    toggleDropdown("Requests");
    // Add your logic here for handling the Requests dropdown
    setIsShowContentModalVisible(true);
  };

  const handleRentPress = () => {
    console.log("Rent dropdown pressed");
    toggleDropdown("Rent");
    // Add your logic here for handling the Rent dropdown
    setShowRentRentModal(true);
  };

  const handleLocationPress = () => {
    console.log("Location dropdown pressed");
    toggleDropdown("Location");
    // Add your logic here for handling the Location dropdown
    setShowLocationModal(true);
  };

  const handleMenuPress = () => {
    console.log("Menu icon pressed");
    // Add your logic here for handling the menu icon press
    setShowAdvancedFilterModal(true);
  };

  return (
    <>
      <View
        className="md:hidden flex flex-row items-center justify-between p-4"
        style={{ gap: 4 }}
      >
        <TouchableOpacity
          className="flex-row items-center bg-primary_500 px-4 py-3 rounded-md"
          onPress={handleRequestsPress}
        >
          <Text className="text-white font-semibold mr-2">Requests</Text>
          <Ionicons name="chevron-down" size={18} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center border px-4 py-3 rounded-lg border-gray-100"
          style={{ gap: 8 }}
          onPress={handleRentPress}
        >
          <Text className="text-gray-700 mr-2">Rent</Text>
          <Ionicons name="chevron-down" size={18} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center rounded-lg border px-4 py-3 border-gray-100"
          style={{ gap: 6 }}
          onPress={handleLocationPress}
        >
          <Text className="text-gray-700 mr-2">Location</Text>
          <Ionicons name="chevron-down" size={18} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-gray-100 p-2 rounded-lg"
          onPress={handleMenuPress}
        >
          <Ionicons name="filter" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View className="h-1 w-full bg-gray-100" />

      {isShowContentModalVisible ? (
        <ShowContentModal
          isVisible={isShowContentModalVisible}
          onClose={() => setIsShowContentModalVisible(false)}
        />
      ) : null}
      {showRendRentModal ? (
        <RentOrBuyFilterModal
          isVisible={showRendRentModal}
          onClose={() => setShowRentRentModal(false)}
          onFilterChange={function (filters: {
            type: "rent" | "buy";
            duration: "long" | "short";
          }): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : null}
      {showLocationModal ? (
        <LocationFilter
          isVisible={showLocationModal}
          onClose={() => setShowLocationModal(false)}
          onApply={function (selectedLocations: string[]): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : null}
      {showAdvancedFilterModal ? (
        <AdvancedFilterModal
          isVisible={showAdvancedFilterModal}
          onClose={() => setShowAdvancedFilterModal(false)}
          onApply={function (filters: any): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : null}
    </>
  );
}
