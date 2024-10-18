import React from "react";
import PropertyListScreen from "../components/PropertyListScreen";

const MyAdsScreen: React.FC = () => {
  const myProperties = [
    // Add your properties data here
  ];

  return (
    <PropertyListScreen
      title="My Requests"
      subtitle="45 Requests"
      properties={myProperties}
      showEditControls={true}
    />
  );
};

export default MyAdsScreen;
