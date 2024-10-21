import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ToggleButton = ({ options, selectedOption, onSelect }) => (
  <View className="flex-row bg-white rounded-lg overflow-hidden self-start">
    {options.map((option) => (
      <Pressable
        key={option}
        className={`py-2 px-4 ${
          selectedOption === option ? "bg-blue-500" : "bg-white"
        }`}
        onPress={() => onSelect(option)}
      >
        <Text
          className={selectedOption === option ? "text-white" : "text-blue-500"}
        >
          {option}
        </Text>
      </Pressable>
    ))}
  </View>
);

const RadioButton = ({ label, selected, onSelect }) => (
  <Pressable className="flex-row items-center mr-4" onPress={onSelect}>
    <View
      className={`w-5 h-5 rounded-full border-2 ${
        selected ? "border-blue-500" : "border-gray-300"
      } mr-2`}
    >
      {selected && <View className="w-3 h-3 rounded-full bg-blue-500 m-auto" />}
    </View>
    <Text>{label}</Text>
  </Pressable>
);

const DetailField = ({ icon, label, value, onEdit }) => (
  <View className="flex-row items-center justify-between mb-4">
    <View className="flex-row items-center">
      <Ionicons name={icon} size={20} color="#6B7280" />
      <Text className="ml-2 text-gray-600">{label}</Text>
    </View>
    <Pressable className="flex-row items-center" onPress={onEdit}>
      <Text className="mr-2">{value}</Text>
      <Ionicons name="chevron-down" size={20} color="#6B7280" />
    </Pressable>
  </View>
);

export default function AddRequestPage() {
  const [adType, setAdType] = useState("Request");
  const [visibility, setVisibility] = useState("Internal");
  const [addMethod, setAddMethod] = useState("Paste Text");
  const [pastedText, setPastedText] = useState("");
  const [details, setDetails] = useState({
    rentOrBuy: "Rent or Buy",
    types: "Select",
    status: "Furnished",
    budget: "30,000 EGP Monthly",
    locations: ["Cairo, Zamalek", "Cairo, Zamalek", "Cairo, Zamalek"],
    bedrooms: 3,
    bathrooms: 1,
    duration: "1 Month From 06-01-2024",
    extraDetails:
      "For rent Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house...",
  });

  const handleCreateAd = () => {
    // Implement ad creation logic here
    console.log("Creating ad with:", {
      adType,
      visibility,
      addMethod,
      pastedText,
      details,
    });
  };

  const renderLeftSection = () => (
    <View className="md:w-[40%] pl-4">
      <Text className="text-xl font-semibold mb-4">Select Ad Type</Text>
      <ToggleButton
        options={["Request", "Inventory"]}
        selectedOption={adType}
        onSelect={setAdType}
      />

      <Text className="text-xl font-semibold mt-6 mb-4">Show as</Text>
      <View className="flex-row">
        <RadioButton
          label="Internal"
          selected={visibility === "Internal"}
          onSelect={() => setVisibility("Internal")}
        />
        <RadioButton
          label="Public"
          selected={visibility === "Public"}
          onSelect={() => setVisibility("Public")}
        />
      </View>

      <Text className="text-xl font-semibold mt-6 mb-4">
        How do you want to add your Ad?
      </Text>
      <View className="flex-row mb-2">
        <RadioButton
          label="Paste Text"
          selected={addMethod === "Paste Text"}
          onSelect={() => setAddMethod("Paste Text")}
        />
        <RadioButton
          label="Fill Details"
          selected={addMethod === "Fill Details"}
          onSelect={() => setAddMethod("Fill Details")}
        />
      </View>
      <Text className="text-sm text-gray-500 mb-4">
        When you add your original request text, our AI-powered system will
        format it into a table, making it quick and easy for you to create your
        requests.
      </Text>

      {addMethod === "Paste Text" && (
        <View className="mb-6">
          <Text className="font-semibold mb-2">Paste Text (English/عربي)</Text>
          <TextInput
            multiline
            numberOfLines={4}
            className="bg-white border border-gray-300 rounded-lg p-2"
            placeholder="Example: For rent Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house..."
            value={pastedText}
            onChangeText={setPastedText}
          />
        </View>
      )}
    </View>
  );

  const renderRightSection = () => (
    <View className="md:w-[35%] pr-4">
      <View className="bg-white rounded-lg p-4 mb-6">
        <Text className="font-semibold mb-4">Details</Text>
        <DetailField
          icon="home-outline"
          label="Rent or Buy"
          value={details.rentOrBuy}
          onEdit={() => {}}
        />
        <DetailField
          icon="list-outline"
          label="Types"
          value={details.types}
          onEdit={() => {}}
        />
        <DetailField
          icon="checkmark-circle-outline"
          label="Status"
          value={details.status}
          onEdit={() => {}}
        />
        <DetailField
          icon="cash-outline"
          label="Budget"
          value={details.budget}
          onEdit={() => {}}
        />
        <DetailField
          icon="location-outline"
          label="Locations"
          value={details.locations.join(", ")}
          onEdit={() => {}}
        />
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-600">No. of Bedrooms</Text>
          <View className="flex-row items-center">
            <Pressable className="bg-gray-200 w-8 h-8 rounded-full items-center justify-center">
              <Text>-</Text>
            </Pressable>
            <Text className="mx-4">{details.bedrooms}</Text>
            <Pressable className="bg-blue-500 w-8 h-8 rounded-full items-center justify-center">
              <Text className="text-white">+</Text>
            </Pressable>
          </View>
        </View>
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-600">No. of Bathrooms</Text>
          <View className="flex-row items-center">
            <Pressable className="bg-gray-200 w-8 h-8 rounded-full items-center justify-center">
              <Text>-</Text>
            </Pressable>
            <Text className="mx-4">{details.bathrooms}</Text>
            <Pressable className="bg-blue-500 w-8 h-8 rounded-full items-center justify-center">
              <Text className="text-white">+</Text>
            </Pressable>
          </View>
        </View>
        <DetailField
          icon="calendar-outline"
          label="Duration"
          value={details.duration}
          onEdit={() => {}}
        />
        <Text className="font-semibold mt-4 mb-2">Extra Details</Text>
        <TextInput
          multiline
          numberOfLines={4}
          className="bg-gray-100 rounded-lg p-2"
          value={details.extraDetails}
          onChangeText={(text) =>
            setDetails({ ...details, extraDetails: text })
          }
        />
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View
        className={`${
          Platform.OS === "web" ? "flex-row" : "flex-col"
        } justify-between`}
      >
        {renderLeftSection()}
        {renderRightSection()}
      </View>
      <Pressable
        className="bg-blue-500 py-3 px-6 rounded-lg items-center mt-4"
        onPress={handleCreateAd}
      >
        <Text className="text-white font-semibold">Create Ad</Text>
      </Pressable>
    </ScrollView>
  );
}
