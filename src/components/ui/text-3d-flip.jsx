import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Text3DFlip = React.forwardRef(function Text3DFlip(
  {
    children,
    as: Component = "div",
    className,
    textClassName,
    flipTextClassName,
    staggerDuration = 0.03,
    staggerFrom = "first",
    transition = {
      type: "spring",
      damping: 25,
      stiffness: 160,
    },
    rotateDirection = "top",
    ...props
  },
  ref
) {
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  /*
   * Detect touch/mobile devices.
   * We use pointer type instead of screen width so tablets
   * and touch devices behave correctly as well.
   */
  useEffect(() => {
    const checkDevice = () => {
      const mobile =
        window.matchMedia("(hover: none) and (pointer: coarse)").matches;

      setIsMobile(mobile);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  /*
   * Mobile:
   * Trigger the 3D flip when the text enters the viewport.
   */
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMobileActive(true);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  const text = React.Children.toArray(children).join("");
  const lines = text.split("\n");

  const rotation =
    rotateDirection === "top"
      ? "rotateX(-180deg)"
      : rotateDirection === "bottom"
        ? "rotateX(180deg)"
        : rotateDirection === "left"
          ? "rotateY(180deg)"
          : "rotateY(-180deg)";

  let globalIndex = 0;

  const getDelay = (index, total) => {
    if (staggerFrom === "last") {
      return (total - 1 - index) * staggerDuration;
    }

    if (staggerFrom === "center") {
      const center = (total - 1) / 2;
      return Math.abs(index - center) * staggerDuration;
    }

    return index * staggerDuration;
  };

  const totalCharacters = lines.reduce(
    (sum, line) => sum + line.replace(/ /g, "").length,
    0
  );

  /*
   * Desktop:
   *   whileHover controls the animation.
   *
   * Mobile:
   *   animate controls the animation when the text
   *   enters the viewport.
   */
  const mobileAnimation = mobileActive ? "hover" : "initial";

  return (
    <Component
      ref={(node) => {
        containerRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className={cn("relative inline-block", className)}
      {...props}
    >
      <motion.span
        initial="initial"
        animate={isMobile ? mobileAnimation : undefined}
        whileHover={!isMobile ? "hover" : undefined}
        whileTap={isMobile ? "hover" : undefined}
        className="relative inline-block"
        style={{
          perspective: "1000px",
          WebkitPerspective: "1000px",
        }}
      >
        {lines.map((line, lineIndex) => {
          const characters = Array.from(line);

          return (
            <span
              key={`line-${lineIndex}`}
              className="block"
            >
              {characters.map((character, index) => {
                if (character === " ") {
                  return (
                    <span
                      key={`space-${lineIndex}-${index}`}
                      aria-hidden="true"
                      style={{
                        display: "inline-block",
                        width: "0.28em",
                      }}
                    />
                  );
                }

                const currentIndex = globalIndex++;

                return (
                  <motion.span
                    key={`${character}-${lineIndex}-${index}`}
                    variants={{
                      initial: {
                        transform: "rotateX(0deg) rotateY(0deg)",
                      },
                      hover: {
                        transform: rotation,
                      },
                    }}
                    transition={{
                      ...transition,
                      delay: getDelay(
                        currentIndex,
                        totalCharacters
                      ),
                    }}
                    className="relative inline-block"
                    style={{
                      transformStyle: "preserve-3d",
                      WebkitTransformStyle: "preserve-3d",
                      transformOrigin: "center center",
                      WebkitTransformOrigin: "center center",
                    }}
                  >
                    {/* FRONT */}
                    <span
                      className={cn(
                        "relative block",
                        textClassName
                      )}
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      {character}
                    </span>

                    {/* BACK */}
                    <span
                      className={cn(
                        "absolute inset-0 block",
                        flipTextClassName
                      )}
                      style={{
                        transform:
                          rotation.replace(
                            /-?180deg/,
                            "180deg"
                          ),
                        WebkitTransform:
                          rotation.replace(
                            /-?180deg/,
                            "180deg"
                          ),
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        WebkitTransformStyle: "preserve-3d",
                      }}
                    >
                      {character}
                    </span>
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
});

export default Text3DFlip;