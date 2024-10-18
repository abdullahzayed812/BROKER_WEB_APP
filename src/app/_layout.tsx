import { useWindowDimensions } from "react-native";
import "../global.css";
import { Slot } from "expo-router";
import BottomTabs from "@/components/BottomTabs";

export default function Layout() {
  const { width } = useWindowDimensions();

  const isWeb = width < 767;

  return (
    <>
      <Slot />
      {isWeb ? <BottomTabs /> : null}
    </>
  );
}
