"use client"
import { useState } from 'react'
import { IoIosWarning } from 'react-icons/io'
import Button from '@/components/button'

type DialogProps = {
  onClose: () => void,
  onAction: (itemId: string) => void,
  itemId: string
};

const DeletionDialog = ({
  onClose, onAction, itemId
}: DialogProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleAction = async () => {
    setLoading(true);
    await onAction(itemId);
    setLoading(false);
    onClose();
  };

  return (
    <div className="flex items-center justify-center absolute w-full h-full z-20">
      <div className="absolute bg-black/50 backdrop-blur-sm w-full h-full" />
      <div className="flex flex-col gap-y-4 items-center text-center bg-white p-8 border-2 rounded-lg shadow-2xl max-w-md z-50">
      	<IoIosWarning className="w-16 h-16 text-red-500" />

	<h1 className="font-semibold text-2xl">
	  Are you sure?
	</h1>
	<p className="font-regular text-lg text-gray-500 max-w-sm">
	  This action cannot be undone. All values associated with this field will be lost.
	</p>

	<div className="flex gap-x-4 w-full">
	  <Button
	    actionText="Cancel"
	    className="text-lg py-3 border-2 border-gray-400"
	    onClick={onClose}
	    noBackground
	    fill
	    instantAction
	  />

	  <Button
	    actionText="Yes, delete it"
	    className="text-lg py-3"
	    onClick={handleAction}
	    isLoading={isLoading}
	    destructive
	    fill
	  />
	</div>
      </div>
    </div>
  )
}

export default DeletionDialog;
