import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ModalContainer } from "../shared/ModalContainer";
import { Ionicons } from "@expo/vector-icons";

interface LocationFilterProps {
  isVisible: boolean;
  onClose: () => void;
  onApply: (selectedLocations: string[]) => void;
}

type TabType = "City" | "District" | "Neighborhood";

export function LocationFilter({
  isVisible,
  onClose,
  onApply,
}: LocationFilterProps) {
  const [activeTab, setActiveTab] = useState<TabType>("City");
  const [searchText, setSearchText] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([
    "Cairo, Zamalek",
  ]);
  const [selectedItem, setSelectedItem] = useState("");
  const [neighborhoodType, setNeighborhoodType] = useState<
    "Neighborhood" | "Compound"
  >("Neighborhood");

  const tabs: TabType[] = ["City", "District", "Neighborhood"];
  const popularLocations = [
    "New Cairo, Cairo",
    "Sheikh Zayed, Giza",
    "6 October",
  ];
  const items = {
    City: ["Cairo", "Luxor", "Giza", "Mansoura", "Aswan"],
    District: [
      "District 1",
      "District 2",
      "District 3",
      "District 4",
      "District 5",
    ],
    Neighborhood: [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
    ],
  };

  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedItem("");
  };

  const handleLocationSelect = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
  };

  const handleApply = () => {
    onApply(selectedLocations);
    onClose();
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View>
        <Text className="text-xl mb-8 font-semibold ">Find</Text>
      </View>

      <View>
        <View className="flex-row justify-between mb-4">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => handleTabPress(tab)}
              className={`px-4 py-2 ${
                activeTab === tab ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <Text
                className={`text-lg ${
                  activeTab === tab
                    ? "text-blue-500 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
          placeholder={`Search ${activeTab}`}
          value={searchText}
          onChangeText={setSearchText}
        />

        <ScrollView className="flex-grow">
          <View className="flex-row flex-wrap mb-4">
            {selectedLocations.map((location) => (
              <TouchableOpacity
                key={location}
                onPress={() => handleLocationSelect(location)}
                className="bg-blue-100 rounded-full px-3 py-1 mr-2 mb-2 flex-row items-center"
              >
                <Text className="text-blue-500 mr-1">{location}</Text>
                <Ionicons name="close-circle" size={16} color="#3b82f6" />
              </TouchableOpacity>
            ))}
          </View>

          <Text className="text-gray-500 mb-2">Popular locations</Text>
          <View className="flex-row flex-wrap mb-4">
            {popularLocations.map((location) => (
              <TouchableOpacity
                key={location}
                onPress={() => handleLocationSelect(location)}
                className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
              >
                <Text className="text-gray-700">{location}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === "Neighborhood" && (
            <View className="flex-row mb-4">
              <TouchableOpacity
                onPress={() => setNeighborhoodType("Neighborhood")}
                className={`flex-1 py-2 ${
                  neighborhoodType === "Neighborhood"
                    ? "bg-blue-500"
                    : "bg-gray-200"
                } rounded-l-lg`}
              >
                <Text
                  className={`text-center ${
                    neighborhoodType === "Neighborhood"
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  Neighborhood
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setNeighborhoodType("Compound")}
                className={`flex-1 py-2 ${
                  neighborhoodType === "Compound"
                    ? "bg-blue-500"
                    : "bg-gray-200"
                } rounded-r-lg`}
              >
                <Text
                  className={`text-center ${
                    neighborhoodType === "Compound"
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  Compound
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {items[activeTab].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleItemSelect(item)}
              className="flex-row items-center py-3 border-b border-gray-200"
            >
              <Text className="flex-1 text-lg">{item}</Text>
              <View
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedItem === item
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                } items-center justify-center`}
              >
                {selectedItem === item && (
                  <View className="w-3 h-3 rounded-full bg-white" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        className="bg-blue-500 py-4 m-4 rounded-lg"
        onPress={handleApply}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Apply
        </Text>
      </TouchableOpacity>
    </ModalContainer>
  );
}
