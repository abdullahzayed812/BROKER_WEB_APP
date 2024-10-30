import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { ModalContainer } from "../shared/ModalContainer";
import GenericDropdown from "../shared/GenericDropdown";
import { Ionicons } from "@expo/vector-icons";

interface AdvancedFilterProps {
  isVisible: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

export function AdvancedFilterModal({
  isVisible,
  onClose,
  onApply,
}: AdvancedFilterProps) {
  const [filters, setFilters] = useState({
    rentOrBuy: "buy",
    stayDuration: "long",
    budget: {
      type: "Monthly",
      from: "",
      to: "",
      fromCurrency: "EGP",
      toCurrency: "EGP",
    },
    propertyType: ["Apartment"],
    bedrooms: 1,
    bathrooms: 1,
    datePosted: "16/06/2024",
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleBudgetChange = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      budget: { ...prev.budget, [key]: value },
    }));
  };

  const handlePropertyTypeToggle = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      propertyType: prev.propertyType.includes(type)
        ? prev.propertyType.filter((t) => t !== type)
        : [...prev.propertyType, type],
    }));
  };

  const handleRoomChange = (
    room: "bedrooms" | "bathrooms",
    operation: "add" | "subtract"
  ) => {
    setFilters((prev) => ({
      ...prev,
      [room]:
        operation === "add" ? prev[room] + 1 : Math.max(1, prev[room] - 1),
    }));
  };

  return (
    <ModalContainer
      isVisible={isVisible}
      onClose={onClose}
      // isCloseIconVisible={false}
    >
      {/* <ScrollView className="px-4" showsVerticalScrollIndicator={false}> */}
      <View className="flex-row justify-between items-center mt-12 mb-6">
        <Text className="text-xl font-semibold">Filters</Text>
        <TouchableOpacity
          onPress={() =>
            setFilters({
              rentOrBuy: "buy",
              stayDuration: "long",
              budget: {
                type: "Monthly",
                from: "",
                to: "",
                fromCurrency: "EGP",
                toCurrency: "EGP",
              },
              propertyType: [],
              bedrooms: 1,
              bathrooms: 1,
              datePosted: "16/06/2024",
            })
          }
        >
          <Text className="text-blue-500">Clear all</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-6">
        <View className="flex-row bg-primary_50 rounded-lg p-1">
          {["Rent", "Buy"].map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() =>
                handleFilterChange("rentOrBuy", option.toLowerCase())
              }
              className={`flex-1 py-2 rounded-md ${
                filters.rentOrBuy === option.toLowerCase()
                  ? "bg-white shadow"
                  : ""
              }`}
            >
              <Text
                className={`text-center ${
                  filters.rentOrBuy === option.toLowerCase()
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="flex-row mb-6">
        {["Long Stays", "Short Stays"].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() =>
              handleFilterChange(
                "stayDuration",
                option.split(" ")[0].toLowerCase()
              )
            }
            className="flex-row items-center mr-4"
          >
            <View
              className={`w-5 h-5 rounded-full border-2 ${
                filters.stayDuration === option.split(" ")[0].toLowerCase()
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-300"
              } mr-2 items-center justify-center`}
            >
              {filters.stayDuration === option.split(" ")[0].toLowerCase() && (
                <View className="w-2 h-2 rounded-full bg-white" />
              )}
            </View>
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity className="flex-row justify-between items-center py-2 border-b border-gray-200 mb-6">
        <Text className="text-lg">Location</Text>
        <Ionicons name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>

      <View className="mb-6">
        <View className="flex-row mb-6">
          <Text className="text-lg font-semibold">Budget</Text>
          <View className="flex-1">
            <GenericDropdown
              label=""
              options={["Monthly", "Weekly", "Daily"]}
              selectedValue={filters.budget.type}
              onSelect={(value) => handleBudgetChange("type", value)}
              placeholder="Monthly"
            />
          </View>
        </View>
        <View className="flex-row mb-4">
          <View className="flex-1 mr-2">
            <View className="flex-row items-center border border-gray-300 rounded-lg">
              <TextInput
                className="px-3 py-2"
                placeholder="From"
                value={filters.budget.from}
                onChangeText={(value) => handleBudgetChange("from", value)}
                keyboardType="numeric"
              />
              {/* <View className="flex-1 items-center"> */}
              <GenericDropdown
                label=""
                options={["EGP", "USD", "EUR"]}
                selectedValue={filters.budget.fromCurrency}
                onSelect={(value) => handleBudgetChange("fromCurrency", value)}
                placeholder="EGP"
              />
              {/* </View> */}
            </View>
          </View>
          <View className="flex-1">
            <View className="flex-row items-center border border-gray-300 rounded-lg">
              <TextInput
                className="px-3 py-2"
                placeholder="To"
                value={filters.budget.to}
                onChangeText={(value) => handleBudgetChange("to", value)}
                keyboardType="numeric"
              />
              {/* <View className="flex-1 items-center"> */}
              <GenericDropdown
                label=""
                options={["EGP", "USD", "EUR"]}
                selectedValue={filters.budget.toCurrency}
                onSelect={(value) => handleBudgetChange("toCurrency", value)}
                placeholder="EGP"
              />
              {/* </View> */}
            </View>
          </View>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg mb-2">Type</Text>
        <View className="flex-row flex-wrap">
          {["Studio", "Apartment", "Duplex", "Villa", "Townhouse"].map(
            (type) => (
              <TouchableOpacity
                key={type}
                onPress={() => handlePropertyTypeToggle(type)}
                className={`mr-2 mb-2 px-3 py-1 rounded-full ${
                  filters.propertyType.includes(type)
                    ? "bg-blue-100"
                    : "bg-gray-100"
                }`}
              >
                <Text
                  className={
                    filters.propertyType.includes(type)
                      ? "text-blue-500"
                      : "text-gray-600"
                  }
                >
                  {type}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg mb-2">No. of rooms</Text>
        {["Bedrooms", "Bathrooms"].map((room) => (
          <View
            key={room}
            className="flex-row items-center justify-between mb-2"
          >
            <Text>{room}</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() =>
                  handleRoomChange(
                    room.toLowerCase() as "bedrooms" | "bathrooms",
                    "subtract"
                  )
                }
                className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
              >
                <Text className="text-xl">-</Text>
              </TouchableOpacity>
              <Text className="mx-4">
                {filters[room.toLowerCase() as "bedrooms" | "bathrooms"]}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  handleRoomChange(
                    room.toLowerCase() as "bedrooms" | "bathrooms",
                    "add"
                  )
                }
                className="w-8 h-8 bg-blue-500 rounded-full items-center justify-center"
              >
                <Text className="text-xl text-white">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View className="mb-6">
        <Text className="text-lg mb-2">Date Posted</Text>
        <TouchableOpacity className="flex-row justify-between items-center border border-gray-300 rounded-lg p-3">
          <Text>{filters.datePosted}</Text>
          <Ionicons name="calendar-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-blue-500 py-4 rounded-lg"
        onPress={() => onApply(filters)}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Show 55 Requests
        </Text>
      </TouchableOpacity>
      {/* </ScrollView> */}
    </ModalContainer>
  );
}
