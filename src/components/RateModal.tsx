import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RateModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

const RateModal: React.FC<RateModalProps> = ({
  isVisible,
  onClose,
  onSubmit,
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  if (!isVisible) return null;

  return (
    <View className="absolute inset-0 bg-black bg-opacity-50 justify-center items-center">
      <View className="bg-white w-11/12 max-w-md rounded-lg p-4">
        <Text className="text-xl font-bold mb-4">Rate Broker</Text>
        <View className="flex-row justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Ionicons
                name={star <= rating ? "star" : "star-outline"}
                size={32}
                color={star <= rating ? "gold" : "gray"}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text className="text-center mb-2">{rating.toFixed(1)}</Text>
        <TextInput
          className="border border-gray-300 rounded p-2 mb-4"
          placeholder="Add your comments here"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-lg"
          onPress={() => onSubmit(rating, comment)}
        >
          <Text className="text-white text-center font-bold">Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-2"
          onPress={() => {
            /* TODO: Implement report issue */
          }}
        >
          <Text className="text-blue-500 text-center">Report an issue</Text>
        </TouchableOpacity>
        <TouchableOpacity className="absolute top-2 right-2" onPress={onClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RateModal;
