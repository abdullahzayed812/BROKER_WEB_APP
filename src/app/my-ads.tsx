import React from "react";
import PropertyList from "@/components/web/PropertyList";
import SearchBar from "@/components/web/SearchBar";

const MyAdsScreen: React.FC = () => {
  return (
    <>
      <SearchBar />
      <PropertyList isEditableCard />
    </>
  );
};

export default MyAdsScreen;
