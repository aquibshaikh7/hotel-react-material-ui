import * as React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import Gujrati from "../images/gujrati.jpeg";
import Paneer from "../images/paneer.jpg";
import Staff from "../images/Staff.jpg";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "",
          color: "black",
          padding: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5">
            We provide a good quality food for our customers.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "auto", height: "100%" }}>
              <CardMedia
                component="img"
                sx={{ height: 240 }}
                image={Paneer}
                title="Quality"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quality
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Let food be thy medicine and medicine be thy food.
                </Typography>
              </CardContent>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "auto", height: "100%" }}>
              <CardMedia
                component="img"
                sx={{ height: 240 }}
                image={Gujrati}
                title="Quantity"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quantity
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The taste of food will full your stomach but not your heart.
                </Typography>
              </CardContent>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "auto", height: "100%" }}>
              <CardMedia
                component="img"
                sx={{ height: 240 }}
                image={Staff}
                title="Humble Staff"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Humble Staff
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Always kind and humble to customers.
                  <br /> Ready to serve!
                </Typography>
              </CardContent>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          textAlign: "center",
          marginTop: 1,
        }}
      >
        <Container></Container>
      </Box>
    </Layout>
  );
}
