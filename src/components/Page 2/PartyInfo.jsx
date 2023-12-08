import React from "react";
import BookingParty from "./BookingParty";
import OpposingParty from "./OpposingPatry";
import AdditionalParties from "./AdditionalParties";

const PartyInfo = () => {
  return (
    <div>
      <BookingParty />
      <OpposingParty />
      <AdditionalParties />
    </div>
  );
};

export default PartyInfo;
