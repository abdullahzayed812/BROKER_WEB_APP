import React from "react";
import PropertyList from "@/components/shared/PropertyList";
import RequestsSummary from "@/components/shared/RequestSummary";
import SearchBar from "@/components/shared/SearchBar";
import CategoryFilters from "@/components/shared/CategoryFilters";

export default function MarketplaceScreen() {
  return (
    <>
      <SearchBar />

      <CategoryFilters />

      <RequestsSummary sortBy="Budget" setSortBy={() => {}} />

      <PropertyList />
    </>
  );
}
