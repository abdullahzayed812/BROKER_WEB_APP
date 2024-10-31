import React, { useCallback } from "react";
import { Pressable, Text, View, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";

interface SwitchProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
}

export function SwitchButton({
  value = false,
  onValueChange,
  disabled = false,
}: SwitchProps) {
  const [isEnabled, setIsEnabled] = useState(value);
  const offsetX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIsEnabled(value);
  }, [value]);

  useEffect(() => {
    Animated.spring(offsetX, {
      toValue: isEnabled ? 20 : 0,
      useNativeDriver: true,
      bounciness: 4,
    }).start();
  }, [isEnabled]);

  const toggleSwitch = useCallback(() => {
    if (disabled) return;

    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onValueChange?.(newValue);
  }, [disabled, isEnabled, onValueChange]);

  return (
    <Pressable
      onPress={toggleSwitch}
      className={`
        w-[52px] h-[32px] rounded-full p-[2px] flex-row items-center
        ${isEnabled ? "bg-blue-500" : "bg-gray-200"}
        ${disabled ? "opacity-50" : ""}
      `}
      accessibilityRole="switch"
      accessibilityState={{ checked: isEnabled, disabled }}
    >
      <View className="flex-1 flex-row items-center justify-end">
        {isEnabled && (
          <Text className="text-white text-xs font-medium mr-[18px]">ON</Text>
        )}
      </View>
      <Animated.View
        className="w-[28px] h-[28px] rounded-full bg-white shadow-sm absolute"
        style={{
          transform: [{ translateX: offsetX }],
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}
      />
    </Pressable>
  );
}
