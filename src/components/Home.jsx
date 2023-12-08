import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { makeStyles } from "@material-ui/core/styles";
import PartyInfo from "./Page 2/PartyInfo";
import Logistics from "./Page 3/Logistics";
import Additonal from "./Page 4/Additonal";

function getSteps() {
  return [
    "Initial Information",
    "Party Information",
    "Logistics",
    "Additional Information",
  ];
}

const useStyles = makeStyles((theme) => ({
  stepButton: {
    "& .MuiStepIcon-root": {
      fontSize: 80,

      border: "2px solid black", // Border for StepIcon
      borderRadius: "50%",

      "& .MuiStepIcon-text": {
        fill: "black",
        fontFamily: "Open Sans",
        fontWeight: "300",
        fontSize: 10,
        textAlign: "center",
      },
    },
  },

  step: {
    "& .MuiStepIcon-active": {
      color: "white",
    },
  },

  connectorLine: {
    height: "0.6px",
    backgroundColor: "#ccc",
    width: "70%",
    marginLeft: "-138px",
    marginTop: "37px",
    position: "absolute",
  },
}));

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <PartyInfo />;
    case 1:
      return <PartyInfo />;
    case 2:
      return <Logistics />;
    case 3:
      return <Additonal />;
    default:
      return null;
  }
};

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const classes = useStyles();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
      }}
    >
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        connector={<Connector classes={classes} />}
        classes={{ root: classes.step }}
      >
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepButton
                onClick={handleStep(index)}
                classes={{ root: classes.stepButton }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                  }}
                >
                  {label}
                </div>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div style={{ margin: "40px", marginLeft: "60px" }}>
        {getStepContent(activeStep)}
      </div>
    </div>
  );
}

function Connector({ classes }) {
  return <div className={classes.connectorLine} />;
}
