import React from "react";
import PropertyListScreen from "../components/PropertyListScreen";

const FavoritesScreen: React.FC = () => {
  const favoriteProperties = [
    // Add your favorite properties data here
  ];

  return (
    <PropertyListScreen
      title="Favorites"
      subtitle="45 Requests"
      properties={favoriteProperties}
    />
  );
};

export default FavoritesScreen;
