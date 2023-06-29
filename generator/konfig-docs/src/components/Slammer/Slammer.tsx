import React, { useState, useEffect } from "react";

export const Slammer = ({ word, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeout;

    if (isHovered) {
      timeout = setTimeout(() => {
        setIsHovered(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isHovered]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        display: "inline-block",
        transition: "transform 0.3s",
        transform: isHovered ? "scale(1.5)" : "scale(1)",
        zIndex: isHovered ? 1 : "auto",
      }}
    >
      {isHovered ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "5rem",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            zIndex: 9999,
            width: "100vw",
            height: "100vh",
            animation: "shake 0.5s ease-in-out infinite",
          }}
        >
          {word}
        </div>
      ) : (
        children
      )}
    </div>
  );
};
