import React, { isValidElement, useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { SavedSearchesModal } from "../modals/SavedSearches";
import { SortingModal } from "../modals/Sorting";

interface RequestsSummaryProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
  isFavorites?: boolean;
}

const RequestsSummary: React.FC<RequestsSummaryProps> = ({
  sortBy,
  setSortBy,
  isFavorites = false,
}) => {
  const [showSavedSearchesModal, setShowSavedSearchesModal] = useState(false);
  const [showSortingModal, setShowSortingModal] = useState(false);

  return (
    <>
      <View className="flex-row justify-between items-center px-6 mb-4">
        <Text className="md:text-lg text-[12px] md:font-semibold text-gray_700">
          <Text className="text-[14px] text-gray_900 font-bold">2,457 </Text>{" "}
          Requests
        </Text>

        <View className="flex-row items-center" style={{ gap: 12 }}>
          {isFavorites ? (
            <Pressable
              className="flex-row items-center md:px-4 md:py-2 md:border md:border-gray-300 md:bg-white rounded-lg"
              style={{ gap: 4 }}
              onPress={() => {}}
            >
              <Text className="md:text-md text-sm text-gray_700 font-semibold">
                Show: Inventory
              </Text>
              <Ionicons
                name="arrow-down"
                size={Platform.OS === "web" ? 20 : 14}
                color="#000"
              />
            </Pressable>
          ) : (
            <Pressable
              className="flex-row items-center md:px-4 md:py-2 md:border md:border-gray-300 md:bg-white rounded-lg"
              style={{ gap: 4 }}
              onPress={() => setShowSavedSearchesModal(true)}
            >
              <Ionicons
                name="heart-outline"
                size={Platform.OS === "web" ? 20 : 14}
                color="#000"
              />
              <Text className="md:text-md text-sm text-gray_700 font-semibold">
                Saved Searches 3
              </Text>
            </Pressable>
          )}

          <Pressable
            className="flex-row justify-between items-center md:px-4 md:py-2 md:border md:border-gray-300 md:bg-white rounded-lg"
            style={{ gap: 4 }}
            onPress={() => setShowSortingModal(true)}
          >
            <FontAwesome
              name="sort-amount-desc"
              size={Platform.OS === "web" ? 20 : 14}
              color={"#5E6874"}
            />
            <Text className="md-text-md text-sm  text-gray_700 font-semibold">
              Sort
            </Text>
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
