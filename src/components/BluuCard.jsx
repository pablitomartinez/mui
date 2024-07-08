import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BluuCard() {
  return (
    <Card sx={{
        transition: '.2s',
        '&:hover':{
            transform: 'scale(1.05)'
        }
    }} >
        <CardActionArea>

      <CardMedia
        component="img"
        image="https://via.placeholder.com/1000x200"
        height="200"
        alt="descripcion"
      />
      <CardContent>
        <Typography variant="h5">Card Tittle</Typography>
        <Typography component="p" variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium nulla voluptatibus porro velit quo facilis ipsam suscipit
          laborum? Suscipit voluptatibus fugiat laborum est nulla a fuga ipsa,
          consequuntur iure.
        </Typography>
      </CardContent>
        </CardActionArea>
      <CardActions>
        <Button variant="contained" >ADD</Button>
        <Button variant="outlined" >REMOVE</Button>
      </CardActions>
    </Card>
  );
}
