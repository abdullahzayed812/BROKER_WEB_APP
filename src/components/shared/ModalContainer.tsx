import React, { useRef } from "react";
import {
  View,
  Modal,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface ModalContainerProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number | string;
  isCloseIconVisible?: boolean;
  isModalCenter?: boolean;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  isVisible,
  onClose,
  children,
  width = "80%",
  isCloseIconVisible = true,
  isModalCenter,
}) => {
  const modalRef = useRef<View>(null);

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      {/* <TouchableWithoutFeedback onPress={onClose}> */}
      <View
        className={`flex-1 md:justify-center ${
          isModalCenter ? "justify-center" : "justify-end"
        } items-center`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        {/* <TouchableWithoutFeedback> */}
        <View
          className="bg-white rounded-3xl p-6 max-h-[90%] md:w-[90%] w-full"
          // style={{ width }}
        >
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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
        </View>
        {/* </TouchableWithoutFeedback> */}
        {/* </ScrollView> */}
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};
