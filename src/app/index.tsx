import React from "react";
import PropertyList from "@/components/shared/PropertyList";
import RequestsSummary from "@/components/shared/RequestSummary";
import SearchBar from "@/components/shared/SearchBar";
import CategoryFilters from "@/components/shared/CategoryFilters";
import { HeaderMobile } from "@/components/shared/HeaderMobile";
import AppHeader from "@/components/shared/AppHeader";
import SaveButton from "@/components/shared/SaveButton";

export default function MarketplaceScreen() {
  return (
    <>
      <AppHeader
        title={"Find"}
        onBackPress={function (): void {}}
        onNotificationPress={function (): void {}}
        hasNotifications={false}
      />

      <HeaderMobile />

      <SearchBar />

      <CategoryFilters />

      <RequestsSummary sortBy="Budget" setSortBy={() => {}} />

      <PropertyList />
    </>
  );
}
