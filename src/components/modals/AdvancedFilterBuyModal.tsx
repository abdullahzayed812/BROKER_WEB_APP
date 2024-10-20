import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "@/components/shared/ModalContainer";
import { ToggleButton } from "@/components/shared/ToggleButton";
import { RadioButton } from "@/components/shared/RadioButton";
import { FilterSection } from "@/components/web/FilterSection";
import { Button } from "@/components/shared/Button";

interface AdvancedFilterBuyModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const AdvancedFilterBuyModal: React.FC<AdvancedFilterBuyModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState("Rent");
  const [selectedOption, setSelectedOption] = useState("Primary");

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
            label="Primary"
            isSelected={selectedOption === "Primary"}
            onSelect={() => setSelectedOption("Primary")}
          />
          <RadioButton
            label="Resale"
            isSelected={selectedOption === "Resale"}
            onSelect={() => setSelectedOption("Resale")}
          />
        </View>
        <FilterSection title="Location">
          <Pressable className="flex-row justify-between items-center">
            <Text>Select location</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </Pressable>
        </FilterSection>
        <FilterSection title="Company">
          <Pressable className="flex-row justify-between items-center">
            <Text>Select company</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </Pressable>
        </FilterSection>
        <FilterSection title="Budget">
          <View className="flex-row justify-between items-center mb-4">
            <Text>Cash</Text>
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
        <View className="flex-row justify-between mt-6">
          <Button title="Save Search" onPress={() => {}} />
          <Button title="Show Results" onPress={onClose} primary />
        </View>
      </ScrollView>
    </ModalContainer>
  );
};
