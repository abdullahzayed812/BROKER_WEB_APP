import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer";
import { RadioButton } from "../shared/RadioButton";
import { Button } from "../shared/Button";

interface QuickMessageModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const messageOptions = [
  "Please, call me",
  "Is it negotiable?",
  "I want to see the property",
];

const matchedProperties = [
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
  "/placeholder.svg?height=80&width=80",
];

export const QuickMessageModal: React.FC<QuickMessageModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedOption, setSelectedOption] = useState(messageOptions[2]);
  const [generatedMessage, setGeneratedMessage] = useState(
    "Hello, I want to see the property, Request Link: pf.com/request,"
  );

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <Text className="text-xl font-bold mb-4">Quick Message</Text>
      {messageOptions.map((option) => (
        <RadioButton
          key={option}
          label={option}
          isSelected={selectedOption === option}
          onSelect={() => setSelectedOption(option)}
        />
      ))}
      <Text className="font-semibold mt-4 mb-2">5 Matched Properties</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4"
      >
        {matchedProperties.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            className="w-20 h-20 rounded-lg mr-2"
          />
        ))}
      </ScrollView>
      <View className="bg-gray-100 rounded-lg p-4 mb-4">
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-500">Generated Message</Text>
          <Ionicons name="close" size={20} color="gray" />
        </View>
        <TextInput
          value={generatedMessage}
          onChangeText={setGeneratedMessage}
          multiline
          className="text-sm"
        />
      </View>
      <Button title="Send Message" onPress={onClose} primary />
    </ModalContainer>
  );
};
