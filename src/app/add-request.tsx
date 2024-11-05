import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import GenericDropdown from "@/components/shared/GenericDropdown";
import { router } from "expo-router";

interface ListingType {
  id: string;
  icon: string;
  title: string;
}

export default function CreateListing() {
  const [selectedType, setSelectedType] = useState<string>("property");
  const [activeTab, setActiveTab] = useState<"whatsapp" | "form">("form");
  const [formData, setFormData] = useState({
    dealType: "Side-by-Side",
    rentOrBuy: "Rent or Buy",
    types: "Apartment",
    status: "Furnished",
    budget: "30K EGP",
  });

  const listingTypes: ListingType[] = [
    {
      id: "request",
      icon: "search",
      title: "List a Request",
    },
    {
      id: "property",
      icon: "home",
      title: "List a Property",
    },
  ];

  const renderFormContent = () => (
    <View className="mt-4">
      <View className="bg-blue-50/50 p-3 rounded-lg mb-4">
        <Text className="text-gray-700 font-medium">Details</Text>
      </View>

      <View>
        {/* Deal Type Row */}
        <View className="flex-row items-center p-3 border-b border-gray-200">
          <Ionicons
            name="diamond-outline"
            size={24}
            color="#666666"
            className="mr-3"
          />
          <GenericDropdown
            label="Deal Type"
            options={["Side-by-Side", "Option 2", "Option 3"]}
            selectedValue={formData.dealType}
            onSelect={(value) =>
              setFormData((prev) => ({ ...prev, dealType: value }))
            }
          />
        </View>

        {/* Rent or Buy Row */}
        <View className="flex-row items-center p-3 border-b border-gray-200">
          <Ionicons
            name="business-outline"
            size={24}
            color="#666666"
            className="mr-3"
          />
          <GenericDropdown
            label="Rent or Buy"
            options={["Rent or Buy", "Rent", "Buy"]}
            selectedValue={formData.rentOrBuy}
            onSelect={(value) =>
              setFormData((prev) => ({ ...prev, rentOrBuy: value }))
            }
          />
        </View>

        {/* Types Row */}
        <View className="flex-row items-center p-3 border-b border-gray-200">
          <Ionicons
            name="home-outline"
            size={24}
            color="#666666"
            className="mr-3"
          />
          <GenericDropdown
            label="Types"
            options={["Apartment", "Villa", "Studio", "Duplex"]}
            selectedValue={formData.types}
            onSelect={(value) =>
              setFormData((prev) => ({ ...prev, types: value }))
            }
          />
        </View>

        {/* Status Row */}
        <View className="flex-row items-center p-3 border-b border-gray-200">
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="#666666"
            className="mr-3"
          />
          <GenericDropdown
            label="Status"
            options={["Furnished", "Unfurnished", "Semi-Furnished"]}
            selectedValue={formData.status}
            onSelect={(value) =>
              setFormData((prev) => ({ ...prev, status: value }))
            }
          />
        </View>

        {/* Budget Row */}
        <View className="flex-row items-center p-3 border-b border-gray-200">
          <Ionicons
            name="wallet-outline"
            size={24}
            color="#666666"
            className="mr-3"
          />
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-md font-medium text-gray-700">Budget</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-900">30K EGP</Text>
              <Text className="text-gray-500 ml-1">Monthly</Text>
              <TouchableOpacity className="ml-2">
                <Ionicons name="create-outline" size={20} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      {/* <StatusBar style="dark" /> */}

      {/* Header */}
      <View className="px-4 py-2 flex-row items-center">
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Title Section */}
        <View className="mt-2 mb-6">
          <Text className="text-[20px] font-semibold text-[#333333]">
            Create a Listing
          </Text>
          <Text className="text-[#666666] text-lg mt-1">
            New experience! save time & effort of searching
          </Text>
        </View>

        {/* Step 1 */}
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
          <Text className="text-xl font-medium mb-1">
            Step 1: <Text className="text-gray-600">Choose Listing Type</Text>
          </Text>

          {listingTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              className="flex-row items-center mt-4"
              onPress={() => setSelectedType(type.id)}
            >
              <View className="w-6 h-6 rounded-full border-2 border-[#0066FF] mr-3 items-center justify-center">
                {selectedType === type.id && (
                  <View className="w-3.5 h-3.5 rounded-full bg-[#0066FF]" />
                )}
              </View>
              <View className="flex-row items-center">
                <Ionicons
                  name={type.icon as any}
                  size={24}
                  color={selectedType === type.id ? "#0066FF" : "#666666"}
                />
                <Text
                  className={`ml-2 text-lg ${
                    selectedType === type.id
                      ? "text-[#0066FF]"
                      : "text-gray-600"
                  }`}
                >
                  {type.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Step 2 */}
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
          <Text className="text-xl font-medium mb-1">
            Step 2: <Text className="text-gray-600">Create Your Listing</Text>
          </Text>

          {/* Toggle Buttons */}
          <View className="flex-row p-1 mt-4 mb-6 rounded-lg bg-gray_50">
            <TouchableOpacity
              className={`flex-1 py-3  rounded-lg ${
                activeTab === "whatsapp" ? "bg-white" : "bg-gray-100"
              }`}
              onPress={() => setActiveTab("whatsapp")}
            >
              <Text
                className={`text-center font-medium ${
                  activeTab === "whatsapp" ? "text-[#0066FF]" : "text-gray-600"
                }`}
              >
                Paste WhatsApp
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 rounded-lg ${
                activeTab === "form" ? "bg-white" : "bg-gray-100"
              }`}
              onPress={() => setActiveTab("form")}
            >
              <Text
                className={`text-center font-medium ${
                  activeTab === "form" ? "text-[#0066FF]" : "text-gray-600"
                }`}
              >
                Fill Form
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === "whatsapp" ? (
            <>
              <View className="mb-2 flex-row justify-between items-center">
                <Text className="text-lg text-gray-600">
                  Paste WhatsApp message
                </Text>
                <TouchableOpacity className="flex-row items-center">
                  <Text className="text-[#0066FF] mr-1">How it works</Text>
                  <Ionicons name="help-circle" size={16} color="#0066FF" />
                </TouchableOpacity>
              </View>

              <TextInput
                className="border border-gray-200 rounded-xl p-4 min-h-[120px] text-gray-600"
                multiline
                placeholder="Example: For sale Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house..."
                placeholderTextColor="#999999"
                textAlignVertical="top"
              />
            </>
          ) : (
            renderFormContent()
          )}
        </View>

        {/* Next Button */}
        <TouchableOpacity
          className="bg-[#0066FF] rounded-xl py-4 mb-6"
          onPress={() => router.navigate("/generated-form")}
        >
          <Text className="text-white text-center text-lg font-medium">
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
