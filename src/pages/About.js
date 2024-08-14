import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": { fontSize: "1.5rem" },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, asperiores aperiam ipsum laudantium mollitia aliquid
          sapiente aliquam labore earum provident. Tempora suscipit fugiat cum
          atque unde, voluptatem recusandae error similique iste, inventore
          ratione praesentium commodi esse saepe totam rem voluptates quasi
          porro autem architecto asperiores aliquam. Aspernatur, sint sed vel
          laudantium eligendi nemo soluta accusantium impedit aperiam fugiat
          ipsum tenetur officiis deleniti, aut itaque minus nobis nostrum nihil
          perspiciatis veritatis omnis, necessitatibus sequi enim dignissimos.
          Enim, adipisci tempora minus dicta necessitatibus eos repellat
          blanditiis aspernatur iure quidem ratione labore debitis natus
          aperiam, quas distinctio sunt vitae quibusdam culpa saepe! Similique.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, asperiores aperiam ipsum laudantium mollitia aliquid
          sapiente aliquam labore earum provident. Tempora suscipit fugiat cum
          atque unde, voluptatem recusandae error similique iste, inventore
          ratione praesentium commodi esse saepe totam rem voluptates quasi
          porro autem architecto asperiores aliquam. Aspernatur, sint sed vel
          laudantium eligendi nemo soluta accusantium impedit aperiam fugiat
          ipsum tenetur officiis deleniti, aut itaque minus nobis nostrum nihil
          perspiciatis veritatis omnis, necessitatibus sequi enim dignissimos.
          Enim, adipisci tempora minus dicta necessitatibus eos repellat
          blanditiis aspernatur iure quidem ratione labore debitis natus
          aperiam, quas distinctio sunt vitae quibusdam culpa saepe! Similique.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
