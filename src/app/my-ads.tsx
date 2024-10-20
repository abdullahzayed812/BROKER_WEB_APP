import React from "react";
import PropertyList from "@/components/shared/PropertyList";
import SearchBar from "@/components/shared/SearchBar";

const MyAdsScreen: React.FC = () => {
  return (
    <>
      <SearchBar />
      <PropertyList isEditableCard />
    </>
  );
};

export default MyAdsScreen;
