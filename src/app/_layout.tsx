import { Platform, ScrollView, Text, View } from "react-native";
import "../global.css";
import { Slot, useLocalSearchParams } from "expo-router";
import BottomTabs from "@/components/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/web/Header";
import { useState } from "react";
import Pagination from "@/components/web/Pagination";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <SafeAreaView className="flex-1 bg-gray-100">
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <PageInfo />
          <View className="w-[95%] p-8 bg-blue-50 self-center">
            <Slot />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={363}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      {Platform.OS !== "web" ? <BottomTabs /> : null}
    </>
  );
}

export const PageInfo = () => {
  const params = useLocalSearchParams();

  return (
    <View className="w-[95%] p-8 self-center">
      <Text className="text-2xl font-bold mb-2">
        {params.screenName ?? "Marketplace"}
      </Text>
      <Text className="text-gray-600 mb-4">
        Effortlessly track, manage, and convert leads to boost your sales and
        grow your business.
      </Text>
    </View>
  );
};
