import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AdDetails {
  rentOrBuy: string;
  types: string;
  status: string;
  budget: string;
  locations: string[];
  bedrooms: number;
  bathrooms: number;
  duration: string;
  extraDetails: string;
}

const CreateAdScreen: React.FC = () => {
  const [adType, setAdType] = useState<"Request" | "Inventory">("Request");
  const [visibility, setVisibility] = useState<"Internal" | "Public">(
    "Internal"
  );
  const [inputMethod, setInputMethod] = useState<"Paste Text" | "Fill Details">(
    "Paste Text"
  );
  const [adText, setAdText] = useState("");
  const [adDetails, setAdDetails] = useState<AdDetails>({
    rentOrBuy: "Rent or Buy",
    types: "",
    status: "Furnished",
    budget: "",
    locations: [],
    bedrooms: 0,
    bathrooms: 0,
    duration: "",
    extraDetails: "",
  });
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const handleSubmitAd = () => {
    // Handle ad submission logic here
    console.log(
      "Ad submitted:",
      inputMethod === "Paste Text" ? adText : adDetails
    );
  };

  const renderAdTypeSelector = () => (
    <View className="flex-row bg-gray-100 rounded-full p-1 mb-4">
      <TouchableOpacity
        onPress={() => setAdType("Request")}
        className={`flex-1 py-2 px-4 rounded-full ${
          adType === "Request" ? "bg-white" : ""
        }`}
      >
        <Text
          className={`text-center ${
            adType === "Request" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Request
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setAdType("Inventory")}
        className={`flex-1 py-2 px-4 rounded-full ${
          adType === "Inventory" ? "bg-white" : ""
        }`}
      >
        <Text
          className={`text-center ${
            adType === "Inventory" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Inventory
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderVisibilitySelector = () => (
    <View className="flex-row mb-4">
      <TouchableOpacity
        onPress={() => setVisibility("Internal")}
        className="flex-row items-center mr-4"
      >
        <View
          className={`w-5 h-5 rounded-full border-2 ${
            visibility === "Internal"
              ? "bg-blue-500 border-blue-500"
              : "border-gray-400"
          }`}
        />
        <Text className="ml-2">Internal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setVisibility("Public")}
        className="flex-row items-center"
      >
        <View
          className={`w-5 h-5 rounded-full border-2 ${
            visibility === "Public"
              ? "bg-blue-500 border-blue-500"
              : "border-gray-400"
          }`}
        />
        <Text className="ml-2">Public</Text>
      </TouchableOpacity>
    </View>
  );

  const renderInputMethodSelector = () => (
    <View className="flex-row mb-4">
      <TouchableOpacity
        onPress={() => setInputMethod("Paste Text")}
        className="flex-row items-center mr-4"
      >
        <View
          className={`w-5 h-5 rounded-full border-2 ${
            inputMethod === "Paste Text"
              ? "bg-blue-500 border-blue-500"
              : "border-gray-400"
          }`}
        />
        <Text className="ml-2">Paste Text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setInputMethod("Fill Details")}
        className="flex-row items-center"
      >
        <View
          className={`w-5 h-5 rounded-full border-2 ${
            inputMethod === "Fill Details"
              ? "bg-blue-500 border-blue-500"
              : "border-gray-400"
          }`}
        />
        <Text className="ml-2">Fill Details</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAdTextInput = () => (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="font-semibold">Paste Text (English/عربي)</Text>
        <TouchableOpacity onPress={() => setShowHowItWorks(true)}>
          <Text className="text-blue-500">How it works</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        className="bg-gray-100 rounded-lg p-4 h-32"
        multiline
        placeholder="Example: For rent Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house..."
        value={adText}
        onChangeText={setAdText}
      />
    </View>
  );

  const renderDetailInput = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string = ""
  ) => (
    <View className="mb-4">
      <Text className="font-semibold mb-2">{label}</Text>
      <TextInput
        className="bg-gray-100 rounded-lg p-4"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );

  const renderSelectInput = (
    label: string,
    value: string,
    onPress: () => void
  ) => (
    <TouchableOpacity onPress={onPress} className="mb-4">
      <Text className="font-semibold mb-2">{label}</Text>
      <View className="bg-gray-100 rounded-lg p-4 flex-row justify-between items-center">
        <Text>{value || `Select ${label}`}</Text>
        <Ionicons name="chevron-down" size={24} color="gray" />
      </View>
    </TouchableOpacity>
  );

  const renderNumberInput = (
    label: string,
    value: number,
    onDecrease: () => void,
    onIncrease: () => void
  ) => (
    <View className="mb-4">
      <Text className="font-semibold mb-2">{label}</Text>
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={onDecrease}
          className="bg-gray-200 rounded-full w-8 h-8 items-center justify-center"
        >
          <Text className="text-2xl">-</Text>
        </TouchableOpacity>
        <Text className="mx-4 text-lg">{value}</Text>
        <TouchableOpacity
          onPress={onIncrease}
          className="bg-gray-200 rounded-full w-8 h-8 items-center justify-center"
        >
          <Text className="text-2xl">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFillDetailsForm = () => (
    <View>
      {renderSelectInput("Rent or Buy", adDetails.rentOrBuy, () => {
        /* Handle selection */
      })}
      {renderSelectInput("Types", adDetails.types, () => {
        /* Handle selection */
      })}
      {renderSelectInput("Status", adDetails.status, () => {
        /* Handle selection */
      })}
      {renderDetailInput(
        "Budget",
        adDetails.budget,
        (text) => setAdDetails({ ...adDetails, budget: text }),
        "30,000 EGP Monthly"
      )}
      {renderSelectInput("Locations", adDetails.locations.join(", "), () =>
        setShowLocationPicker(true)
      )}
      {renderNumberInput(
        "No. of Bedrooms",
        adDetails.bedrooms,
        () =>
          setAdDetails({
            ...adDetails,
            bedrooms: Math.max(0, adDetails.bedrooms - 1),
          }),
        () => setAdDetails({ ...adDetails, bedrooms: adDetails.bedrooms + 1 })
      )}
      {renderNumberInput(
        "No. of Bathrooms",
        adDetails.bathrooms,
        () =>
          setAdDetails({
            ...adDetails,
            bathrooms: Math.max(0, adDetails.bathrooms - 1),
          }),
        () => setAdDetails({ ...adDetails, bathrooms: adDetails.bathrooms + 1 })
      )}
      {renderDetailInput(
        "Duration",
        adDetails.duration,
        (text) => setAdDetails({ ...adDetails, duration: text }),
        "1 Month From 06-01-2024"
      )}
      {renderDetailInput(
        "Extra Details",
        adDetails.extraDetails,
        (text) => setAdDetails({ ...adDetails, extraDetails: text }),
        "Add any additional information here..."
      )}
    </View>
  );

  const renderHowItWorksModal = () => (
    <Modal visible={showHowItWorks} animationType="slide" transparent={true}>
      <View className="flex-1 bg-black bg-opacity-50 justify-end">
        <View className="bg-white rounded-t-3xl p-6">
          <Text className="text-2xl font-bold mb-4">How it works</Text>
          <Text className="text-lg mb-4">
            Step 1 - Paste Original Ad Text (English/عربي)
          </Text>
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text>
              Example: For rent Ground floor apartment 200 m2 in Eastown -
              Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the
              club house...
            </Text>
          </View>
          <Text className="text-lg mb-4">Step 2 - Edit AI-Formatted Table</Text>
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text>Details table will be generated here...</Text>
          </View>
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-lg"
            onPress={() => setShowHowItWorks(false)}
          >
            <Text className="text-white text-center font-bold">Got it</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const renderLocationPicker = () => (
    <Modal
      visible={showLocationPicker}
      animationType="slide"
      transparent={true}
    >
      <View className="flex-1 bg-white">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
          <Text className="text-xl font-bold">Select Locations</Text>
          <TouchableOpacity onPress={() => setShowLocationPicker(false)}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row border-b border-gray-200">
          <TouchableOpacity className="flex-1 py-2 border-b-2 border-blue-500">
            <Text className="text-center text-blue-500">City</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-2">
            <Text className="text-center text-gray-500">District</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-2">
            <Text className="text-center text-gray-500">Neighborhood</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="flex-1 p-4">
          {["Cairo", "Luxor", "Giza", "Mansoura", "Aswan"].map((city) => (
            <TouchableOpacity
              key={city}
              className="flex-row items-center py-2 border-b border-gray-200"
            >
              <Text>{city}</Text>
              <View className="ml-auto w-6 h-6 rounded-full border-2 border-blue-500" />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          className="bg-blue-500 m-4 py-3 rounded-lg"
          onPress={() => setShowLocationPicker(false)}
        >
          <Text className="text-white text-center font-bold">Select</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <TouchableOpacity className="mb-4">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-2xl font-bold mb-2">Create an Ad</Text>
      <Text className="text-gray-500 mb-4">
        New experience! save time & effort of searching
      </Text>
      {renderAdTypeSelector()}
      {renderVisibilitySelector()}
      {renderInputMethodSelector()}
      {inputMethod === "Paste Text"
        ? renderAdTextInput()
        : renderFillDetailsForm()}
      <TouchableOpacity
        className="bg-blue-500 py-3 rounded-lg mb-4"
        onPress={handleSubmitAd}
      >
        <Text className="text-white text-center font-bold">Submit Ad</Text>
      </TouchableOpacity>
      {renderHowItWorksModal()}
      {renderLocationPicker()}
    </ScrollView>
  );
};

export default CreateAdScreen;
