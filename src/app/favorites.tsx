import React from "react";
import PropertyList from "@/components/web/PropertyList";
import RequestsSummary from "@/components/shared/RequestSummary";

const FavoritesScreen: React.FC = () => {
  return (
    <>
      <RequestsSummary
        sortBy={"Budget"}
        setSortBy={function (sort: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <PropertyList />
    </>
  );
};

export default FavoritesScreen;
