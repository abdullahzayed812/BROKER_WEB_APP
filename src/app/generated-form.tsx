import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GenericDropdown from "@/components/shared/GenericDropdown";

interface FormData {
  dealType: string;
  rentOrBuy: string;
  types: string;
  status: string;
  budget: string;
  locations: string[];
  bedrooms: number;
}

export default function CreateAdTable() {
  const [formData, setFormData] = useState<FormData>({
    dealType: "Side-by-Side",
    rentOrBuy: "Rent or Buy",
    types: "",
    status: "Furnished",
    budget: "30K EGP",
    locations: ["Cairo, Zamalek", "Cairo, Zamalek", "Cairo, Zamalek"],
    bedrooms: 3,
  });

  const renderTableRow = (
    icon: any,
    label: string,
    content: React.ReactNode,
    showInfoIcon?: boolean,
    showEditIcon?: boolean
  ) => (
    <View className="flex-row items-center border-b border-gray-100 py-4">
      <View className="flex-row items-center w-1/3">
        <Ionicons name={icon} size={24} color="#666666" className="mr-2" />
        <Text className="text-gray-600 text-lg">{label}</Text>
        {showInfoIcon && (
          <TouchableOpacity className="ml-1">
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#666666"
            />
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-1 flex-row items-center justify-between">
        {content}
        {showEditIcon && (
          <TouchableOpacity className="ml-2">
            <Ionicons name="create-outline" size={20} color="#666666" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View className="bg-white rounded-lg">
      {renderTableRow(
        "diamond-outline",
        "Deal Type",
        <GenericDropdown
          label="Deal Type"
          options={["Side-by-Side", "Option 2", "Option 3"]}
          selectedValue={formData.dealType}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, dealType: value }))
          }
        />,
        true
      )}

      {renderTableRow(
        "business-outline",
        "Rent or Buy",
        <GenericDropdown
          label="Rent or Buy"
          options={["Rent or Buy", "Rent", "Buy"]}
          selectedValue={formData.rentOrBuy}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, rentOrBuy: value }))
          }
        />
      )}

      {renderTableRow(
        "home-outline",
        "Types",
        <GenericDropdown
          label="Types"
          options={["Apartment", "Villa", "Studio"]}
          selectedValue={formData.types}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, types: value }))
          }
          placeholder="Select"
        />
      )}

      {renderTableRow(
        "information-circle-outline",
        "Status",
        <GenericDropdown
          label="Status"
          options={["Furnished", "Unfurnished", "Semi-Furnished"]}
          selectedValue={formData.status}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, status: value }))
          }
        />
      )}

      {renderTableRow(
        "wallet-outline",
        "Budget",
        <View className="flex-row items-center">
          <Text className="text-gray-900 text-lg">{formData.budget}</Text>
          <Text className="text-gray-400 ml-2">Monthly</Text>
        </View>,
        false,
        true
      )}

      {renderTableRow(
        "location-outline",
        "Locations",
        <View className="flex-wrap flex-row gap-2">
          {formData.locations.map((location, index) => (
            <View key={index} className="bg-gray-100 px-3 py-1 rounded-full">
              <Text className="text-gray-600">{location}</Text>
            </View>
          ))}
        </View>
      )}

      {renderTableRow(
        "bed-outline",
        "Bedrooms",
        <View className="flex-row items-center">
          <TouchableOpacity
            className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center"
            onPress={() =>
              setFormData((prev) => ({
                ...prev,
                bedrooms: Math.max(0, prev.bedrooms - 1),
              }))
            }
          >
            <Text className="text-xl">-</Text>
          </TouchableOpacity>
          <Text className="mx-4 text-lg">{formData.bedrooms}</Text>
          <TouchableOpacity
            className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center"
            onPress={() =>
              setFormData((prev) => ({ ...prev, bedrooms: prev.bedrooms + 1 }))
            }
          >
            <Text className="text-xl">+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
