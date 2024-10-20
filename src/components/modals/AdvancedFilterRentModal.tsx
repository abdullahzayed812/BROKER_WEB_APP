import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer";
import { ToggleButton } from "../shared/ToggleButton";
import { RadioButton } from "../shared/RadioButton";
import { FilterSection } from "../shared/FilterSection";
import { Button } from "../shared/Button";
import { TagButton } from "../shared/TagButton";

interface AdvancedFilterRentModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const AdvancedFilterRentModal: React.FC<
  AdvancedFilterRentModalProps
> = ({ isVisible, onClose }) => {
  const [selectedType, setSelectedType] = useState("Rent");
  const [selectedStay, setSelectedStay] = useState("Long Stays");
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );

  const propertyTypes = ["Studio", "Apartment", "Duplex", "Villa", "Townhouse"];

  const togglePropertyType = (type: string) => {
    if (selectedPropertyTypes.includes(type)) {
      setSelectedPropertyTypes(selectedPropertyTypes.filter((t) => t !== type));
    } else {
      setSelectedPropertyTypes([...selectedPropertyTypes, type]);
    }
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <ScrollView>
        <ToggleButton
          options={["Rent", "Buy"]}
          selectedOption={selectedType}
          onSelect={setSelectedType}
        />
        <View className="flex-row mt-4">
          <RadioButton
            label="Long Stays"
            isSelected={selectedStay === "Long Stays"}
            onSelect={() => setSelectedStay("Long Stays")}
          />
          <RadioButton
            label="Short Stays"
            isSelected={selectedStay === "Short Stays"}
            onSelect={() => setSelectedStay("Short Stays")}
          />
        </View>
        <FilterSection title="Location">
          <Pressable className="flex-row justify-between items-center">
            <Text>Select location</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </Pressable>
        </FilterSection>
        <FilterSection title="Budget">
          <View className="flex-row justify-between items-center mb-4">
            <Text>Monthly</Text>
            <Ionicons name="chevron-down" size={24} color="black" />
          </View>
          <View className="flex-row justify-between">
            <View className="flex-1 mr-2">
              <TextInput
                placeholder="From"
                className="border border-gray-300 rounded-lg p-2"
              />
            </View>
            <View className="flex-1 ml-2">
              <TextInput
                placeholder="To"
                className="border border-gray-300 rounded-lg p-2"
              />
            </View>
          </View>
        </FilterSection>
        <FilterSection title="Type">
          <View className="flex-row flex-wrap">
            {propertyTypes.map((type) => (
              <TagButton
                key={type}
                label={type}
                isSelected={selectedPropertyTypes.includes(type)}
                onPress={() => togglePropertyType(type)}
              />
            ))}
          </View>
        </FilterSection>
        <View className="flex-row justify-between mt-6">
          <Button title="Save Search" onPress={() => {}} />
          <Button title="Show Results" onPress={onClose} primary />
        </View>
      </ScrollView>
    </ModalContainer>
  );
};
