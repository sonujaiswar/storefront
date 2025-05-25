"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import Basic from "../profile/Basic";
import EditLocationAction from "../profile/EditLocationAction";
import EditNameAction from "../profile/EditNameAction";
import EditGenderAction from "../profile/EditGenderAction";
import BasicAction from "../profile/BasicAction";
import EditLanguageAction from "../profile/EditLanguageAction";
import AccountAction from "../profile/AccountAction";

const steps = ["Basic", "Location", "Contact"];

export default function StepperExample() {
  const [step, setStep] = useState(0);

  const renderStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      default:
        return <div>Unknown step</div>;
    }
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <Grid container spacing={2} sx={{ minWidth: "30vw" }}>
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "flex-start",
            mt: 4,
          }}
        >
          <Stepper activeStep={step} sx={{ width: "100%" }}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: 3, width: "100%" }}>{renderStepContent(step)}</Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",

              gap: 2,
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="outlined"
              onClick={handleBack}
              disabled={step === 0}
            >
              Back
            </Button>
            {step === steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Finish
              </Button>
            ) : (
              <>
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

function StepOne() {
  return (
    <>
      <BasicAction />
    </>
  );
}

function StepTwo() {
  return (
    <>
      <EditLocationAction />
      <EditLanguageAction />
    </>
  );
}

function StepThree() {
  return <AccountAction />;
}
