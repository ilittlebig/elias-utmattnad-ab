"use client"
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import DeletionDialog from '@/dashboard/components/deletionDialog';

interface DeletionDialogContextType {
  showDeletionDialog: (onAction: (id: string) => void, id: string) => void;
  hideDeletionDialog: () => void;
}

const DeletionDialogContext = createContext<DeletionDialogContextType>({
  showDeletionDialog: () => {},
  hideDeletionDialog: () => {}
});

interface DeletionDetails {
  onAction: ((id: string) => void) | null;
  id: string | null;
}

interface DeletionDialogProviderProps {
  children: React.ReactNode;
}

export const DeletionDialogProvider = ({ children }: DeletionDialogProviderProps) => {
  const [isDeletionDialogVisible, setIsDeletionDialogVisible] = useState(false);
  const [deletionDetails, setDeletionDetails] = useState<DeletionDetails>({ onAction: null, id: null });

  const showDeletionDialog = (
    onAction: (id: string) => void,
    id: string
  ) => {
    setDeletionDetails({ onAction, id });
    setIsDeletionDialogVisible(true);
  };

  const hideDeletionDialog = () => {
    setDeletionDetails({ onAction: null, id: null });
    setIsDeletionDialogVisible(false);
  };

  return (
    <DeletionDialogContext.Provider value={{ showDeletionDialog, hideDeletionDialog }}>
      {isDeletionDialogVisible && (
        <DeletionDialog
          onClose={hideDeletionDialog}
	  onAction={deletionDetails.onAction ?? (() => {})}
          itemId={deletionDetails.id ?? ""}
        />
      )}
      {children}
    </DeletionDialogContext.Provider>
  );
};

export const useDeletionDialog = () => {
  const context = useContext(DeletionDialogContext);
  if (!context) {
    throw new Error("useDeletionDialog must be used within a DeletionDialogProvider");
  }
  return context;
};
