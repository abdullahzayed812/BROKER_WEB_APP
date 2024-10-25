import React, { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SavedSearchesModal } from "../modals/SavedSearches";
import { SortingModal } from "../modals/Sorting";

interface RequestsSummaryProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const RequestsSummary: React.FC<RequestsSummaryProps> = ({
  sortBy,
  setSortBy,
}) => {
  const [showSavedSearchesModal, setShowSavedSearchesModal] = useState(false);
  const [showSortingModal, setShowSortingModal] = useState(false);

  return (
    <>
      <View className="flex-row justify-between items-center px-6 mb-8">
        <Text className="md:text-lg text-[12px] md:font-semibold">
          2,457 Requests
        </Text>

        <View className="flex-row items-center" style={{ gap: 8 }}>
          <Pressable
            className="flex-row items-center md:px-4 md:py-2 md:border md:border-gray-300 md:bg-white rounded-lg"
            onPress={() => setShowSavedSearchesModal(true)}
          >
            <Text className="md:text-md text-sm mr-1">Saved Searches 3</Text>
            <Ionicons
              name="star-outline"
              size={Platform.OS === "web" ? 20 : 10}
              color="#000"
            />
          </Pressable>
          <Pressable
            className="flex-row justify-between items-center md:px-4 md:py-2 md:border md:border-gray-300 md:bg-white rounded-lg"
            onPress={() => setShowSortingModal(true)}
          >
            <Text className="md-text-md text-sm mr-1 text-gray-600">
              Sort by - {sortBy}
            </Text>
            <Ionicons
              name="chevron-down"
              size={Platform.OS === "web" ? 20 : 10}
              color="#000"
            />
          </Pressable>
        </View>
      </View>

      {showSavedSearchesModal ? (
        <SavedSearchesModal
          isVisible={showSavedSearchesModal}
          onClose={() => setShowSavedSearchesModal(false)}
        />
      ) : null}

      {showSortingModal ? (
        <SortingModal
          isVisible={showSortingModal}
          onClose={() => setShowSortingModal(false)}
          onSort={() => {}}
        />
      ) : null}
    </>
  );
};

export default RequestsSummary;
