import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Property, PropertyCard } from "./PropertyCard";
import { RequestDetailsModal } from "../modals/RequestDetails";
import { generateList } from "@/utility";
import { SwipeCard } from "./SwipeCard";
import { router } from "expo-router";

export const propertyItem: Property = {
  id: 1,
  type: "Request",
  subType: "Buy",
  tag: "Primary",
  user: {
    name: "Ahmed @ Coldwell Banker",
    image: "/placeholder.svg?height=40&width=40",
  },
  property: { type: "Apartment, Duplex", bedrooms: 1, bathrooms: 1 },
  location: "Zamalek, Cairo",
  date: "1 Jan, 2025",
  price: "15M EGP",
  matchedProperties: 15,
};

export default function PropertyList({
  isEditableCard = false,
}: {
  isEditableCard?: boolean;
}) {
  const [showRequestDetailsModal, setShowRequestDetailsModal] = useState(false);

  return (
    <View className="flex-row flex-wrap justify-center" style={{ gap: 8 }}>
      {generateList(10, propertyItem).map((property, index) => (
        <Pressable
          key={index}
          className="w-full max-w-sm"
          onPress={() =>
            isEditableCard
              ? router.navigate("/edit-request")
              : setShowRequestDetailsModal(true)
          }
        >
          <PropertyCard
            key={property.id}
            property={property}
            isEditable={isEditableCard}
          />
        </Pressable>
      ))}

      {showRequestDetailsModal ? (
        <RequestDetailsModal
          isVisible={showRequestDetailsModal}
          onClose={() => setShowRequestDetailsModal(false)}
        />
      ) : null}
    </View>
  );
}
