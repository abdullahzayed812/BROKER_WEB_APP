import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GenericDropdown from "@/components/shared/GenericDropdown";
import HowItWorksModal from "@/components/modals/HowItWorks";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CreateAdPage() {
  const [adType, setAdType] = useState<"Request" | "Inventory">("Request");
  const [visibility, setVisibility] = useState<"Internal" | "Public">(
    "Internal"
  );
  const [adMethod, setAdMethod] = useState<"Paste Text" | "Fill Details">(
    "Paste Text"
  );
  const [adText, setAdText] = useState("");
  const [rentOrBuy, setRentOrBuy] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [status, setStatus] = useState("Furnished");
  const [budget, setBudget] = useState("30,000 EGP Monthly");
  const [locations, setLocations] = useState([
    "Cairo, Zamalek",
    "Cairo, Zamalek",
    "Cairo, Zamalek",
  ]);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(1);
  const [duration, setDuration] = useState("1 Month\nFrom 06-01-2024");
  const [extraDetails, setExtraDetails] = useState("");
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);

  const rentOrBuyOptions = ["Rent", "Buy"];
  const typeOptions = ["Apartment", "Villa", "Duplex", "Studio", "Townhouse"];
  const statusOptions = ["Furnished", "Not Furnished", "Empty"];

  const RadioButton = ({ selected }: { selected: boolean }) => (
    <View
      className={`w-5 h-5 rounded-full border-2 ${
        selected ? "bg-blue-500 border-blue-500" : "border-gray-300"
      } justify-center items-center`}
    >
      {selected && <View className="w-2 h-2 rounded-full bg-white" />}
    </View>
  );

  return (
    <ScrollView>
      <View className="p-4 bg-white">
        {/* Header */}

        <View className="md:w-[50%] md:self-start">
          {/* Ad Type Selection */}
          <Text className="font-semibold text-lg text-gray-600 my-4">
            Ad Type
          </Text>
          <View className="flex-row bg-blue-100 rounded-lg p-1 mb-6">
            <TouchableOpacity
              className={`flex-1 py-2 rounded-md ${
                adType === "Request" ? "bg-white" : ""
              }`}
              onPress={() => setAdType("Request")}
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
              className={`flex-1 py-2 rounded-md ${
                adType === "Inventory" ? "bg-white" : ""
              }`}
              onPress={() => setAdType("Inventory")}
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

          {/* Visibility Options */}
          <Text className="mb-2">Show as</Text>
          <View className="flex-row mb-6">
            <TouchableOpacity
              className="flex-row items-center mr-6"
              onPress={() => setVisibility("Internal")}
            >
              <RadioButton selected={visibility === "Internal"} />
              <Text className="ml-2">Internal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setVisibility("Public")}
            >
              <RadioButton selected={visibility === "Public"} />
              <Text className="ml-2">Public</Text>
            </TouchableOpacity>
          </View>

          {/* Ad Creation Method */}
          <Text className="mb-2">How do you want to add your Ad?</Text>
          <View className="flex-row mb-6">
            <TouchableOpacity
              className="flex-row items-center mr-6"
              onPress={() => setAdMethod("Paste Text")}
            >
              <RadioButton selected={adMethod === "Paste Text"} />
              <Text className="ml-2">Paste Text</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setAdMethod("Fill Details")}
            >
              <RadioButton selected={adMethod === "Fill Details"} />
              <Text className="ml-2">Fill Details</Text>
            </TouchableOpacity>
          </View>

          {/* Paste Text Area */}
          <View className="mb-6">
            <View className="flex-row justify-between mb-2">
              <Text>Paste Text (English/عربي)</Text>
              <TouchableOpacity onPress={() => setShowHowItWorksModal(true)}>
                <Text className="text-blue-500">How it works</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {showHowItWorksModal ? (
          <HowItWorksModal
            isVisible={showHowItWorksModal}
            onClose={() => setShowHowItWorksModal(false)}
          />
        ) : null}

        {adMethod === "Paste Text" ? (
          <Image
            source={require("../assets/images/message.png")}
            className="my-4 self-center"
          />
        ) : (
          <View className="md:w-[50%] md:self-end">
            {/* Details Section */}
            <View className="bg-white rounded-lg mb-6">
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
                      <Text className="text-primary_500">{location}</Text>
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
                    <Ionicons
                      name="remove-circle-outline"
                      size={24}
                      color="gray"
                    />
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
                    <Ionicons
                      name="remove-circle-outline"
                      size={24}
                      color="gray"
                    />
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

            {/* Extra Details */}
            <View className="mb-6">
              <Text className="font-semibold mb-2">Extra Details</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-2 h-24"
                multiline
                placeholder="Enter additional details about your ad..."
                value={extraDetails}
                onChangeText={setExtraDetails}
              />
            </View>

            {/* Submit Button */}
            <View>
              <TouchableOpacity className="bg-blue-500 py-4 rounded-lg items-center">
                <Text className="text-white text-lg font-semibold">
                  Create Ad
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
