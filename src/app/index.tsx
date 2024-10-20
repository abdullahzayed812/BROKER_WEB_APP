import React, { useState } from "react";
import PropertyList from "@/components/web/PropertyList";
import RequestsSummary from "@/components/shared/RequestSummary";
import SearchBar from "@/components/web/SearchBar";
import CategoryFilters from "@/components/web/CategoryFilters";
import { View } from "react-native";

export default function MarketplaceScreen() {
  return (
    <>
      <SearchBar />

      <CategoryFilters />

      <RequestsSummary
        sortBy="Budget"
        setSortBy={function (sort: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      <PropertyList />
    </>
  );
}
