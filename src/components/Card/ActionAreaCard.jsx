import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./ActionCard.module.css";
import { CardActionArea } from "@mui/material";
import ingresso from "../../images/ingresso.png";

import images from "../../images/images.jpg";
const ActionAreaCard = () => {
  return (
    <div className={styles.card}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={images}
            alt="Show do Ano!"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Show do Ano!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ingresso}
            alt="Show do Ano!"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Show do Ano!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <button className={styles.btn}>Comprar</button>
      </Card>
    </div>
  );
};

export default ActionAreaCard;
