import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Call, Mail, SupportAgent } from "@mui/icons-material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 5, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui
          magni reiciendis cumque mollitia doloremque! Exercitationem, beatae
          aut. Eligendi corporis hic deserunt officiis perspiciatis totam.
          Commodi repellat cum temporibus necessitatibus!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Mail sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Call sx={{ color: "green", pt: 1 }} /> 1234999900
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
