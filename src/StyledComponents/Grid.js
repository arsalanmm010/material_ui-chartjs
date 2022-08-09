import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "./Stack";
import ImageList from "./ImageList";
import Card from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginBlockStart: theme.spacing(3),
  marginInlineStart: theme.spacing(2),
  marginInlineEnd: theme.spacing(2),
  textAlign: "center",
  color: "white",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <Stack />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Card />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <ImageList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
