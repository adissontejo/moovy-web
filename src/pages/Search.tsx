import React, { type ChangeEvent, useState, useRef } from 'react';
import { Grid, TextField, Typography } from '@mui/material';

import { ReactComponent as SearchIcon } from '~/assets/search.svg';
import { MovieCard } from '~/components';
import { searchMovies } from '~/services/movies';
import type { Movie } from '~/types/api';

export const Search = () => {
  const [movies, setMovies] = useState<Array<{ movie: Movie; saved: boolean }>>(
    [],
  );

  const inputValue = useRef('');

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    inputValue.current = value;

    console.log(value);

    try {
      const response = await searchMovies(value);

      if (inputValue.current === value) {
        setMovies(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container width="100%" maxWidth="md" direction="row" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" component="h3">
          Search
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
      >
        <TextField
          size="small"
          sx={{
            width: '100%',
            height: 34,
            maxWidth: 442,
            backgroundColor: 'white',
            borderRadius: '15px',
          }}
          variant="filled"
          hiddenLabel
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: 14,
              height: 34,
              borderRadius: '15px',
              color: 'black',
            },
            placeholder: 'Search for a movie',
            endAdornment: <SearchIcon scale={21} />,
          }}
          onChange={handleInputChange}
        />
      </Grid>
      {movies.map(({ movie, saved }) => (
        <Grid item xs={4} md={4} key={movie.id}>
          <MovieCard movie={movie} isSaved={saved} />
        </Grid>
      ))}
    </Grid>
  );
};
