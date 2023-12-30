"use client"
import React, { createContext, useContext, useState } from 'react'
import DeletionDialog from '@/dashboard/components/deletionDialog'

const DeletionDialogContext = createContext<{
  showDeletionDialog: (
    onAction: (id: string) => void,
    id: string
  ) => void;
  hideDeletionDialog: () => void;
}>({
  showDeletionDialog: (
    onAction: (id: string) => void,
    id: string
  ) => {},
  hideDeletionDialog: () => {}
});

export const DeletionDialogProvider = ({ children }) => {
  const [isDeletionDialogVisible, setIsDeletionDialogVisible] = useState(false);
  const [deletionDetails, setDeletionDetails] = useState({ onAction: null, id: null });

  const showDeletionDialog = (onAction, id) => {
    setDeletionDetails({
      onAction: onAction,
      id: id
    });
    setIsDeletionDialogVisible(true);
  }

  const hideDeletionDialog = () => {
    setDeletionDetails({
      onAction: null,
      id: null
    });
    setIsDeletionDialogVisible(false);
  }

  return (
    <DeletionDialogContext.Provider value={{ showDeletionDialog, hideDeletionDialog }}>
      {isDeletionDialogVisible && (
        <DeletionDialog
	  onClose={hideDeletionDialog}
	  onAction={deletionDetails.onAction}
	  itemId={deletionDetails.id}
	/>
      )}
      {children}
    </DeletionDialogContext.Provider>
  );
}

export const useDeletionDialog = () => {
  const context = useContext(DeletionDialogContext);
  if (!context) {
    throw new Error("useDeletionDialog must be used within a DeletionDialogProvider");
  }
  return context;
};
