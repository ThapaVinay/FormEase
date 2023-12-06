import React, { useState } from "react";
import OpposingPartiesMul from "./OpposingPartiesMul";

const AdditionalParties = () => {
  const [opposingParties, setOpposingParties] = useState([]);

  const [click, setClicked] = useState(false);

  const addOpposingParty = () => {
    setClicked(true);
    const newOpposingParties = [
      ...opposingParties,
      <OpposingPartiesMul key={opposingParties.length} />,
    ];
    setOpposingParties(newOpposingParties);
  };

  return (
    <div>
      {click && (
        <div
          style={{
            color: "#3178A0",
            fontSize: 18,
            fontFamily: "Open Sans",
            fontWeight: "300",
            paddingLeft: "100px",
          }}
        >
          <i class="fa-solid fa-xmark"></i> ADDITIONAL PARTIES
        </div>
      )}

      {opposingParties.map((party) => party)}

      <div
        style={{
          margin: "30px",
          paddingLeft: "20px",
        }}
      >
        <button
          onClick={addOpposingParty}
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "black",
            fontWeight: "700",
            padding: "15px",
            letterSpacing: "1px",
          }}
        >
          <i class="fa-solid fa-plus"></i> ADDITIONAL PARTIES
        </button>
      </div>
    </div>
  );
};

export default AdditionalParties;
