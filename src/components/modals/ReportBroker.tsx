import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { ModalContainer } from "../shared/ModalContainer";
import { Ionicons } from "@expo/vector-icons";

interface ReportBrokerModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (issue: string, otherDetails?: string) => void;
}

const issueOptions = [
  "Poor Communication",
  "Fraud",
  "Privacy Concerns",
  "Lack of Responsiveness",
  "Unprofessional Behavior",
  "Lack of Knowledge",
  "Other",
];

export function ReportBrokerModal({
  isVisible,
  onClose,
  onConfirm,
}: ReportBrokerModalProps) {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [otherIssue, setOtherIssue] = useState("");

  const handleConfirm = () => {
    onConfirm(
      selectedIssue,
      selectedIssue === "Other" ? otherIssue : undefined
    );
    setSelectedIssue("");
    setOtherIssue("");
    onClose();
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <ScrollView className="bg-white px-4 py-6">
        <Text className="text-xl font-semibold mb-6">Report an issue</Text>

        {issueOptions.map((issue) => (
          <TouchableOpacity
            key={issue}
            className="flex-row items-center mb-4"
            onPress={() => setSelectedIssue(issue)}
          >
            <View
              className={`w-6 h-6 rounded-full border-2 ${
                selectedIssue === issue ? "border-blue-500" : "border-gray-300"
              } mr-3 items-center justify-center`}
            >
              {selectedIssue === issue && (
                <View className="w-3 h-3 rounded-full bg-blue-500" />
              )}
            </View>
            <Text className="text-base">{issue}</Text>
          </TouchableOpacity>
        ))}

        {selectedIssue === "Other" && (
          <TextInput
            className="h-24 border border-gray-300 rounded-lg px-3 py-2 mb-4"
            placeholder="Please specify the issue"
            value={otherIssue}
            onChangeText={setOtherIssue}
            multiline
          />
        )}

        <View className="flex-row items-center mb-6">
          <Ionicons name="star-outline" size={18} color="#0078FF" />
          <Text className="text-blue-500 ml-2">Rate Broker</Text>
        </View>

        <TouchableOpacity
          className="bg-blue-500 py-4 rounded-lg"
          onPress={handleConfirm}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Confirm
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ModalContainer>
  );
}
