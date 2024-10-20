import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ModalContainer } from "../shared/ModalContainer";
import { Button } from "../shared/Button";
import { RateBrokerModal } from "./RateBroker";
import { ReportBrokerModal } from "./ReportBroker";

interface RequestDetailsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const requestDetails = {
  agent: {
    name: "Ahmed Radwan",
    company: "Coldwill Banker",
    rating: 4.5,
    image: "/placeholder.svg?height=48&width=48",
  },
  property: {
    rentOrBuy: "Rent",
    stayType: "Long Stay",
    propertyTypes: "Apartment/Villa",
    status: "Furnished",
    budget: "~ 30,000 EGP",
    budgetType: "Monthly",
    locations: ["Zamalek, Cairo", "Nasr City, Cairo", "New Cairo, Cairo"],
    bedrooms: "1 Bedroom",
    bathrooms: "1 Bathroom",
    duration: "1 Month from 06-01-2024",
    description: `For rent Ground floor apartment 200 m2 in Eastown - Sodic, 3 mins to gate 1 (monorail station) and 2 minutes to the club house...`,
  },
  matchedProperties: [
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
  ],
};

export const RequestDetailsModal: React.FC<RequestDetailsModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [viewMode, setViewMode] = useState<"text" | "table">("table");
  const [extraDetails, setExtraDetails] = useState(
    requestDetails.property.description
  );

  const [showRateModal, setShowRateModal] = useState(false);
  const [showReportBrokerModal, setShowReportBrokerModal] = useState(false);

  const AgentInfo = () => (
    <View className="flex-row items-center justify-between mb-4">
      <View className="flex-row items-center">
        <Image
          source={{ uri: requestDetails.agent.image }}
          className="w-12 h-12 rounded-full mr-3"
        />
        <View>
          <Text className="font-semibold text-lg">
            {requestDetails.agent.name} @ {requestDetails.agent.company}
          </Text>
          <View className="flex-row items-center">
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text className="ml-1 font-semibold">
              {requestDetails.agent.rating}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center">
        <Text className="text-gray-500 mr-2">1d</Text>
        <Pressable className="mr-2" onPress={() => setShowRateModal(true)}>
          <Ionicons name="star-outline" size={24} color="#6B7280" />
        </Pressable>
        <Pressable
          className="mr-2"
          onPress={() => setShowReportBrokerModal(true)}
        >
          <Ionicons name="chatbubble-outline" size={24} color="#6B7280" />
        </Pressable>
        <Pressable>
          <Ionicons name="share-social-outline" size={24} color="#6B7280" />
        </Pressable>
      </View>
    </View>
  );

  const ToggleView = () => (
    <View className="flex-row mb-4 bg-gray-100 rounded-full p-1">
      <Pressable
        onPress={() => setViewMode("text")}
        className={`flex-1 py-2 px-4 ${
          viewMode === "text" ? "bg-white" : ""
        } items-center justify-center rounded-full`}
      >
        <Text
          className={
            viewMode === "text"
              ? "text-blue-500 font-semibold"
              : "text-gray-700"
          }
        >
          Text
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setViewMode("table")}
        className={`flex-1 py-2 px-4 ${
          viewMode === "table" ? "bg-white" : ""
        } items-center justify-center rounded-full`}
      >
        <Text
          className={
            viewMode === "table"
              ? "text-blue-500 font-semibold"
              : "text-gray-700"
          }
        >
          Table with AI
        </Text>
      </Pressable>
    </View>
  );

  const TextView = () => (
    <View>
      <Text className="text-sm text-gray-600 mb-4">
        Try out our new feature! Send a message to our WhatsApp number{" "}
        <Text className="text-green-500">+20 10 3000 4000</Text> to quickly post
        your request with our AI-powered text formatting.
      </Text>
      <View className="bg-green-100 rounded-lg p-4 mb-4">
        <Text className="text-sm">{requestDetails.property.description}</Text>
        <Text className="text-right text-gray-500 mt-2">10:10 PM ✓✓</Text>
      </View>
    </View>
  );

  const TableView = () => (
    <View>
      <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
        <Ionicons
          name="information-circle-outline"
          size={20}
          color="#6B7280"
          className="mr-2"
        />
        <Text className="text-sm text-gray-600">
          This formatted table was created from the original text sent to our
          WhatsApp number{" "}
          <Text className="text-green-500">+20 10 3000 4000</Text>, using our
          AI-powered formatting.
        </Text>
      </View>
      <View className="bg-blue-50 rounded-lg overflow-hidden mb-4">
        <View className="bg-blue-100 p-3">
          <Text className="font-semibold text-lg">Details</Text>
        </View>
        <View className="p-4">
          <TableRow
            icon="business-outline"
            label="Rent or Buy"
            value={
              <View className="flex-row">
                <Text className="bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2">
                  {requestDetails.property.rentOrBuy}
                </Text>
                <Text className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {requestDetails.property.stayType}
                </Text>
              </View>
            }
          />
          <TableRow
            icon="home-outline"
            label="Property Types"
            value={requestDetails.property.propertyTypes}
          />
          <TableRow
            icon="checkmark-circle-outline"
            label="Property Status"
            value={requestDetails.property.status}
          />
          <TableRow
            icon="cash-outline"
            label="Budget"
            value={
              <Text>
                <Text className="text-blue-500 font-semibold">
                  {requestDetails.property.budget}
                </Text>{" "}
                {requestDetails.property.budgetType}
              </Text>
            }
          />
          <TableRow
            icon="location-outline"
            label="Locations"
            value={
              <View className="flex-row flex-wrap">
                {requestDetails.property.locations.map((location, index) => (
                  <Text
                    key={index}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2 mb-2"
                  >
                    {location}
                  </Text>
                ))}
              </View>
            }
          />
          <TableRow
            icon="bed-outline"
            label="Min no. of Bedrooms"
            value={requestDetails.property.bedrooms}
          />
          <TableRow
            icon="water-outline"
            label="Min no. of Bathrooms"
            value={requestDetails.property.bathrooms}
          />
          <TableRow
            icon="time-outline"
            label="Duration"
            value={requestDetails.property.duration}
          />
        </View>
      </View>
      <View className="mb-4">
        <Text className="font-semibold text-lg mb-2">Extra Details</Text>
        <View className="bg-white rounded-lg p-4 border border-gray-200">
          <Text className="text-gray-600">{extraDetails}</Text>
        </View>
      </View>
      <View className="mb-4">
        <Text className="font-semibold text-lg mb-2">5 Matched Properties</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {requestDetails.matchedProperties.map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              className="w-20 h-20 rounded-lg mr-2"
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );

  const TableRow = ({ icon, label, value }) => (
    <View className="flex-row items-center mb-4">
      <Ionicons name={icon} size={24} color="#6B7280" />
      <Text className="text-gray-600 ml-3 w-32">{label}</Text>
      <View className="flex-1">
        {typeof value === "string" ? <Text>{value}</Text> : value}
      </View>
    </View>
  );

  return (
    <>
      <ModalContainer isVisible={isVisible} onClose={onClose}>
        <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
          <View className="p-4">
            <AgentInfo />
            <ToggleView />
            {viewMode === "text" ? <TextView /> : <TableView />}
            <View className="mt-6 flex-row justify-between">
              <Button
                title="← Back"
                onPress={onClose}
                classes="bg-blue-100 py-3 px-6 rounded-full"
                textClasses="text-blue-600 font-semibold"
              />
              <Button
                title="Call"
                onPress={() => console.log("Call")}
                classes="bg-gray-200 py-3 px-6 rounded-full"
                textClasses="text-gray-700 font-semibold"
              />
              <Button
                title="WhatsApp"
                onPress={() => console.log("WhatsApp")}
                classes="bg-green-500 py-3 px-6 rounded-full flex-row items-center"
                textClasses="text-white font-semibold mr-2"
                //   icon={<Ionicons name="logo-whatsapp" size={20} color="white" />}
              />
            </View>
          </View>
        </ScrollView>
      </ModalContainer>

      {showRateModal ? (
        <RateBrokerModal
          isVisible={showRateModal}
          onClose={() => setShowRateModal(false)}
          broker={{
            name: "Ahmed Radwan",
            company: "Almansoura",
            rating: 0,
            image: "",
          }}
        />
      ) : null}

      {showReportBrokerModal ? (
        <ReportBrokerModal
          isVisible={showReportBrokerModal}
          onClose={() => setShowReportBrokerModal(false)}
          broker={{
            name: "Zoo Doo",
            company: "Alex",
            rating: 0,
            image: "",
          }}
        />
      ) : null}
    </>
  );
};
