import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Dosa from "../images/dosa.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Gujrati from "../images/gujrati.jpeg";
import Chinese from "../images/Chinese.webp";
import Afghani from "../images/Afghani.jpg";
import PavBhaji from "../images/Pav Bhaji.webp";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";

const Gallery = () => {
  // Original data is stored in data1, which won't be modified
  let data1 = [
    {
      title: "Dosa",
      image: Dosa,
    },
    {
      title: "Chola",
      image: Chola,
    },
    {
      title: "Idli",
      image: Idli,
    },
    {
      title: "MasalaDosa",
      image: MasalaDosa,
    },
    {
      title: "Paneer",
      image: Paneer,
    },
    {
      title: "Gujrati",
      image: Gujrati,
    },
    {
      title: "Chinese",
      image: Chinese,
    },
    {
      title: "Afghani",
      image: Afghani,
    },
    {
      title: "PavBhaji",
      image: PavBhaji,
    },
  ];

  // Set the filtered data in a separate state
  const [data, setData] = useState(data1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // If search is empty, reset to original data
    if (search === "") {
      setData(data1);
    } else {
      // Otherwise, filter the data based on the search input
      let data_rev = data1.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setData(data_rev);
    }
  }, [search, data1]); // Add data1 as a dependency to ensure it stays up to date

  return (
    <Layout>
      <TextField
        sx={{
          my: 7,
          ml: 80,
          "@media (max-width:600px)": {
            ml: 15,
          },
        }}
        id="standard-basic"
        label="Search"
        variant="standard"
        onChange={(event) => setSearch(event.target.value)}
        value={search} // Bind the value of the input to the search state
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: -2,
        }}
      >
        {data.map((item) => (
          <Card
            key={item.title}
            sx={{ maxWidth: "390px", display: "flex", m: 2 }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Gallery;
