import React from "react";
import { View, Text, Pressable } from "react-native";

interface TabSelectorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <View className="flex-row items-center" style={{ gap: 12 }}>
      <Pressable
        onPress={() => setActiveTab("Requests")}
        className={`py-2 rounded-lg items-center justify-center w-[120px] ${
          activeTab === "Requests" ? "bg-blue-500" : "bg-white"
        } border border-blue-500`}
      >
        <Text
          className={`text-center ${
            activeTab === "Requests" ? "text-white" : "text-blue-500"
          }`}
        >
          Requests
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setActiveTab("Inventory")}
        className={`py-2 rounded-lg items-center justify-center w-[120px] ${
          activeTab === "Inventory" ? "bg-blue-500" : "bg-white"
        } border border-blue-500`}
      >
        <Text
          className={`text-center ${
            activeTab === "Inventory" ? "text-white" : "text-blue-500"
          }`}
        >
          Inventory
        </Text>
      </Pressable>
    </View>
  );
};

export default TabSelector;
