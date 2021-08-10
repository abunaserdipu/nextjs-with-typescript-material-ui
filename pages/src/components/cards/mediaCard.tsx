import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
  Box,
  Avatar,
} from "@material-ui/core";

const CardStyle = styled(Card)({
  borderRadius: 24,
  width: 280,
  height: 130,
  boxShadow: "none",
});

const AvatarStyle = styled(Avatar)({
  width: 36,
  height: 71,
  borderRadius: 18,
  marginTop: 9,
});

const CardMediaStyle = styled(CardMedia)({
  width: 15,
  height: 15,
});

// const TypographyStyle = styled(Typography)({

// })

interface props {
  image: string;
  title: string;
  target: string;
  backgroundColor: string;
  color: string;
}

const MediaCard = ({ image, backgroundColor, color, title, target }: props) => {
  return (
    <>
      <CardStyle>
        <CardContent>
          <Grid item container xs={12}>
            <Grid item>
              <AvatarStyle
                sx={{
                  backgroundColor: { backgroundColor },
                }}
              >
                <CardMediaStyle image={image} sx={{ color: { color } }} />
              </AvatarStyle>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ ml: 1, mt: 2 }}>
                {title}
              </Typography>
              <Typography variant="h6" color={color} sx={{ ml: 1 }}>
                {target}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardStyle>
    </>
  );
};

export default MediaCard;
