import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer"; // Assuming this is the path to your ModalContainer component

interface AdvancedFilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

export function AdvancedFilterModal({
  isVisible,
  onClose,
  onApplyFilters,
}: AdvancedFilterModalProps) {
  const [rentOrBuy, setRentOrBuy] = useState<"Rent" | "Buy">("Rent");
  const [stayDuration, setStayDuration] = useState<
    "Long Stays" | "Short Stays"
  >("Long Stays");
  const [propertyTypes, setPropertyTypes] = useState<string[]>(["Apartment"]);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);

  const togglePropertyType = (type: string) => {
    if (propertyTypes.includes(type)) {
      setPropertyTypes(propertyTypes.filter((t) => t !== type));
    } else {
      setPropertyTypes([...propertyTypes, type]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      rentOrBuy,
      stayDuration,
      propertyTypes,
      bedrooms,
      bathrooms,
      // Add other filter values here
    });
    onClose();
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="bg-white rounded-t-3xl flex-1">
        <ScrollView>
          <View className="p-6">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-2xl font-semibold">Filters</Text>
              <TouchableOpacity onPress={onClose}>
                <Text className="text-blue-500">Clear all</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row bg-gray-100 rounded-full p-1 mb-4">
              <TouchableOpacity
                className={`flex-1 py-2 rounded-full ${
                  rentOrBuy === "Rent" ? "bg-white" : ""
                }`}
                onPress={() => setRentOrBuy("Rent")}
              >
                <Text
                  className={`text-center ${
                    rentOrBuy === "Rent" ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  Rent
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 py-2 rounded-full ${
                  rentOrBuy === "Buy" ? "bg-white" : ""
                }`}
                onPress={() => setRentOrBuy("Buy")}
              >
                <Text
                  className={`text-center ${
                    rentOrBuy === "Buy" ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  Buy
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row mb-4">
              <TouchableOpacity
                className="flex-row items-center mr-4"
                onPress={() => setStayDuration("Long Stays")}
              >
                <View
                  className={`w-5 h-5 rounded-full border-2 ${
                    stayDuration === "Long Stays"
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-300"
                  } mr-2`}
                />
                <Text>Long Stays</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row items-center"
                onPress={() => setStayDuration("Short Stays")}
              >
                <View
                  className={`w-5 h-5 rounded-full border-2 ${
                    stayDuration === "Short Stays"
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-300"
                  } mr-2`}
                />
                <Text>Short Stays</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200">
              <Text className="text-lg">Location</Text>
              <Ionicons name="chevron-forward" size={24} color="gray" />
            </TouchableOpacity>

            <View className="py-4 border-b border-gray-200">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-lg">Budget</Text>
                <TouchableOpacity className="bg-gray-100 px-3 py-1 rounded-full">
                  <Text>Monthly</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between">
                <View className="flex-row items-center">
                  <TextInput
                    placeholder="From"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-24"
                    keyboardType="numeric"
                  />
                  <Text className="ml-2">EGP</Text>
                </View>
                <View className="flex-row items-center">
                  <TextInput
                    placeholder="To"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-24"
                    keyboardType="numeric"
                  />
                  <Text className="ml-2">EGP</Text>
                </View>
              </View>
            </View>

            <View className="py-4 border-b border-gray-200">
              <Text className="text-lg mb-2">Type</Text>
              <View className="flex-row flex-wrap">
                {["Studio", "Apartment", "Duplex", "Villa", "Townhouse"].map(
                  (type) => (
                    <TouchableOpacity
                      key={type}
                      className={`mr-2 mb-2 px-4 py-2 rounded-full ${
                        propertyTypes.includes(type)
                          ? "bg-blue-100"
                          : "bg-gray-100"
                      }`}
                      onPress={() => togglePropertyType(type)}
                    >
                      <Text
                        className={
                          propertyTypes.includes(type)
                            ? "text-blue-500"
                            : "text-gray-500"
                        }
                      >
                        {type}
                      </Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </View>

            <View className="py-4">
              <Text className="text-lg mb-2">No. of rooms</Text>
              <View className="flex-row justify-between items-center mb-2">
                <Text>Bedrooms</Text>
                <View className="flex-row items-center">
                  <TouchableOpacity
                    onPress={() => setBedrooms(Math.max(0, bedrooms - 1))}
                  >
                    <Ionicons
                      name="remove-circle-outline"
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                  <Text className="mx-4">{bedrooms}</Text>
                  <TouchableOpacity onPress={() => setBedrooms(bedrooms + 1)}>
                    <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color="blue"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row justify-between items-center">
                <Text>Bathrooms</Text>
                <View className="flex-row items-center">
                  <TouchableOpacity
                    onPress={() => setBathrooms(Math.max(0, bathrooms - 1))}
                  >
                    <Ionicons
                      name="remove-circle-outline"
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                  <Text className="mx-4">{bathrooms}</Text>
                  <TouchableOpacity onPress={() => setBathrooms(bathrooms + 1)}>
                    <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color="blue"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View className="p-6">
          <TouchableOpacity
            className="bg-blue-500 py-4 rounded-lg items-center"
            onPress={handleApplyFilters}
          >
            <Text className="text-white text-lg font-semibold">
              Show 55 Requests
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalContainer>
  );
}
