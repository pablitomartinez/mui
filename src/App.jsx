import { Box, Button, Container, Typography } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Cuadro from "./cuadro";
import Product from "./components/product";
import BluuCard from "./components/BluuCard";

export default function App() {
  return (
    <Container sx={{ border: 2, borderStyle: "solid", boxShadow: 3, pb: 2 }}>
      <h1>React App</h1>
      <Typography variant="h2">React App componente</Typography>
      <Box
        sx={{
          border: 2,
          p: 5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
        }}
      >
        Esto es un Box de MUI{" "}
      </Box>
      <Button startIcon={<ArrowCircleDownIcon />} variant="text">
        Puedes descargar mi CV aqui 🚀
      </Button>
      <Button variant="contained" endIcon={<AddAPhotoIcon />}>
        {" "}
        DESCARGAR
      </Button>


      <Cuadro/>
      <Product />
      <BluuCard />
    </Container>
  );
}
