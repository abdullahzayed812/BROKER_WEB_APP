import React from "react";
import PropertyList from "@/components/shared/PropertyList";
import AppHeader from "@/components/shared/AppHeader";
import RequestsSummary from "@/components/shared/RequestSummary";
import { View } from "react-native";

const FavoritesScreen: React.FC = () => {
  return (
    <>
      <AppHeader
        title={"Favorites"}
        onBackPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        onNotificationPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        hasNotifications={false}
      />

      <View className="h-6" />

      <RequestsSummary
        sortBy={""}
        setSortBy={function (sort: string): void {}}
        isFavorites={true}
      />

      <PropertyList />
    </>
  );
};

export default FavoritesScreen;
