import React from 'react'
import { Box, Grid } from "@material-ui/core";
import MediaCard from "./mediaCard";

const mediaCards = [
  {
    image: "/img/leader.png",
    title: "New Leds",
    target: "205",
    backgroundColor: "#F2F1FE",
    color: "#663399",
  },
  {
    image: "/img/sales.png",
    title: "Sales",
    target: "$4021",
    backgroundColor: "#C5DBFF",
    color: "#3981F7",
  },
  {
    image: "/img/orders.png",
    title: "Orders",
    target: "80",
    backgroundColor: "#BCDDB3",
    color: "#5DAE49",
  },
  {
    image: "/img/expense.png",
    title: "Expense",
    target: "$1200",
    backgroundColor: "#FFF6E0",
    color: "#FFC620",
  },
];

const Cards = () => {
  return (
    <Box pl={19} pr={2} pt={3}>
      <Grid container spacing={1}>
        {mediaCards.map((mediaCard, i) => {
          return (
            <Grid item key={i} xs={3}>
              <MediaCard {...mediaCard} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Cards;
