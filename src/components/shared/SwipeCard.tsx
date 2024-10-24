// SwipeCard.tsx
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface SwipeCardProps extends PropsWithChildren {
  onDelete: () => void;
  onEdit: () => void;
  children: ReactNode;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({
  onDelete,
  onEdit,
  children,
}) => {
  const translateX = useSharedValue(0);
  const buttonWidth = 80; // Combined width of both buttons
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const buttonRef = useRef<View>(null); // Ref for buttons

  const panGesture = Gesture.Pan().onUpdate((e) => {
    try {
      const newTranslationX = e.translationX;
      // Limit translation to the width of the buttons
      translateX.value = Math.max(
        Math.min(newTranslationX, buttonWidth),
        -buttonWidth
      );

      // Show buttons when swiped
      if (Math.abs(newTranslationX) > 0 && !buttonsVisible) {
        setButtonsVisible(true);
      }
    } catch (error) {
      console.error("Error in panGesture:", error);
    }
  });

  const handleClickOutside = useCallback(
    (event) => {
      const { locationX, locationY } = event.nativeEvent;

      // Measure button dimensions and position
      buttonRef.current?.measure((fx, fy, width, height, px, py) => {
        // Check if the click is outside the button area
        if (
          locationX < px ||
          locationX > px + width ||
          locationY < py ||
          locationY > py + height
        ) {
          // Animate back to original position if swiped
          if (translateX.value !== 0) {
            translateX.value = withSpring(0); // Bounce back to the original position
          }
          // Hide buttons when clicking outside
          setButtonsVisible(false);
        }
      });
    },
    [translateX]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: translateX.value }] };
  });
  return (
    <View className="relative w-full my-4" onTouchEnd={handleClickOutside}>
      <GestureHandlerRootView>
        {/* Hidden buttons */}
        {buttonsVisible && (
          <View ref={buttonRef} className="absolute right-0 flex-row h-full">
            <TouchableOpacity
              onPress={onDelete}
              className="bg-red-500 w-20 h-full justify-center items-center"
            >
              <Text className="text-white font-bold">Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onEdit}
              className="bg-blue-500 w-20 h-full justify-center items-center"
            >
              <Text className="text-white font-bold">Edit</Text>
            </TouchableOpacity>
          </View>
        )}
        {/* Swipeable card */}

        <GestureDetector gesture={panGesture}>
          <Animated.View className="" style={animatedStyle}>
            {children}
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
};
