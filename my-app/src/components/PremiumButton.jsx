import React from "react";

const PremiumButton = ({ premium, handleTogglePremium }) => {
  return (
    <button
      style={{ display: "flex", alignItems: "center" }}
      className="premium-btn"
      onClick={handleTogglePremium}
    >
      {premium ? "Cancel Premium" : "Subscribe to Premium"}
    </button>
  );
};

export default PremiumButton;
