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

interface RateBrokerModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (rating: number, comment: string) => void;
  onReportIssue: () => void;
}

export function RateBrokerModal({
  isVisible,
  onClose,
  onConfirm,
  onReportIssue,
}: RateBrokerModalProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleConfirm = () => {
    onConfirm(rating, comment);
    setRating(0);
    setComment("");
    onClose();
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <ScrollView className=" bg-white px-4 py-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-xl font-semibold">Rate Broker</Text>
          <View className="flex-row items-center" style={{ gap: 12 }}>
            <View className="flex-row justify-between">
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <Ionicons
                    name={star <= rating ? "star" : "star-outline"}
                    size={32}
                    color={star <= rating ? "#FFD700" : "#D3D3D3"}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Text className="text-center">{rating.toFixed(1)}</Text>
          </View>
        </View>

        <Text className="text-lg font-semibold mb-2">Comments</Text>
        <TextInput
          className="h-24 border border-gray-300 rounded-lg px-3 py-2 mb-4"
          placeholder="Add your comments here"
          value={comment}
          onChangeText={setComment}
          multiline
        />

        <TouchableOpacity className="flex-row mb-6" onPress={onReportIssue}>
          <Ionicons name="flag-outline" size={18} />
          <Text className="text-blue-500 ml-4">Report an issue</Text>
        </TouchableOpacity>

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
