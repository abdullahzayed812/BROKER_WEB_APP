import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { ModalContainer } from "../shared/ModalContainer"; // Assuming this is the path to your ModalContainer component

interface HowItWorksModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function HowItWorksModal({
  isVisible,
  onClose,
}: HowItWorksModalProps) {
  const [step, setStep] = useState(1);

  const renderStep2 = () => (
    <View className="p-4">
      <Text className="text-lg font-semibold mb-2">
        Step 2 - Paste Original Ad Text (English/عربي)
      </Text>
      <Image
        source={require("@/assets/images/content1.png")}
        className="w-full self-center h-[300px]"
        resizeMode="contain"
      />
    </View>
  );

  const renderStep1 = () => (
    <View className="p-4">
      <Text className="text-lg font-semibold mb-2">
        Step 2 - Edit AI-Formatted Table
      </Text>
      <Image
        source={require("@/assets/images/content2.png")}
        className="w-full self-center h-[300px]"
        resizeMode="contain"
      />
    </View>
  );

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <View className="bg-white rounded-t-3xl ">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
          <Text className="text-xl font-semibold">How it works</Text>
        </View>
        <ScrollView>{step === 1 ? renderStep1() : renderStep2()}</ScrollView>
        <View className="flex-row justify-between p-4 border-t border-gray-200">
          {step === 2 && (
            <TouchableOpacity
              onPress={() => setStep(1)}
              className="flex-1 px-4 py-2"
            >
              <Text className="text-blue-500 text-center font-semibold">
                Back
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              if (step === 1) setStep(2);
              else onClose();
            }}
            className="flex-1 bg-blue-500 px-4 py-2 rounded-lg ml-auto"
          >
            <Text className="text-white text-center font-semibold">
              {step === 1 ? "Next" : "Got it"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalContainer>
  );
}
