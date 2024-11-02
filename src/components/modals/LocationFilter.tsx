import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { ModalContainer } from "../shared/ModalContainer";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "../shared/Checkbox";

interface LocationFilterProps {
  isVisible: boolean;
  onClose: () => void;
  onApply: (selectedLocations: string[]) => void;
}

type TabType = "City" | "District" | "Area";

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
  const [neighborhoodType, setNeighborhoodType] = useState<
    "Neighborhood" | "Compound"
  >("Neighborhood");

  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [activeFirstNeighborhood, setActiveFirstNeighborhood] = useState(false);

  const tabs: TabType[] = ["City", "District", "Area"];
  const popularLocations = [
    "New Cairo, Cairo",
    "Sheikh Zayed, Giza",
    "6 October",
    "Ma3ady",
    "Naser City",
    "Helwan",
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
    Area: [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
    ],
  };

  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedAreas([]); // Reset selected areas on tab change
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

  const handleAreaSelect = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter((item) => item !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };
  const handleSelectAllAreas = () => {
    if (selectedAreas.length === items.Area.length) {
      setSelectedAreas([]); // Deselect all if all are selected
    } else {
      setSelectedAreas(items.Area.slice()); // Select all areas
    }
  };

  const handleSelectFirstNeighborhood = () => {
    setActiveFirstNeighborhood((prev) => !prev);
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose} isLocationModal>
      <View className="pb-20">
        <Text className="text-gray-500 mb-2">Popular locations</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {popularLocations.map((location) => (
            <TouchableOpacity
              key={location}
              onPress={() => handleLocationSelect(location)}
              className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
            >
              <Text className="text-gray-700">{location}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

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

        <View>
          <View className="flex-row justify-between mb-4 p-1 rounded-lg bg-gray_50">
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => handleTabPress(tab)}
                className={`px-8 py-2 rounded-lg ${
                  activeTab === tab ? "bg-white" : ""
                }`}
              >
                <Text
                  className={`text-lg ${
                    activeTab === tab
                      ? "text-primary_500 font-bold"
                      : "text-gray_500"
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <ScrollView className="flex-grow">
            {activeTab === "Area" && (
              <>
                <View className="flex-row mb-4">
                  {["Neighborhood", "Compound"].map((type) => (
                    <TouchableOpacity
                      key={type}
                      onPress={() =>
                        setNeighborhoodType(type as "Neighborhood" | "Compound")
                      }
                      className="flex-row items-center py-3 mr-6"
                    >
                      <Text className="text-lg mr-2">{type}</Text>
                      <View
                        className={`w-6 h-6 rounded-full border-2 ${
                          neighborhoodType === type
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-300"
                        } items-center justify-center`}
                      >
                        {neighborhoodType === type && (
                          <View className="w-3 h-3 rounded-full bg-white" />
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>

                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-2 mb-8"
                  placeholder={`Search Neighborhood`}
                  value={searchText}
                  onChangeText={setSearchText}
                />

                <Checkbox
                  label="Select All Neighborhoods"
                  isChecked={selectedAreas.length === items.Area.length}
                  onToggle={handleSelectAllAreas}
                />

                <TouchableOpacity
                  onPress={handleSelectFirstNeighborhood}
                  className="flex-row justify-between items-center py-3 mr-2 my-4"
                >
                  <Text className="text-lg font-bold mr-2">Neighborhood</Text>
                  <View
                    className={`w-6 h-6 rounded-full border-2 ${
                      activeFirstNeighborhood
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    } items-center justify-center`}
                  >
                    {activeFirstNeighborhood && (
                      <View className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </View>
                </TouchableOpacity>

                {items.Area.map((area) => (
                  <View className="my-4 border-b border-gray-200" key={area}>
                    <Checkbox
                      label={area}
                      isChecked={selectedAreas.includes(area)}
                      onToggle={() => handleAreaSelect(area)}
                      isBoldText
                    />
                  </View>
                ))}
              </>
            )}

            {activeTab !== "Area" &&
              items[activeTab].map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => handleLocationSelect(item)}
                  className="flex-row items-center py-3 border-b border-gray-200"
                >
                  <Text className="flex-1 text-lg">{item}</Text>
                  <View
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedLocations.includes(item)
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    } items-center justify-center`}
                  >
                    {selectedLocations.includes(item) && (
                      <View className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    </ModalContainer>
  );
}
