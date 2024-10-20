import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  return (
    <View className="flex-row justify-center items-center p-4 my-8">
      <Pressable
        onPress={() => setCurrentPage(Math.max(1, currentPage - 1))}
        className="mr-2"
      >
        <Ionicons name="chevron-back" size={24} color="#000" />
      </Pressable>
      {[currentPage - 1, currentPage, currentPage + 1].map(
        (page) =>
          page > 0 &&
          page <= totalPages && (
            <Pressable
              key={page}
              onPress={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg items-center justify-center mx-2 ${
                page === currentPage ? "bg-blue-500" : "bg-gray-200"
              }`}
            >
              <Text
                className={page === currentPage ? "text-white" : "text-black"}
              >
                {page}
              </Text>
            </Pressable>
          )
      )}
      <Text>...</Text>
      <Pressable
        onPress={() => setCurrentPage(totalPages)}
        className={`w-8 h-8 rounded-full items-center justify-center mx-1 ${
          totalPages === currentPage ? "bg-blue-500" : "bg-gray-200"
        }`}
      >
        <Text
          className={totalPages === currentPage ? "text-white" : "text-black"}
        >
          {totalPages}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        className="ml-2"
      >
        <Ionicons name="chevron-forward" size={24} color="#000" />
      </Pressable>
    </View>
  );
}
