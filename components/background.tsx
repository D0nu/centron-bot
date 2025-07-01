"use client";

import { useEffect, useState, useCallback } from "react";

type ScreenSize = "base" | "md" | "lg";
type ImageID = "walrus" | "equal" | "sui" | "globe";

export default function Design() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("base");
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });

      if (width >= 1024) setScreenSize("lg");
      else if (width >= 768) setScreenSize("md");
      else setScreenSize("base");
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
          walrus: 0.68,
          equal: 0.13,
          sui: 0.25,
          globe: 0.03,
        },
        md: {
          walrus: 0.6,
          equal: 0.12,
          sui: 0.25,
          globe: 0.02,
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

      const screenAdjustment = {
        base: {
          walrus: -10,
          equal: -35,
          sui: -5,
          globe: -38,
        },
        md: {
          walrus: -30,
          equal: -45,
          sui: -8,
          globe: -60,
        },
        lg: {
          walrus: -40,
          equal: -50,
          sui: -80,
          globe: 0,
        },
      }[screenSize][id];

      return {
        top: `${topPx}px`,
        left: `calc(50% + ${offset + horizontalShift + screenAdjustment}px)`,
      };
    },
    [dimensions, lineOffsets, screenSize]
  );

  const getImageSrc = (id: ImageID) => {
    switch (id) {
      case "walrus":
        return "/walrus.png";
      case "equal":
        return "/equal.png";
      case "sui":
        return "/Group 110.png";
      case "globe":
        return "/Group 110.png";
      default:
        return "";
    }
  };

  const getVisibleImages = (): ImageID[] => {
    if (screenSize === "lg") {
      return ["walrus", "equal", "sui"];
    } else {
      return ["walrus", "equal", "globe"];
    }
  };

  // ✅ Define line height per screen size
  let lineHeight = "100%";
  if (screenSize === "base") lineHeight = "70%";
  else if (screenSize === "md") lineHeight = "80%";
  else if (screenSize === "lg") lineHeight = "100%";

  return (
    <div className="-z-20 r1024x600:-z-50 relative w-full h-screen overflow-hidden bg-black">
      {/* Images */}
      <div className="relative z-10">
        {getVisibleImages().map((id) => (
          <img
            key={id}
            src={getImageSrc(id)}
            alt={id}
            className="absolute w-20 h-20 md:w-28 md:h-28 animate-bounce"
            style={{
              ...getImagePosition(id),
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Diagonal Lines */}
      <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none z-0 animate-pulse">
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
                height: lineHeight, // ✅ Dynamic height applied here
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
