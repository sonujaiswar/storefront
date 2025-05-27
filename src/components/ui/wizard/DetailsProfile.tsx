"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";

import EditLocationAction from "../profile/EditLocationAction";
import BasicAction from "../profile/BasicAction";
import EditLanguageAction from "../profile/EditLanguageAction";
import AccountAction from "../profile/AccountAction";
import { useSelector } from "react-redux";
import { RootState } from "@/types/stateTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "@/i18n/navigation";

const steps = ["Basic", "Location", "Contact"];

export default function StepperExample() {
  const [step, setStep] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  // Redux state
  const firstName = useSelector(
    (state: RootState) => state.user.user.first_name
  );
  const dateofbirth = useSelector((state: RootState) => state.user.dob);
  const gender = useSelector((state: RootState) => state.user.gender);
  const countryCode = useSelector(
    (state: RootState) => state.location.area.countryCode
  );
  const phoneNumber = useSelector((state: RootState) => state.user.phone);

  // Update isDisabled based on current step's data validity
  useEffect(() => {
    if (step === 0) {
      const valid =
        firstName.trim().length > 0 &&
        dateofbirth !== null &&
        gender!.trim().length > 0;
      setIsDisabled(!valid);
    } else if (step === 1) {
      const valid = countryCode!.trim().length > 0;
      setIsDisabled(!valid);
    } else if (step === 2) {
      const valid = phoneNumber!.trim().length > 0;
      setIsDisabled(!valid);
    } else {
      setIsDisabled(false);
    }
  }, [step, firstName, dateofbirth, gender, countryCode, phoneNumber]);

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
  const getLocale = (): string => {
    const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
    return match?.[1] || "en-in";
  };

  const getRedirectUrl = (): string => {
    const callbackUrl = searchParams.get("callbackUrl");
    return callbackUrl
      ? decodeURIComponent(callbackUrl)
      : `/${getLocale()}/dashboard`;
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Final action on Finish
      const redirectUrl = getRedirectUrl();
      router.push(redirectUrl);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <Grid container spacing={2} sx={{ minWidth: "40vw" }}>
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
          <Typography>
            Welcome {firstName}, some more details needed before we proceed.
          </Typography>

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
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={isDisabled}
              >
                Finish
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={isDisabled}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

function StepOne() {
  return <BasicAction />;
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
