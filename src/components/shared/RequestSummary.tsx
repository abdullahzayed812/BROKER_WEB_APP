import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SavedSearchesModal } from "../modals/SavedSearches";

interface RequestsSummaryProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const RequestsSummary: React.FC<RequestsSummaryProps> = ({
  sortBy,
  setSortBy,
}) => {
  const [showSavedSearchesModal, setShowSavedSearchesModal] = useState(false);

  return (
    <>
      <View className="flex-row justify-between items-center mb-8">
        <Text className="text-lg font-semibold">2,457 Requests</Text>

        <View className="flex-row items-center space-x-2 ">
          <Pressable
            className="flex-row items-center px-4 py-2 border border-gray-300 bg-white rounded-lg"
            onPress={() => setShowSavedSearchesModal(true)}
          >
            <Text className="mr-2">Saved Searches 3</Text>
            <Ionicons name="star-outline" size={20} color="#000" />
          </Pressable>
          <View className="flex-row justify-between items-center px-4 py-2 border border-gray-300 bg-white rounded-lg">
            <Text className="text-gray-600">Sort by - {sortBy}</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </View>
        </View>
      </View>

      {showSavedSearchesModal ? (
        <SavedSearchesModal
          isVisible={showSavedSearchesModal}
          onClose={() => setShowSavedSearchesModal(false)}
        />
      ) : null}
    </>
  );
};

export default RequestsSummary;
