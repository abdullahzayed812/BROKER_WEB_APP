import React from "react";
import PropertyList from "@/components/shared/PropertyList";
import RequestsSummary from "@/components/shared/RequestSummary";
import { FavoritesTabs } from "@/components/shared/FavoriteTabs";
import { usePathname } from "expo-router";

const FavoritesScreen: React.FC = () => {
  const pathname = usePathname();

  const isFavoritesPage = pathname === "/";
  return (
    <>
      <FavoritesTabs />

      <PropertyList />
    </>
  );
};

export default FavoritesScreen;
