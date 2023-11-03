import { useEffect, useState } from "react";

type WindowSizeType = {
  width: undefined | number;
  height: undefined | number;
  screen: undefined | "laptop" | "mobile" | "tablet";
  screenSize: Sizes;
  breakpoints: { [key in Sizes]: number };
};

type Sizes = keyof typeof breakpoints;

const breakpoints = {
  xxs: "375px",
  xs: "425px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl: "1920px",
};

const getNumber = (str: string): number => {
  return Number(str.replace("px", ""));
};

const getScreen = (width: number): "laptop" | "mobile" | "tablet" =>
  width < getNumber(breakpoints.sm)
    ? "mobile"
    : width >= getNumber(breakpoints.sm) && width < getNumber(breakpoints.lg)
    ? "tablet"
    : "laptop";

const getScreenSize = (width: number): keyof typeof breakpoints => {
  const breakpoint = getBreakpoints();
  if (width >= breakpoint.xxl) return "xxl";
  else if (width >= breakpoint.xl) return "xl";
  else if (width >= breakpoint.lg) return "lg";
  else if (width >= breakpoint.md) return "md";
  else if (width >= breakpoint.sm) return "sm";
  else if (width >= breakpoint.xs) return "xs";
  else return "xxs";
};

const getBreakpoints = (): {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
} => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};
  Object.keys(breakpoints).forEach((key) => {
    const val = breakpoints[key as Sizes];
    result[key] = getNumber(val);
  });
  return result;
};

export const useWindowSize = (): WindowSizeType => {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: 0,
    height: 0,
    screen: undefined,
    screenSize: "lg",
    breakpoints: getBreakpoints(),
  });

  const handleResize = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowSize({
      width: width,
      height: height,
      screen: getScreen(width),
      screenSize: getScreenSize(width),
      breakpoints: getBreakpoints(),
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
