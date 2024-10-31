import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppHeader from "@/components/shared/AppHeader";
import GenericDropdown from "@/components/shared/GenericDropdown";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface LocationChip {
  id: string;
  name: string;
}

const rentOrBuyOptions = ["Rent", "Buy"];
const typeOptions = ["Apartment", "Villa", "Duplex", "Studio", "Townhouse"];

export default function EditPropertyPage() {
  const [type, setType] = useState<string | null>(null);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(1);
  const [rentOrBuy, setRentOrBuy] = useState<string | null>(null);
  const [budget, setBudget] = useState("30,000 EGP Monthly");
  const [duration, setDuration] = useState("1 Month\nFrom 06-01-2024");

  const [locations] = useState<LocationChip[]>([
    { id: "1", name: "Cairo, Zamalek" },
    { id: "2", name: "Cairo, Zamalek" },
    { id: "3", name: "Cairo, Zamalek" },
  ]);

  return (
    <>
      <AppHeader
        title={""}
        hasBackButton
        onBackPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        onNotificationPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        hasNotifications={false}
      />

      <Text className="text-[22px] pt-8 pb-6 px-6">Edit Request</Text>

      <View className="bg-white rounded-lg mb-6 p-6">
        <Text className="font-semibold mb-4 bg-primary_50 py-6 px-2 rounded-tl-lg rounded-tr-lg">
          Details
        </Text>

        <GenericDropdown
          label="Rent or Buy"
          options={rentOrBuyOptions}
          selectedValue={rentOrBuy}
          onSelect={(value) => setRentOrBuy(value)}
          placeholder="Select Rent or Buy"
          icon={
            <MaterialIcons
              name="apartment"
              size={24}
              color="gray"
              className="mr-2"
            />
          }
        />

        <GenericDropdown
          label="Types"
          options={typeOptions}
          selectedValue={type}
          onSelect={(value) => setType(value)}
          placeholder="Select Type"
          icon={
            <FontAwesome5
              name="building"
              size={20}
              color="gray"
              className="mr-2"
            />
          }
        />

        <GenericDropdown
          label="Status"
          options={typeOptions}
          selectedValue={type}
          onSelect={(value) => setType(value)}
          placeholder="Select Status"
          icon={
            <MaterialCommunityIcons
              name="table-furniture"
              size={24}
              color="gray"
              className="mr-2"
            />
          }
        />

        <View className="flex-row justify-between items-center my-4">
          <View className="flex-row items-center">
            <Ionicons name="cash-outline" size={20} color="gray" />
            <Text className="ml-2">Budget</Text>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="mr-6 text-blue-500">{budget}</Text>
            <Ionicons name="pencil" size={20} color="blue" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center my-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="location-outline" size={20} color="gray" />
            <Text className="ml-2">Locations</Text>
          </View>
          <View>
            {locations.map((location, index) => (
              <View
                key={index}
                className="bg-blue-100 rounded-full px-3 py-1 mb-2 self-start"
              >
                <Text className="text-primary_500">{location.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="flex-row justify-between items-center mb-4">
          <Text>No. of Bedrooms</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => setBedrooms(Math.max(0, bedrooms - 1))}
            >
              <Ionicons name="remove-circle-outline" size={24} color="gray" />
            </TouchableOpacity>
            <Text className="mx-4">{bedrooms}</Text>
            <TouchableOpacity onPress={() => setBedrooms(bedrooms + 1)}>
              <Ionicons name="add-circle" size={24} color="#0078FF" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center mb-4">
          <Text>No. of Bathrooms</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => setBathrooms(Math.max(0, bathrooms - 1))}
            >
              <Ionicons name="remove-circle-outline" size={24} color="gray" />
            </TouchableOpacity>
            <Text className="mx-4">{bathrooms}</Text>
            <TouchableOpacity onPress={() => setBathrooms(bathrooms + 1)}>
              <Ionicons name="add-circle" size={24} color="#0078FF" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={20} color="gray" />
            <Text className="ml-2">Duration</Text>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="mr-2 text-blue-500">{duration}</Text>
            <Ionicons name="pencil" size={20} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity className="bg-blue-500 py-4 rounded-lg items-center">
          <Text className="text-white text-lg font-semibold">Create Ad</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
