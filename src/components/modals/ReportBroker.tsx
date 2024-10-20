import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer";
import { RadioButton } from "../shared/RadioButton";

interface ReportBrokerModalProps {
  isVisible: boolean;
  onClose: () => void;
  broker: {
    name: string;
    company: string;
    rating: number;
    image: string;
  };
}

const reportOptions = [
  "Poor Communication",
  "Fraud",
  "Privacy Concerns",
  "Lack of Responsiveness",
  "Unprofessional Behavior",
  "Lack of Knowledge",
  "Other",
];

export const ReportBrokerModal: React.FC<ReportBrokerModalProps> = ({
  isVisible,
  onClose,
  broker,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const handleSubmit = () => {
    // Handle report submission logic here
    console.log("Report submitted:", selectedOption, otherReason);
    onClose();
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">Report Broker</Text>
        <View className="flex-row items-center mb-4">
          <Image
            source={{ uri: broker.image }}
            className="w-12 h-12 rounded-full mr-3"
          />
          <View>
            <Text className="font-semibold">{broker.name}</Text>
            <Text className="text-gray-600">{broker.company}</Text>
          </View>
          <View className="ml-auto flex-row items-center">
            <Ionicons name="star" size={16} color="gold" />
            <Text className="ml-1">{broker.rating}</Text>
          </View>
        </View>
        <ScrollView className="mb-4">
          {reportOptions.map((option) => (
            <RadioButton
              key={option}
              label={option}
              isSelected={selectedOption === option}
              onSelect={() => setSelectedOption(option)}
            />
          ))}
        </ScrollView>
        {selectedOption === "Other" && (
          <TextInput
            className="border border-gray-300 rounded-lg p-2 mb-4 h-28"
            placeholder="Other"
            value={otherReason}
            onChangeText={setOtherReason}
            multiline
          />
        )}
        <Pressable
          onPress={handleSubmit}
          className="bg-blue-500 py-2 px-4 rounded-lg items-center"
        >
          <Text className="text-white font-semibold">Submit Report</Text>
        </Pressable>
        <Pressable onPress={onClose} className="mt-4 items-center">
          <Text className="text-blue-500">Rate Broker</Text>
        </Pressable>
      </View>
    </ModalContainer>
  );
};
