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
import { ReactComponent as PlayIcon } from '~/assets/play.svg';
import { ReactComponent as PauseIcon } from '~/assets/pause.svg';
import { ReactComponent as TriangleIcon } from '~/assets/triangle.svg';
import { unsaveMovie, saveMovie } from '~/services/movies';
import type { Movie } from '~/types/api';
import { ConfirmModal } from './ConfirmModal';

export interface MovieCardProps {
  movie: Movie;
  isSaved: boolean;
  reproducible?: boolean;
  playing?: boolean;
  onSave?: () => void;
  onUnsave?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
}

export const MovieCard = ({
  movie,
  isSaved,
  reproducible,
  playing,
  onSave,
  onUnsave,
  onPlay,
  onPause,
}: MovieCardProps) => {
  const [saved, setSaved] = useState(isSaved);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePosterClick = () => {
    if (!movie.reviewUrl) {
      return;
    }

    if (playing) {
      onPause!();
    } else {
      onPlay!();
    }
  };

  const handleButtonClick = async () => {
    if (!saved) {
      await saveMovie(movie.id);

      if (onSave) {
        onSave();
      }

      setSaved(true);
    } else {
      if (movie.reviewUrl) {
        setModalOpen(true);
      } else {
        handleUnsave();
      }
    }
  };

  const handleUnsave = async () => {
    setModalOpen(false);

    await unsaveMovie(movie.id);

    if (onUnsave) {
      onUnsave();
    }

    setSaved(false);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'white',
        padding: 1,
        paddingBottom: 0,
        borderRadius: '10px',
      }}
    >
      <ConfirmModal
        title="Remove from your library"
        open={modalOpen}
        confirmText="Remove"
        onCancel={() => {
          setModalOpen(false);
        }}
        onConfirm={handleUnsave}
      >
        <Typography variant="body1" color="black" component="p">
          Are you sure you want to remove {movie.title} from your library?{' '}
          <Typography variant="body1" color="primary.main" component="span">
            It contains an audio review and you will lose it if you remove.
          </Typography>
        </Typography>
      </ConfirmModal>
      <CardMedia
        sx={{
          aspectRatio: 2 / 3,
          width: '100%',
          borderRadius: '10px',
          position: 'relative',
          border: 'none',
          cursor: 'pointer',
          '.message': {
            opacity: 0,
          },
          ':hover': {
            '.message': {
              opacity: playing ? 0 : 1,
            },
          },
        }}
        image={movie.posterUrl}
        component={reproducible ? 'button' : 'div'}
        onClick={reproducible ? handlePosterClick : undefined}
      >
        {reproducible && (
          <Stack
            className="overlay"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: movie.reviewUrl ? 100 : 220,
              height: 100,
              backgroundColor: 'white',
              borderRadius: movie.reviewUrl ? 100 : '15px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            {movie.reviewUrl ? (
              <>
                <Stack
                  sx={{
                    position: 'absolute',
                    width: 220,
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -100%)',
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  className="message"
                  alignItems="center"
                >
                  <Stack
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: '15px',
                      width: '100%',
                      height: 100,
                      transform: 'translateY(8px)',
                    }}
                    justifyContent="center"
                  >
                    <Typography
                      variant="subtitle2"
                      component="p"
                      textAlign="center"
                    >
                      Listen to Your Audio Review!
                    </Typography>
                  </Stack>
                  <SvgIcon component={TriangleIcon} inheritViewBox />
                </Stack>
                <SvgIcon
                  component={playing ? PauseIcon : PlayIcon}
                  inheritViewBox
                  sx={{ width: 42, height: 42 }}
                />
              </>
            ) : (
              <Typography variant="subtitle2" component="p">
                Record a Review on Mobile App!
              </Typography>
            )}
          </Stack>
        )}
      </CardMedia>
      <CardContent
        sx={{
          padding: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
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
          color={saved ? 'primary' : 'secondary'}
          fullWidth
          sx={{
            justifyContent: 'flex-start',
            borderRadius: '15px',
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
