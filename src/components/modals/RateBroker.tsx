import React, { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer";

interface RateBrokerModalProps {
  isVisible: boolean;
  onClose: () => void;
  broker: {
    name: string;
    company: string;
    rating: number;
    image: string;
  };
}

export const RateBrokerModal: React.FC<RateBrokerModalProps> = ({
  isVisible,
  onClose,
  broker,
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Handle rating submission logic here
    console.log("Rating submitted:", rating, comment);
    onClose();
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Pressable key={i} onPress={() => setRating(i)}>
          <Ionicons
            name={i <= rating ? "star" : "star-outline"}
            size={32}
            color={i <= rating ? "gold" : "gray"}
          />
        </Pressable>
      );
    }
    return stars;
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">Rate Broker</Text>
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
        <Text className="font-semibold mb-2">Rate Broker</Text>
        <View className="flex-row justify-between mb-4">{renderStars()}</View>
        <Text className="text-right mb-2">{rating}.0</Text>
        <Text className="font-semibold mb-2">Comments</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 mb-4"
          placeholder="Add your comments here"
          value={comment}
          onChangeText={setComment}
          multiline
          numberOfLines={4}
        />
        <Pressable
          onPress={handleSubmit}
          className="bg-blue-500 py-2 px-4 rounded-lg items-center"
        >
          <Text className="text-white font-semibold">Submit Rating</Text>
        </Pressable>
        <Pressable onPress={onClose} className="mt-4 items-center">
          <Text className="text-blue-500">Report an issue</Text>
        </Pressable>
      </View>
    </ModalContainer>
  );
};
