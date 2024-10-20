import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer";
import { generateList } from "@/utility";

interface SavedSearchesModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const savedSearchItem = {
  type: "Apartment, Duplex",
  saleType: "Sale",
  location: "Zamalek, Cairo",
  budget: "15M EGP",
  paymentType: "Installment",
};

const SavedSearchItem = ({ search, onDelete }) => (
  <View className="bg-white border border-gray-200 rounded-lg p-4 mb-2">
    <View className="flex-row justify-between items-center mb-2">
      <View className="flex-row">
        <Text className="bg-blue-100 text-blue-500 px-2 py-1 rounded mr-2">
          Buy
        </Text>
        <Text className="bg-green-100 text-green-500 px-2 py-1 rounded">
          Primary
        </Text>
      </View>
      <Pressable onPress={onDelete}>
        <Ionicons name="trash-outline" size={20} color="red" />
      </Pressable>
    </View>
    <Text className="text-sm">
      {search.type} for {search.saleType} in {search.location} with budget{" "}
      {search.budget} {search.paymentType}
    </Text>
  </View>
);

export const SavedSearchesModal: React.FC<SavedSearchesModalProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="flex-row items-center mb-4">
        <Text className="text-xl font-bold">Saved Searches</Text>
        <Text className="text-blue-500 font-semibold ml-3 text-[22px]">5</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {generateList(10, savedSearchItem).map((search, index) => (
          <SavedSearchItem
            key={index}
            search={search}
            onDelete={() => console.log("Delete search", index)}
          />
        ))}
      </ScrollView>
    </ModalContainer>
  );
};
