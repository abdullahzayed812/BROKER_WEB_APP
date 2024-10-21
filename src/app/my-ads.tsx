import React from "react";
import PropertyList from "@/components/shared/PropertyList";
import SearchBar from "@/components/shared/SearchBar";
import { MyAdsTabs } from "@/components/shared/MyAdsTabs";

const MyAdsScreen: React.FC = () => {
  return (
    <>
      <SearchBar />
      <MyAdsTabs />
      <PropertyList isEditableCard />
    </>
  );
};

export default MyAdsScreen;
