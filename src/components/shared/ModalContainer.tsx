import React, { useRef } from "react";
import {
  View,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  Dimensions,
  GestureResponderEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ModalContainerProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number | string;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  isVisible,
  onClose,
  children,
  width = "80%",
}) => {
  const modalRef = useRef<View>(null);

  const handleOutsideClick = (event: GestureResponderEvent) => {
    if (modalRef.current) {
      modalRef.current.measure((fx, fy, width, height, px, py) => {
        // Check if the touch point is outside the modal's bounds
        const isInside =
          event.nativeEvent.pageX >= px &&
          event.nativeEvent.pageX <= px + width &&
          event.nativeEvent.pageY >= py &&
          event.nativeEvent.pageY <= py + height;

        if (!isInside) {
          onClose();
        }
      });
    }
  };

  const modalWidth =
    typeof width === "number"
      ? width
      : Dimensions.get("window").width * (parseInt(width) / 100);

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={handleOutsideClick}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View
            ref={modalRef}
            style={{ width: modalWidth }}
            className="bg-white rounded-3xl p-6 max-h-[90%]"
          >
            <Pressable onPress={onClose} className="absolute right-6 top-6">
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
