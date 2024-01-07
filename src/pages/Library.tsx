import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import { MovieCard } from '~/components';
import { getSavedMovies } from '~/services/movies';
import type { Movie } from '~/types/api';

export const Library = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await getSavedMovies();

      setMovies(response.data);
    };

    load();
  }, []);

  return (
    <Grid container width="100%" maxWidth="md" direction="row" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" component="h3">
          My Library
        </Typography>
      </Grid>
      {movies.map((movie) => (
        <Grid item xs={4} md={4} key={movie.id}>
          <MovieCard movie={movie} isSaved={false} />
        </Grid>
      ))}
    </Grid>
  );
};
