import { useEffect, useState } from "react";
import { Dimensions, useWindowDimensions } from "react-native";

const { width } = Dimensions.get("window");

const MOBILE_BREAKPOINT = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(width < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      const { width: newWidth } = useWindowDimensions();
      setIsMobile(newWidth < MOBILE_BREAKPOINT);
    };

    const subscription = Dimensions.addEventListener("change", handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  return isMobile;
};
