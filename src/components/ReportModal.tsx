import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ReportModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (issue: string, details: string) => void;
}

const ReportModal: React.FC<ReportModalProps> = ({
  isVisible,
  onClose,
  onSubmit,
}) => {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  const issues = [
    "Poor Communication",
    "Fraud",
    "Privacy Concerns",
    "Lack of Responsiveness",
    "Unprofessional Behavior",
    "Lack of Knowledge",
    "Other",
  ];

  if (!isVisible) return null;

  return (
    <View className="absolute inset-0 bg-black bg-opacity-50 justify-center items-center">
      <View className="bg-white w-11/12 max-w-md rounded-lg p-4">
        <Text className="text-xl font-bold mb-4">Report an issue</Text>
        <ScrollView className="max-h-96">
          {issues.map((issue) => (
            <TouchableOpacity
              key={issue}
              onPress={() => setSelectedIssue(issue)}
              className="flex-row items-center mb-2"
            >
              <View
                className={`w-6 h-6 rounded-full border-2 border-gray-400 mr-2 ${
                  selectedIssue === issue ? "bg-blue-500 border-blue-500" : ""
                }`}
              />
              <Text>{issue}</Text>
            </TouchableOpacity>
          ))}
          {selectedIssue === "Other" && (
            <TextInput
              className="border border-gray-300 rounded p-2 mt-2"
              placeholder="Other"
              value={otherDetails}
              onChangeText={setOtherDetails}
              multiline
            />
          )}
        </ScrollView>
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-lg mt-4"
          onPress={() => onSubmit(selectedIssue, otherDetails)}
        >
          <Text className="text-white text-center font-bold">Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity className="absolute top-2 right-2" onPress={onClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportModal;
