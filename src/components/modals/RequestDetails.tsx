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
            <Text className="md:w-full w-[180px] font-semibold text-md md:text-xl">
              {requestDetails.agent.name} @ {requestDetails.agent.company}
            </Text>

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

          <View className="w-[220px] flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text className="font-semibold">
                {requestDetails.agent.rating}
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="flex-row items-center">
                <Pressable
                  className="mr-2 flex-row items-center"
                  onPress={() => setShowReportBrokerModal(true)}
                >
                  <Ionicons name="flag-outline" size={18} color="#6B7280" />
                  <Text className="text-md ml-2">Report</Text>
                </Pressable>

                <Pressable
                  className="mr-2 flex-row items-center"
                  onPress={() => setShowRateModal(true)}
                >
                  <Ionicons name="star-outline" size={18} color="#6B7280" />
                  <Text className="text-md ml-2">Rate</Text>
                </Pressable>
              </View>
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
        className={`flex-1 py-2 px-4 ${
          viewMode === "text" ? "bg-white" : ""
        } items-center justify-center rounded-lg`}
      >
        <Text
          className={
            viewMode === "text"
              ? "text-blue-500 font-semibold md:text-base text-sm"
              : "text-gray-700 md:text-base text-sm"
          }
        >
          Text
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setViewMode("table")}
        className={`flex-1 py-2 px-4 ${
          viewMode === "table" ? "bg-white" : ""
        } items-center justify-center rounded-lg`}
      >
        <Text
          className={
            viewMode === "table"
              ? "text-blue-500 font-semibold md:text-base text-sm"
              : "text-gray-700 md:text-base text-sm"
          }
        >
          Table with AI
        </Text>
      </Pressable>
    </View>
  );

  const TextView = () => (
    <View>
      {/* <Text className="text-sm md:text-base text-gray-600 mb-4">
        Try out our new feature! Send a message to our WhatsApp number{" "}
        <Text className="text-green-500">+20 10 3000 4000</Text> to quickly post
        your request with our AI-powered text formatting.
      </Text> */}
      {/* <View className="bg-green-100 rounded-lg p-4 mb-4">
        <Text className="text-sm md:text-base">
          {requestDetails.property.description}
        </Text>
        <Text className="text-right text-gray-500 mt-2">10:10 PM ✓✓</Text>
      </View> */}
      <Image
        source={require("../../assets/images/message.png")}
        className="self-center"
      />
    </View>
  );

  const TableView = () => (
    <View>
      {/* <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
        <Ionicons
          name="information-circle-outline"
          size={20}
          color="#6B7280"
          className="mr-2"
        />
        <Text className="text-sm md:text-base text-gray-600">
          This formatted table was created from the original text sent to our
          WhatsApp number{" "}
          <Text className="text-green-500">+20 10 3000 4000</Text>, using our
          AI-powered formatting.
        </Text>
      </View> */}
      <View className="bg-blue-50 rounded-lg overflow-hidden mb-4">
        <View className="bg-blue-100 p-3">
          <Text className="font-semibold text-lg md:text-xl">Details</Text>
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
        <Text className="font-semibold text-lg md:text-xl mb-2">
          Extra Details
        </Text>
        <TextInput
          placeholder={extraDetails}
          multiline
          className="h-24 bg-gray-100 rounded-lg p-2"
        />
        {/* <View className="bg-white rounded-lg p-4 border border-gray-200">
          <Text className="text-gray-600">{extraDetails}</Text>
        </View> */}
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
      <View className="flex-row items-center">
        <Ionicons name={icon} size={24} color="#6B7280" />
        <Text className="text-gray-600 ml-3 w-32 md:text-base text-sm">
          {label}
        </Text>

        <View className="h-full w-1 mx-4 bg-white" />

        <View className="flex-1">
          {typeof value === "string" ? (
            <Text className="md:text-base text-sm">{value}</Text>
          ) : (
            value
          )}
        </View>
      </View>

      {label ? <View className="h-1 w-full my-4 bg-white" /> : null}
    </>
  );

  return (
    <>
      <ModalContainer isVisible={isVisible} onClose={onClose}>
        <View>
          <AgentInfo />
          <ToggleView />
          {viewMode === "text" ? <TextView /> : <TableView />}
          <View className="mt-6 flex-row justify-between">
            <Button
              onPress={onClose}
              classes="bg-primary_50 py-4 px-6 rounded-lg"
              textClasses="font-semibold"
              icon="arrow-left"
              iconColor="#0078FF"
            />
            <Button
              title="Call"
              onPress={() => console.log("Call")}
              classes="bg-green_50 py-4 px-6 rounded-lg"
              textClasses="text-green_500 font-semibold"
              icon="phone"
              iconColor="#50C36E"
            />
            <Button
              title="WhatsApp"
              onPress={() => setShowQuickMessageModal(true)}
              classes="bg-green_500 py-4 px-6 rounded-lg flex-row items-center"
              textClasses="text-white font-semibold mr-2"
              icon="whatsapp"
              iconColor="#FFF"
            />
          </View>
        </View>
      </ModalContainer>

      {showRateModal && (
        <RateBrokerModal
          isVisible={showRateModal}
          onClose={() => setShowRateModal(false)}
          onConfirm={function (rating: number, comment: string): void {
            throw new Error("Function not implemented.");
          }}
          onReportIssue={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}

      {showQuickMessageModal ? (
        <QuickMessageModal
          isVisible={showQuickMessageModal}
          onClose={() => setShowQuickMessageModal(false)}
        />
      ) : null}

      {showReportBrokerModal && (
        <ReportBrokerModal
          isVisible={showReportBrokerModal}
          onClose={() => setShowReportBrokerModal(false)}
          onConfirm={function (issue: string, otherDetails?: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </>
  );
};
