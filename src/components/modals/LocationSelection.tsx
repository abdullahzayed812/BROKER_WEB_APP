import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer";

interface Location {
  id: string;
  name: string;
}

interface LocationSelectionModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectLocation: (location: Location) => void;
}

const tabs = ["City", "District", "Neighborhood/Compound"];

export default function LocationSelectionModal({
  isVisible,
  onClose,
  onSelectLocation,
}: LocationSelectionModalProps) {
  const [activeTab, setActiveTab] = useState("City");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
  const [neighborhoodMode, setNeighborhoodMode] = useState<
    "Neighborhood" | "Compound"
  >("Neighborhood");

  // Mock data - replace with actual data fetching logic
  const locations: Location[] = [
    { id: "1", name: "Cairo" },
    { id: "2", name: "Luxor" },
    { id: "3", name: "Giza" },
    { id: "4", name: "Mansoura" },
    { id: "5", name: "Aswan" },
  ];

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectLocation = (location: Location) => {
    if (!selectedLocations.some((loc) => loc.id === location.id)) {
      setSelectedLocations([...selectedLocations, location]);
    }
    onSelectLocation(location);
  };

  const handleRemoveLocation = (locationId: string) => {
    setSelectedLocations(
      selectedLocations.filter((loc) => loc.id !== locationId)
    );
  };

  const renderTabs = () => (
    <View className="flex-row mb-4">
      {tabs.map((tab) => (
        <Pressable
          key={tab}
          onPress={() => setActiveTab(tab)}
          className={`flex-1 py-2 ${
            activeTab === tab ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <Text
            className={`text-center ${
              activeTab === tab ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  const renderSearchBar = () => (
    <View className="bg-gray-100 rounded-lg flex-row items-center px-3 py-2 mb-4">
      <Ionicons name="search" size={20} color="#9CA3AF" />
      <TextInput
        className="flex-1 ml-2"
        placeholder={`Search ${activeTab.toLowerCase()}`}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );

  const renderSelectedLocations = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-4"
    >
      {selectedLocations.map((location) => (
        <Pressable
          key={location.id}
          onPress={() => handleRemoveLocation(location.id)}
          className="bg-blue-100 rounded-full flex-row items-center px-3 py-1 mr-2"
        >
          <Text className="text-blue-500 mr-1">{location.name}</Text>
          <Ionicons name="close" size={16} color="#3B82F6" />
        </Pressable>
      ))}
    </ScrollView>
  );

  const renderLocationList = () => (
    <ScrollView>
      {filteredLocations.map((location) => (
        <Pressable
          key={location.id}
          onPress={() => handleSelectLocation(location)}
          className="flex-row items-center justify-between py-3 border-b border-gray-200"
        >
          <Text>{location.name}</Text>
          <View className="w-6 h-6 rounded-full border-2 border-blue-500 items-center justify-center">
            {selectedLocations.some((loc) => loc.id === location.id) && (
              <View className="w-4 h-4 rounded-full bg-blue-500" />
            )}
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );

  const renderNeighborhoodToggle = () => (
    <View className="flex-row mb-4">
      <Pressable
        onPress={() => setNeighborhoodMode("Neighborhood")}
        className={`flex-1 py-2 px-4 rounded-full ${
          neighborhoodMode === "Neighborhood" ? "bg-blue-500" : "bg-gray-200"
        }`}
      >
        <Text
          className={`text-center ${
            neighborhoodMode === "Neighborhood" ? "text-white" : "text-gray-700"
          }`}
        >
          Neighborhood
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setNeighborhoodMode("Compound")}
        className={`flex-1 py-2 px-4 rounded-full ${
          neighborhoodMode === "Compound" ? "bg-blue-500" : "bg-gray-200"
        }`}
      >
        <Text
          className={`text-center ${
            neighborhoodMode === "Compound" ? "text-white" : "text-gray-700"
          }`}
        >
          Compound
        </Text>
      </Pressable>
    </View>
  );

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="bg-white rounded-lg p-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-semibold">Locations</Text>
          <Pressable onPress={onClose}>
            <Ionicons name="close" size={24} color="#6B7280" />
          </Pressable>
        </View>
        {renderTabs()}
        {activeTab === "Neighborhood/Compound" && renderNeighborhoodToggle()}
        {renderSearchBar()}
        {selectedLocations.length > 0 && renderSelectedLocations()}
        {renderLocationList()}
      </View>
    </ModalContainer>
  );
}
