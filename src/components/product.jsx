import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img src="https://via.placeholder.com/200" alt="imagen linda" />
      <Box sx={{ flexGrow: 1, display:'grid', gap: 4 }} >
        <Typography variant='h3'>Product Name</Typography>
        <Typography component='h5'>Product description</Typography>
        <Button variant="contained">ADD CARD</Button>
      </Box>
      <Box mr={2} >19.99</Box>
    </Paper>
  );
}
