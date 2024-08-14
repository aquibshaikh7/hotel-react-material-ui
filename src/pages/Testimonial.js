import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Layout from "../components/Layout/Layout";
import Dosa from "../images/dosa.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";

const steps = [
  {
    label: "Dosa",
    description:
      "A delicious South Indian dish made from fermented rice batter.",
    image: Dosa,
  },
  {
    label: "Chola",
    description: "A spicy and tangy dish made with chickpeas.",
    image: Chola,
  },
  {
    label: "Idli",
    description:
      "A soft and fluffy steamed rice cake, a staple in South India.",
    image: Idli,
  },
];

export default function ImageCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 600,
          flexGrow: 1,
          my: 10,
          mx: "auto", // Center horizontally
          width: "100%", // Full width
        }}
      >
        <Card
          sx={{
            maxWidth: "100%", // Allow the card to be responsive
            mx: "auto", // Center the card horizontally
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={steps[activeStep].image}
            alt={steps[activeStep].label}
            sx={{
              objectFit: "cover", // Ensure the image covers the area
              maxHeight: 400, // Set a maximum height for larger screens
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {steps[activeStep].label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {steps[activeStep].description}
            </Typography>
          </CardContent>
        </Card>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
          sx={{
            mt: 2,
            justifyContent: "center", // Center the stepper controls
          }}
        />
      </Box>
    </Layout>
  );
}
