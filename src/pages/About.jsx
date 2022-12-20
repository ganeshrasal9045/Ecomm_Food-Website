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
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente
          possimus laboriosam blanditiis asperiores fugiat incidunt veniam eum,
          quaerat architecto, esse fugit. Quam esse iste quo officiis, ex itaque
          molestias recusandae ea facilis veritatis praesentium qui iure,
          repellat hic, consectetur amet optio ullam delectus suscipit a!
          Molestias non omnis voluptatum ducimus officiis repudiandae
          exercitationem modi et provident, in nam eum quisquam quidem nulla
          dolore? Eos doloribus vitae officia ut ab libero repellendus illum,
          facere iusto enim, distinctio porro nobis, est aliquid nulla placeat
          consequatur sit earum. Tenetur, laboriosam illum voluptatum
          exercitationem culpa doloremque cumque. Sapiente possimus quisquam
          reprehenderit officia harum.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          repellendus perferendis accusamus hic. Odit assumenda delectus
          obcaecati qui nostrum recusandae aperiam sapiente soluta ipsam non
          neque architecto explicabo, voluptas ex ut molestiae quas dolore?
          Dolorum quos odit pariatur eum cumque eveniet vel ut exercitationem
          dolor maiores, incidunt ducimus esse, architecto omnis assumenda
          molestias ea inventore minima adipisci? Atque laboriosam explicabo
          dolore! Explicabo maxime maiores quam exercitationem tempore ipsa
          aspernatur temporibus, nesciunt dolorem, distinctio adipisci labore
          vel! Dolorem dolor incidunt dignissimos, facilis perferendis, magnam
          tempore sit ducimus soluta quibusdam blanditiis! Nulla, voluptates
          quasi. Aliquid, assumenda deleniti. Excepturi libero rerum cupiditate
          dicta!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
