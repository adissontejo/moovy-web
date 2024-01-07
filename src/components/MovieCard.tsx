import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

import { ReactComponent as BooksIcon } from '~/assets/books.svg';
import { ReactComponent as StarIcon } from '~/assets/star.svg';
import type { Movie } from '~/types/api';

export interface MovieCardProps {
  movie: Movie;
  isSaved: boolean;
}

export const MovieCard = ({ movie, isSaved }: MovieCardProps) => {
  return (
    <Card
      sx={{
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'white',
        padding: 1,
        paddingBottom: 0,
        borderRadius: '10px',
      }}
    >
      <CardMedia
        sx={{ aspectRatio: 2 / 3, width: '100%', borderRadius: '10px' }}
        image={movie.posterUrl}
      />
      <CardContent sx={{ padding: 1 }}>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            variant="body1"
            color="black"
            component="p"
            flex="1"
            marginRight={1}
          >
            {movie.title}
          </Typography>
          <SvgIcon
            component={StarIcon}
            inheritViewBox
            sx={{ marginRight: '1px' }}
          />
          <Typography variant="body1" color="text.secondary" component="p">
            {movie.rating}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: isSaved ? 'primary.main' : 'secondary.main',
            justifyContent: 'flex-start',
            borderRadius: '15px',
            ':hover': {
              backgroundColor: isSaved ? 'primary.dark' : 'secondary.dark',
            },
          }}
          startIcon={<BooksIcon scale={22} />}
        >
          <Typography variant="button" textAlign="center" flex={1}>
            {isSaved ? 'Remove' : 'Add to My Library'}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
