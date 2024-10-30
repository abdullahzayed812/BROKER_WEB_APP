import { ScrollView, Text, View } from "react-native";
import "../global.css";
import { Slot, router, useLocalSearchParams, usePathname } from "expo-router";
import BottomTabs from "@/components/shared/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/shared/Header";
import { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import { HeaderMobile } from "@/components/shared/HeaderMobile";
import AppHeader from "@/components/shared/AppHeader";
import SaveButton from "@/components/shared/SaveButton";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState(1);

  const pathname = usePathname();

  return (
    <>
      <SafeAreaView className="flex-1">
        <Header />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View className="md:w-[95%] bg-white md:self-center">
            <Slot />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={363}
            />
          </View>
        </ScrollView>

        {pathname === "/" ? (
          <SaveButton onPress={function (): void {}} />
        ) : null}

        <BottomTabs />
      </SafeAreaView>
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
