import React, { useState } from "react";
import { TextInput, ScrollView, Text, View } from "react-native";
import { ModalContainer } from "../shared/ModalContainer";
import { Checkbox } from "../shared/Checkbox";
import { TagButton } from "../shared/TagButton";
import { RadioButton } from "../shared/RadioButton";
import { Button } from "../shared/Button";

interface FilterLocationModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const FilterLocationModal: React.FC<FilterLocationModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showCompounds, setShowCompounds] = useState(false);
  const locations = ["Cairo", "Luxor", "Giza", "Mansoura", "Aswan"];
  const popularLocations = [
    "New Cairo, Cairo",
    "Sheikh Zayed, Giza",
    "6 October City, Giza",
    "Zamalek, Cairo",
    "Ras Al Hekma, North Coast",
    "Mostakbal City",
  ];

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <TextInput
        placeholder="Where?"
        className="bg-gray-100 rounded-full px-4 py-2 mb-4"
      />
      <Checkbox
        label="Show compounds results only"
        isChecked={showCompounds}
        onToggle={() => setShowCompounds(!showCompounds)}
      />
      <Text className="font-semibold mb-2">Popular locations</Text>
      <View className="flex-row flex-wrap mb-4">
        {popularLocations.map((location) => (
          <TagButton
            key={location}
            label={location}
            isSelected={selectedLocation === location}
            onPress={() => setSelectedLocation(location)}
          />
        ))}
      </View>
      <ScrollView className="mb-4">
        {locations.map((location) => (
          <RadioButton
            key={location}
            label={location}
            isSelected={selectedLocation === location}
            onSelect={() => setSelectedLocation(location)}
          />
        ))}
      </ScrollView>
      <Button title="Apply" onPress={onClose} primary />
    </ModalContainer>
  );
};
