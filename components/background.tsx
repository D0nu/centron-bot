"use client";

import { useEffect, useState, useCallback } from "react";

type ScreenSize = "base" | "sm" | "md" | "lg";
type ImageID = "walrus" | "equal" | "sui" | "globe";

export default function Design() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("base");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimensions({ width, height });

      if (width >= 1024) setScreenSize("lg");
      else if (width >= 768) setScreenSize("md");
      else if (width >= 640) setScreenSize("sm");
      else setScreenSize("base");

      // ✅ Fixed: More accurate mobile landscape detection
      const isLandscape = width > height;
      const isSmallDevice = width <= 1024 && height <= 600;
      setIsMobileLandscape(isLandscape && isSmallDevice);
    };

    if (typeof window !== "undefined") {
      updateSize();
      window.addEventListener("resize", updateSize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateSize);
      }
    };
  }, []);

  const lineAngles = [-37, -10, 10, 37];

  const lineOffsets = {
    base: [-70, -20, 20, 70],
    sm: [-70, -20, 20, 70],
    md: [-140, -60, 60, 140],
    lg: [-280, -100, 100, 280],
  }[screenSize];

  const getLineIndex = (id: ImageID): number => {
    if (id === "walrus") return 0;
    if (id === "equal") return 1;
    if (id === "sui") return screenSize === "lg" ? 3 : 2;
    if (id === "globe") return 2;
    return 0;
  };

  const getImagePosition = useCallback(
    (id: ImageID) => {
      if (dimensions.height === 0 || dimensions.width === 0) {
        return {
          top: "0",
          left: "0",
          visibility: "hidden" as const,
        };
      }

      const index = getLineIndex(id);
      const offset = lineOffsets[index];
      const angle = lineAngles[index];
      const angleRad = (angle * Math.PI) / 180;
      const bottomAnchor = dimensions.height - 80;

      const verticalPositions: Record<ScreenSize, Record<ImageID, number>> = {
        base: {
          walrus: isMobileLandscape ? 0.52 : 0.68,
          equal: isMobileLandscape ? 0.1 : 0.13,
          sui: isMobileLandscape ? 0.22 : 0.25,
          globe: isMobileLandscape ? 0.01 : 0.03,
        },
        sm: {
          walrus: isMobileLandscape ? 1.2 : 0.68,
          equal: isMobileLandscape ? 0.1 : 0.13,
          sui: isMobileLandscape ? 0.22 : 0.25,
          globe: isMobileLandscape ? 0.01 : 0.03,
        },
        md: {
          walrus: isMobileLandscape ? 0.5 : 0.6,
          equal: isMobileLandscape ? 0.2 : 0.12,
          sui: isMobileLandscape ? 0.22 : 0.25,
          globe: isMobileLandscape ? 0.01 : 0.02,
        },
        lg: {
          walrus: 0.69,
          equal: 0.25,
          sui: 0.69,
          globe: 0.35,
        },
      };

      const topPx = verticalPositions[screenSize][id] * dimensions.height;
      const distanceFromBottom = bottomAnchor - topPx;
      const horizontalShift = distanceFromBottom * Math.tan(angleRad);

      const screenAdjustment = (() => {
        if (isMobileLandscape) {
          return {
            base: { walrus: -20, equal: -50, sui: 0, globe: -30 },
            sm: { walrus: -350, equal: -110, sui: 5, globe: 40 },
            md: { walrus: -30, equal: -45, sui: -8, globe: -60 },
            lg: { walrus: -40, equal: -50, sui: -80, globe: 0 },
          }[screenSize][id];
        } else {
          return {
            base: { walrus: -10, equal: -35, sui: -5, globe: -38 },
            sm: { walrus: -10, equal: -35, sui: -5, globe: -38 },
            md: { walrus: -30, equal: -45, sui: -8, globe: -60 },
            lg: { walrus: -40, equal: -50, sui: -80, globe: 0 },
          }[screenSize][id];
        }
      })();

      return {
        top: `${topPx}px`,
        left: `calc(50% + ${offset + horizontalShift + screenAdjustment}px)`,
      };
    },
    [dimensions, lineOffsets, screenSize, isMobileLandscape]
  );

  const getImageSrc = (id: ImageID) => {
    switch (id) {
      case "walrus":
        return "/walrus.png";
      case "equal":
        return "/equal.png";
      case "sui":
      case "globe":
        return "/Group 110.png";
      default:
        return "";
    }
  };

  const getVisibleImages = useCallback((): ImageID[] => {
    return screenSize === "lg"
      ? ["walrus", "equal", "sui"]
      : ["walrus", "equal", "globe"];
  }, [screenSize]);

  // ✅ Line height adjustment based on screen and orientation
  let lineContainerHeight: string;

  if (isMobileLandscape) {
    if (screenSize === "base") lineContainerHeight = "120dvh";
    else if (screenSize === "sm") lineContainerHeight = "180dvh";
    else if (screenSize === "md") lineContainerHeight = "20dvh";
    else lineContainerHeight = "220dvh";
  } else {
    if (screenSize === "base") lineContainerHeight = "76%";
    else if (screenSize === "sm") lineContainerHeight = "76%";
    else if (screenSize === "md") lineContainerHeight = "170%";
    else lineContainerHeight = "100%";
  }

  return (
    <div
      className="-z-20 r1024x600:-z-50 relative w-full overflow-hidden landscape-md:overflow-visible"
      style={{
        height: isMobileLandscape ? "220dvh" : "100dvh",
      }}
    >
      {/* Images */}
      <div className="relative z-10">
        {(["walrus", "equal", "sui", "globe"] as ImageID[]).map((id) => {
          const isVisible = getVisibleImages().includes(id);
          return (
            <img
              key={id}
              src={getImageSrc(id)}
              alt={id}
              className={`absolute w-20 h-20 md:w-28 md:h-28 animate-bounce transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                ...getImagePosition(id),
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div>

      {/* Diagonal Lines */}
      <div
        className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-full pointer-events-none z-0 animate-pulse"
        style={{ height: lineContainerHeight }}
      >
        {lineAngles.map((angle, i) => {
          const offset = lineOffsets[i];
          const isMiddle = i === 1 || i === 2;

          return (
            <div
              key={i}
              className={`absolute bottom-0 left-1/2 w-[2px] ${
                isMiddle ? "bg-green-400" : "bg-green-400/20"
              }`}
              style={{
                height: "100%",
                transform: `translateX(${offset}px) rotate(${angle}deg)`,
                transformOrigin: "bottom center",
                backgroundImage: isMiddle
                  ? "linear-gradient(to bottom, rgba(34, 197, 94, 0.9), rgba(34, 197, 94, 0))"
                  : undefined,
                filter: isMiddle
                  ? "drop-shadow(0 0 6px rgba(34, 197, 94, 0.8)) blur(0.5px)"
                  : undefined,
                maskImage: isMiddle
                  ? "linear-gradient(to bottom, white 40%, transparent 100%)"
                  : undefined,
                WebkitMaskImage: isMiddle
                  ? "linear-gradient(to bottom, white 40%, transparent 100%)"
                  : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
