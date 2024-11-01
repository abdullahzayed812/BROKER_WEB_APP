import React, { useRef, useState } from "react";
import { View, Modal, ScrollView, TouchableOpacityBase } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Button } from "./Button";
import { QuickMessageModal } from "../modals/QuickMessage";

interface ModalContainerProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number | string;
  isCloseIconVisible?: boolean;
  isModalCenter?: boolean;
  isRequestDetails?: boolean;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  isVisible,
  onClose,
  children,
  width = "80%",
  isCloseIconVisible = true,
  isModalCenter,
  isRequestDetails,
}) => {
  const modalRef = useRef<View>(null);
  const [showQuickMessageModal, setShowQuickMessageModal] = useState(false);

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View
        className={`flex-1 md:justify-center ${
          isModalCenter ? "justify-center" : "justify-end"
        } items-center`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <View className="bg-white rounded-tl-3xl rounded-tr-3xl p-6 max-h-[90%] md:w-[90%] w-full">
          {isCloseIconVisible ? (
            <TouchableOpacity
              onPress={onClose}
              className="absolute top-6 right-6 z-10"
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          ) : null}

          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>

          {isRequestDetails ? (
            <>
              <View className="absolute bottom-0 w-full flex-row items-center justify-between py-3 self-center bg-white">
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

              {showQuickMessageModal ? (
                <QuickMessageModal
                  isVisible={showQuickMessageModal}
                  onClose={() => setShowQuickMessageModal(false)}
                />
              ) : null}
            </>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};
