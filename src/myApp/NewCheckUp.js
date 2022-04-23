import { useState } from "react";
import { useHistory } from "react-router-dom";

import "main.css";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Wizard page components
import SearchPatient from "myApp/CheckUpComponents/SearchPatient/SearchPatient";
import PatientDiagnosis from "myApp/CheckUpComponents/PatientDiagnosis/PatientDiagnosis";
import AssignMedicine from "myApp/CheckUpComponents/AssignMedicine/AssignMedicine";
import GenerateBill from "myApp/CheckUpComponents/GenerateBill/GenerateBill";

function getSteps() {
  return [1, 2, 3, 4];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SearchPatient />;
    case 1:
      return <PatientDiagnosis />;
    case 2:
      return <AssignMedicine />;
    case 3:
      return <GenerateBill />;
    default:
      return null;
  }
}

function NewCheckUp() {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const LastStep = activeStep === steps.length - 0;
  const isLastStep = activeStep === steps.length - 1;
  const secondLastStep = activeStep === steps.length - 2;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox pb={4}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={12}>
            <SuiBox textAlign="center">
              <SuiBox>
                <SuiTypography variant="h3" fontWeight="bold">
                  Check Up Procedure
                </SuiTypography>
              </SuiBox>
            </SuiBox>

            <Stepper className="modify_steps_margin" activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card>
              <SuiBox p={2}>
                <SuiBox>
                  {getStepContent(activeStep)}
                  <SuiBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <SuiBox />
                    ) : (
                      <SuiButton variant="gradient" color="light" onClick={handleBack}>
                        back
                      </SuiButton>
                    )}
                    <SuiButton
                      variant="gradient"
                      color="success"
                      onClick={!LastStep ? handleNext : history.push("/dashboard")}
                    >
                      {secondLastStep ? "FINISH CHECK UP" : <>{isLastStep ? "GO HOME" : "NEXT"}</>}
                    </SuiButton>
                  </SuiBox>
                </SuiBox>
              </SuiBox>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewCheckUp;
