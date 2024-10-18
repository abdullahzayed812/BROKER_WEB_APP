import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface WhatsAppModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isVisible,
  onClose,
  onSend,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");

  const options = [
    "Please, call me",
    "Is it negotiable?",
    "I want to see the property",
  ];

  if (!isVisible) return null;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setGeneratedMessage(
      `Hello, ${option.toLowerCase()}. Request Link: pf.com/request`
    );
  };

  return (
    <View className="absolute inset-0 bg-black bg-opacity-50 justify-center items-center">
      <View className="bg-white w-11/12 max-w-md rounded-lg p-4">
        <Text className="text-xl font-bold mb-4">Quick Message</Text>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleOptionSelect(option)}
            className="flex-row items-center mb-2"
          >
            <View
              className={`w-6 h-6 rounded-full border-2 border-gray-400 mr-2 ${
                selectedOption === option ? "bg-green-500 border-green-500" : ""
              }`}
            />
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
        {generatedMessage && (
          <View className="bg-gray-100 p-2 rounded mt-2">
            <Text>{generatedMessage}</Text>
          </View>
        )}
        <TouchableOpacity
          className="bg-green-500 py-3 rounded-lg mt-4"
          onPress={() => onSend(generatedMessage)}
        >
          <Text className="text-white text-center font-bold">Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity className="absolute top-2 right-2" onPress={onClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhatsAppModal;
