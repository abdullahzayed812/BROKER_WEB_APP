import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import FilterSection from "../components/FilterSection";
import PropertyItem from "../components/PropertyItem";
import SaveButton from "@/components/SaveButton";
import { useIsMobile } from "@/hooks/useIsMobile";

const propertyData = [
  {
    type: "Request",
    action: "Buy",
    tag: "Primary",
    time: "1h",
    stars: 5,
    shares: 3,
    property: "Apartment, Duplex",
    location: "Zamalek, Cairo +2",
    price: "15M EGP",
    paymentType: "Installments",
  },
  {
    type: "Request",
    action: "Rent",
    tag: "Long stays",
    time: "4h",
    stars: 3,
    shares: 1,
    property: "Apartment",
    location: "New Cairo, Cairo +2",
    price: "30K EGP",
    paymentType: "Monthly",
  },
  {
    type: "Request",
    action: "Buy",
    tag: "Resale",
    time: "1d",
    stars: 4,
    shares: 3,
    property: "Apartment, Duplex",
    location: "Zamalek, Cairo +2",
    price: "15M EGP",
    paymentType: "Cash",
  },
  {
    type: "Request",
    action: "Rent",
    tag: "Short stays",
    time: "3d",
    stars: 1,
    shares: 1,
    property: "Studio",
    location: "Sheikh Zayed, Giza +2",
    price: "3K EGP",
    paymentType: "Daily",
  },
  {
    type: "Request",
    action: "Rent",
    tag: "Short stays",
    time: "3d",
    stars: 1,
    shares: 1,
    property: "Studio",
    location: "Sheikh Zayed, Giza +2",
    price: "3K EGP",
    paymentType: "Daily",
  },
];

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <Header />
      <FilterSection />
      <ScrollView horizontal={isMobile}>
        {propertyData.map((item, index) => (
          <PropertyItem key={index} item={item} />
        ))}
      </ScrollView>
      <SaveButton />
    </View>
  );
}
