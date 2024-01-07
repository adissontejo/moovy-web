import React, { useState } from 'react';
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
import { unsaveMovie, saveMovie } from '~/services/movies';
import type { Movie } from '~/types/api';

export interface MovieCardProps {
  movie: Movie;
  isSaved: boolean;
  onSave?: () => void;
  onUnsave?: () => void;
}

export const MovieCard = ({
  movie,
  isSaved,
  onSave,
  onUnsave,
}: MovieCardProps) => {
  const [saved, setSaved] = useState(isSaved);

  const handleButtonClick = async () => {
    if (!saved) {
      await saveMovie(movie.id);

      if (onSave) {
        onSave();
      }

      setSaved(true);
    } else {
      await unsaveMovie(movie.id);

      if (onUnsave) {
        onUnsave();
      }

      setSaved(false);
    }
  };

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
            backgroundColor: saved ? 'primary.main' : 'secondary.main',
            justifyContent: 'flex-start',
            borderRadius: '15px',
            ':hover': {
              backgroundColor: saved ? 'primary.dark' : 'secondary.dark',
            },
          }}
          startIcon={<BooksIcon scale={22} />}
          onClick={handleButtonClick}
        >
          <Typography
            variant="button"
            textAlign="center"
            flex={1}
            marginRight={saved ? '22px' : 0}
          >
            {saved ? 'Remove' : 'Add to My Library'}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
