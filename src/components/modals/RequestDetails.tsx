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
import { QuickMessageModal } from "./QuickMessage";

interface RequestDetailsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const requestDetails = {
  agent: {
    name: "Ahmed Radwan",
    company: "Coldwill Banker",
    rating: 4.5,
    image: "../../assets/image/userImage.png",
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
  const [viewMode, setViewMode] = useState<"text" | "table">("text");
  const [extraDetails, setExtraDetails] = useState(
    requestDetails.property.description
  );
  const [showRateModal, setShowRateModal] = useState(false);
  const [showReportBrokerModal, setShowReportBrokerModal] = useState(false);
  const [showQuickMessageModal, setShowQuickMessageModal] = useState(false);

  const AgentInfo = () => (
    <View className="flex-row items-center justify-between mb-4 mt-8">
      <View className="flex-row items-center">
        <Image
          source={require("../../assets/images/userImage.png")}
          className="w-12 h-12 rounded-full mr-3"
        />
        <View className="md:w-[400px] flex-1">
          <View className="flex-row justify-between items-start">
            <View className="flex-row items-start">
              <Text className="md:w-full font-semibold text-md md:text-xl">
                {[
                  requestDetails.agent.name,
                  " @ ",
                  requestDetails.agent.company,
                ]
                  .join("")
                  .substring(0, 7)}
                ...
              </Text>

              <View className="flex-row items-center ml-3">
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text className="font-semibold">
                  {requestDetails.agent.rating}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center" style={{ gap: 8 }}>
              <Text className="text-gray-500">1d</Text>

              <Pressable onPress={() => {}}>
                <Ionicons name="star-outline" size={18} color="#6B7280" />
              </Pressable>

              <Pressable>
                <Ionicons
                  name="share-social-outline"
                  size={24}
                  color="#6B7280"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const ToggleView = () => (
    <View className="flex-row mb-4 bg-blue-50 rounded-lg mt-6 p-1">
      <Pressable
        onPress={() => setViewMode("text")}
        className={`flex-1 p-4 ${
          viewMode === "text" ? "bg-white" : ""
        } items-center justify-center rounded-lg`}
      >
        <Text
          className={
            viewMode === "text"
              ? "text-blue-500 font-semibold md:text-base text-md"
              : "text-gray-700 md:text-base text-md"
          }
        >
          Text
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setViewMode("table")}
        className={`flex-1 p-4 ${
          viewMode === "table" ? "bg-white" : ""
        } items-center justify-center rounded-lg`}
      >
        <Text
          className={
            viewMode === "table"
              ? "text-blue-500 font-semibold md:text-base text-md"
              : "text-gray-700 md:text-base text-md"
          }
        >
          Table with AI
        </Text>
      </Pressable>
    </View>
  );

  const TextView = () => (
    <View>
      <Image
        source={require("../../assets/images/message.png")}
        className="self-center"
      />
    </View>
  );

  const TableView = () => (
    <View>
      <View className="rounded-lg overflow-hidden mb-4">
        <View className="bg-primary_50 p-3">
          <Text className="font-semibold text-lg md:text-xl">Details</Text>
        </View>
        <View className="">
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
        <Text className="font-semibold text-lg md:text-xl mb-2">
          Extra Details
        </Text>
        <TextInput
          placeholder={extraDetails}
          multiline
          className="h-24 bg-gray-100 rounded-lg p-2"
        />
      </View>
      <View className="mb-4">
        <Text className="font-semibold text-lg md:text-xl mb-2">
          5 Matched Properties
        </Text>
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
    <>
      <View className="flex-row items-center border-b pl-2 border-b-gray_200">
        <View className="flex-row items-center py-3">
          <Ionicons name={icon} size={24} color="#6B7280" />
          <Text className="text-gray-600 ml-3 w-32 md:text-base text-sm">
            {label}
          </Text>
        </View>

        <View className="h-full w-1 bg-gray_200 mr-4" />

        <View className="flex-1 py-3">
          {typeof value === "string" ? (
            <Text className="md:text-base text-sm">{value}</Text>
          ) : (
            value
          )}
        </View>
      </View>
    </>
  );

  return (
    <>
      <ModalContainer isVisible={isVisible} onClose={onClose} isRequestDetails>
        <View className="pb-20">
          <AgentInfo />
          <ToggleView />
          {viewMode === "text" ? <TextView /> : <TableView />}
        </View>
      </ModalContainer>

      {showRateModal && (
        <RateBrokerModal
          isVisible={showRateModal}
          onClose={() => setShowRateModal(false)}
          onConfirm={function (rating: number, comment: string): void {}}
          onReportIssue={function (): void {}}
        />
      )}

      {showReportBrokerModal && (
        <ReportBrokerModal
          isVisible={showReportBrokerModal}
          onClose={() => setShowReportBrokerModal(false)}
          onConfirm={function (issue: string, otherDetails?: string): void {}}
        />
      )}
    </>
  );
};
