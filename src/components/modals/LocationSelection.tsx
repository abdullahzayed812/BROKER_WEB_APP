import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer"; // Assuming this is the path to your ModalContainer component

interface LocationSelectionModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectLocations: (locations: string[]) => void;
}

type TabType = "City" | "District" | "Neighborhood/Compound";

export default function LocationSelectionModal({
  isVisible,
  onClose,
  onSelectLocations,
}: LocationSelectionModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("City");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([
    "Cairo, Zamalek",
    "Cairo, Zamalek",
    "Cairo, Zamalek",
  ]);
  const [selectedType, setSelectedType] = useState<"Neighborhood" | "Compound">(
    "Compound"
  );

  const tabs: TabType[] = ["City", "District", "Neighborhood/Compound"];

  const dummyData = {
    City: ["Cairo", "Luxor", "Giza", "Mansoura", "Aswan"],
    District: [
      "District 1",
      "District 2",
      "District 3",
      "District 4",
      "District 5",
    ],
    "Neighborhood/Compound": [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
    ],
  };

  const filteredData = dummyData[activeTab].filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      className="flex-row items-center py-3"
      onPress={() => toggleLocation(item)}
    >
      <View
        className={`w-5 h-5 rounded-full border-2 ${
          selectedLocations.includes(item)
            ? "bg-blue-500 border-blue-500"
            : "border-gray-300"
        } mr-3`}
      />
      <Text className="text-gray-800 text-base">{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="bg-white rounded-t-3xl max-h-[90%]">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
          <Text className="text-xl font-semibold">Locations</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row border-b border-gray-200">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`flex-1 py-3 ${
                activeTab === tab ? "border-b-2 border-blue-500" : ""
              }`}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                className={`text-center ${
                  activeTab === tab
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === "Neighborhood/Compound" && (
          <View className="flex-row justify-around py-3">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setSelectedType("Neighborhood")}
            >
              <View
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedType === "Neighborhood"
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                } mr-2`}
              />
              <Text>Neighborhood</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setSelectedType("Compound")}
            >
              <View
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedType === "Compound"
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                } mr-2`}
              />
              <Text>Compound</Text>
            </TouchableOpacity>
          </View>
        )}

        <View className="p-4">
          <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              className="flex-1 ml-2"
              placeholder={`Search ${activeTab}`}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-3"
          >
            {selectedLocations.map((location, index) => (
              <View
                key={index}
                className="bg-blue-100 rounded-full px-3 py-1 mr-2 flex-row items-center"
              >
                <Text className="text-blue-500 mr-1">{location}</Text>
                <TouchableOpacity onPress={() => toggleLocation(location)}>
                  <Ionicons name="close-circle" size={18} color="#3B82F6" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            className="h-80"
          />
        </View>
      </View>
    </ModalContainer>
  );
}
