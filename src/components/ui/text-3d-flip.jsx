import React from "react";
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

  return (
    <Component
      ref={ref}
      className={cn("relative inline-block", className)}
      {...props}
    >
      <motion.span
        initial="initial"
        whileHover="hover"
        className="relative inline-block"
        style={{
          perspective: "1000px",
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
                    }}
                  >
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
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
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