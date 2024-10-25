import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname, useRouter } from "expo-router";

interface Tab {
  href: string;
  label: string;
  icon: string;
  isAddRequest?: boolean; // Optional property to differentiate Add Request tab
}

const tabs: Tab[] = [
  { href: "/", label: "Find", icon: "search" },
  { href: "/favorites", label: "Favorites", icon: "star-outline" },
  {
    href: "/add-request",
    label: "Add",
    icon: "add-circle",
    isAddRequest: true,
  },
  { href: "/my-ads", label: "My Ads", icon: "document-text-outline" },
  { href: "/more", label: "More", icon: "menu-outline" },
];

const BottomTabs: React.FC = () => {
  const pathname = usePathname();

  return (
    <View className="md:hidden flex flex-row justify-around items-center bg-white border-t border-gray-400 py-2">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const iconColor = isActive ? "#007AFF" : "gray";
        const textColor = isActive ? "text-blue-500" : "text-gray-500";

        return (
          <Link href={tab.href} key={tab.href} asChild>
            <TouchableOpacity className="items-center">
              {tab.isAddRequest ? (
                <View className="bg-blue-400 w-14 h-14 border-2 border-yellow-600 rounded-full flex items-center justify-center">
                  <Text className="text-white text-3xl">+</Text>
                </View>
              ) : (
                <>
                  <Ionicons
                    name={tab.icon as any}
                    size={24}
                    color={iconColor}
                  />
                  <Text className={`text-md font-bold mt-1 ${textColor}`}>
                    {tab.label}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
};

export default BottomTabs;
