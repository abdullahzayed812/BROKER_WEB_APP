import { ScrollView, Text, View } from "react-native";
import { Slot, useLocalSearchParams, usePathname } from "expo-router";
import BottomTabs from "@/components/shared/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/shared/Header";
import { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import SaveButton from "@/components/shared/SaveButton";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useAppSelector } from "@/redux/hooks";
import { getScrollEnabled } from "@/redux/mainScrollable";

import "../global.css";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export function MainLayout() {
  const scrollEnabled = useAppSelector(getScrollEnabled);

  const [currentPage, setCurrentPage] = useState(1);

  const pathname = usePathname();

  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1">
        <StatusBar style="dark" />
        <Header />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          scrollEnabled={scrollEnabled}
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
    </Provider>
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
