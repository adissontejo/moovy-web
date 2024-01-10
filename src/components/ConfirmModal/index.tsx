import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

export interface ConfirmModalProps {
  title: string;
  open: boolean;
  children: React.ReactNode;
  confirmText: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({
  title,
  open,
  children,
  confirmText,
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <Dialog
      open={open}
      maxWidth="md"
      classes={{
        paper: 'paper',
      }}
      sx={{ padding: 0, '.paper': { borderRadius: '15px' }, filter: 'none' }}
      fullWidth
    >
      <DialogTitle
        color="black"
        variant="h1"
        sx={{ paddingLeft: 8, paddingTop: 7 }}
      >
        {title}
      </DialogTitle>
      <DialogContent sx={{ marginTop: 8, marginBottom: 14, paddingX: 11 }}>
        {children}
      </DialogContent>
      <DialogActions sx={{ paddingX: 8, gap: 5, marginBottom: 5 }}>
        <Button
          variant="contained"
          onClick={onConfirm}
          color="primary"
          sx={{
            flex: 1,
            color: 'white',
            ':hover': { backgroundColor: 'primary.dark' },
            borderRadius: '10px',
          }}
        >
          {confirmText}
        </Button>
        <Button
          variant="contained"
          onClick={onCancel}
          sx={{
            flex: 1,
            backgroundColor: 'grey.200',
            ':hover': { backgroundColor: 'grey.100' },
            borderRadius: '10px',
          }}
        >
          {cancelText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
