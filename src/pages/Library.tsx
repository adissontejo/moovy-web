import React, { useEffect, useRef, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import { MovieCard } from '~/components';
import { getSavedMovies } from '~/services/movies';
import type { Movie } from '~/types/api';

export const Library = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [playing, setPlaying] = useState<Movie | null>(null);

  const audio = useRef<HTMLAudioElement | null>();

  const handlePlay = (movie: Movie) => {
    setPlaying(movie);

    if (audio.current) {
      audio.current.pause();
    }

    audio.current = new Audio(movie.reviewUrl);

    audio.current.play();
  };

  const handlePause = () => {
    setPlaying(null);

    if (audio.current) {
      audio.current.pause();
    }
  };

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
          <MovieCard
            movie={movie}
            playing={playing?.id === movie.id}
            isSaved={true}
            onUnsave={() => {
              setMovies((prev) => prev.filter((item) => item.id !== movie.id));
            }}
            onPlay={() => {
              handlePlay(movie);
            }}
            onPause={handlePause}
            reproducible
          />
        </Grid>
      ))}
    </Grid>
  );
};
