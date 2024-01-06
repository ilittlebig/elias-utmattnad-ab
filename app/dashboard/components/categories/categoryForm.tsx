"use client"
import { useState, useEffect } from 'react'
import { CategoryDetails } from '@/hooks/categoryForm'

import InputForm from '@/components/inputForm'
import FileDrop from '@/dashboard/components/fileDrop'

type FormProps = {
  onFormChange?: (fieldId: string, newValue: string) => void
  categoryDetails: CategoryDetails
};

const CategoryForm = ({
  onFormChange,
  categoryDetails
}: FormProps) => {
  return (
    <div className="flex flex-col gap-y-8 rounded-md border bg-white w-full p-6">
      <div className="flex justify-between items-center">
	<div className="flex flex-col">
	  <div className="font-semibold text-lg">
	    Ladda upp bild
	  </div>
	  <div className="text-md font-medium text-gray-500">
	    Välj en bild som visar produkten.
	  </div>
	</div>

	<div className="font-semibold text-2xl">
	  #37802
	</div>
      </div>

      <div className="w-full border" />

      <div className="flex flex-col w-full font-medium gap-y-4">
	<InputForm
	  id="name"
	  htmlFor="name"
	  label="Namn"
	  text={categoryDetails.name}
	  type="text"
	  required
	  onChange={onFormChange}
	/>

	<InputForm
	  id="href"
	  htmlFor="href"
	  label="Href"
	  text={categoryDetails.href}
	  type="text"
	  required
	  onChange={onFormChange}
	/>

	<InputForm
	  id="description"
	  htmlFor="description"
	  label="Beskrivning"
	  text={categoryDetails.description}
	  type="text"
	  required
	  onChange={onFormChange}
	/>
      </div>
    </div>
  )
}

export default CategoryForm;
