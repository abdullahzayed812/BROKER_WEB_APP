import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReportModal from "./ReportModal";
import RateModal from "./RateModal";
import WhatsAppModal from "./WhatsAppModal";

export interface Property {
  id: string;
  type: string;
  location: string;
  price: string;
  paymentType: string;
  bedrooms: number;
  bathrooms: number;
  tags: string[];
  agent: {
    name: string;
    company: string;
    avatar: string;
    rating: number;
  };
  extraDetails: string;
  matchedProperties: string[];
}

interface PropertyModalProps {
  isVisible: boolean;
  onClose: () => void;
  property: Property;
}

const PropertyModal: React.FC<PropertyModalProps> = ({
  isVisible,
  onClose,
  property,
}) => {
  const [activeTab, setActiveTab] = useState<"text" | "table">("table");
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isRateModalVisible, setIsRateModalVisible] = useState(false);
  const [isWhatsAppModalVisible, setIsWhatsAppModalVisible] = useState(false);

  const handleReport = (issue: string, details: string) => {
    console.log("Reported issue:", issue, details);
    setIsReportModalVisible(false);
  };

  const handleRate = (rating: number, comment: string) => {
    console.log("Rated:", rating, comment);
    setIsRateModalVisible(false);
  };

  const handleWhatsAppSend = (message: string) => {
    console.log("WhatsApp message:", message);
    setIsWhatsAppModalVisible(false);
  };

  const renderTextView = () => (
    <View className="bg-green-100 p-4 rounded-lg my-4">
      <Text className="text-green-800">{property.extraDetails}</Text>
      <Text className="text-gray-500 text-right">10:10 PM ✓</Text>
    </View>
  );

  const renderTableView = () => (
    <View className="bg-white p-4 rounded-lg my-4">
      <View className="mb-4">
        <Text className="font-bold text-lg mb-2">Details</Text>
        {[
          { label: "Type", value: property.type },
          { label: "Location", value: property.location },
          { label: "Price", value: property.price },
          { label: "Payment Type", value: property.paymentType },
          { label: "Bedrooms", value: property.bedrooms },
          { label: "Bathrooms", value: property.bathrooms },
        ].map(({ label, value }) => (
          <View
            key={label}
            className="flex-row justify-between py-2 border-b border-gray-200"
          >
            <Text className="text-gray-600">{label}</Text>
            <Text className="font-semibold">{value}</Text>
          </View>
        ))}
      </View>
      <View className="mb-4">
        <Text className="font-bold text-lg mb-2">Extra Details</Text>
        <Text className="text-gray-600">{property.extraDetails}</Text>
      </View>
    </View>
  );

  const renderMatchedProperties = () => (
    <View className="mb-4">
      <Text className="font-bold text-lg mb-2">5 Matched Properties</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {property.matchedProperties.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            className="w-20 h-20 rounded-lg mr-2"
          />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black bg-opacity-50 justify-end">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-t-3xl p-4 h-5/6">
              <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                  <Image
                    source={{ uri: property.agent.avatar }}
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  <View>
                    <Text className="font-bold">{property.agent.name}</Text>
                    <Text className="text-gray-600">
                      {property.agent.company}
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="star" size={16} color="gold" />
                  <Text className="ml-1">{property.agent.rating}</Text>
                </View>
              </View>

              <View className="flex-row mb-4">
                <TouchableOpacity
                  onPress={() => setActiveTab("text")}
                  className={`flex-1 py-2 ${
                    activeTab === "text" ? "bg-blue-100" : "bg-gray-100"
                  } rounded-l-full`}
                >
                  <Text className="text-center">Text</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab("table")}
                  className={`flex-1 py-2 ${
                    activeTab === "table" ? "bg-blue-100" : "bg-gray-100"
                  } rounded-r-full`}
                >
                  <Text className="text-center">Table with AI</Text>
                </TouchableOpacity>
              </View>

              <ScrollView>
                {activeTab === "text" ? renderTextView() : renderTableView()}
                {renderMatchedProperties()}
              </ScrollView>

              <View className="flex-row justify-between mt-4">
                <TouchableOpacity
                  onPress={onClose}
                  className="bg-gray-200 px-6 py-3 rounded-full"
                >
                  <Text>← Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsRateModalVisible(true)}
                  className="bg-gray-200 px-6 py-3 rounded-full"
                >
                  <Text>Rate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsWhatsAppModalVisible(true)}
                  className="bg-green-500 px-6 py-3 rounded-full"
                >
                  <Text className="text-white">WhatsApp</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      <ReportModal
        isVisible={isReportModalVisible}
        onClose={() => setIsReportModalVisible(false)}
        onSubmit={handleReport}
      />
      <RateModal
        isVisible={isRateModalVisible}
        onClose={() => setIsRateModalVisible(false)}
        onSubmit={handleRate}
      />
      <WhatsAppModal
        isVisible={isWhatsAppModalVisible}
        onClose={() => setIsWhatsAppModalVisible(false)}
        onSend={handleWhatsAppSend}
      />
    </Modal>
  );
};

export default PropertyModal;
