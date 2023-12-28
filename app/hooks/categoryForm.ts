import { useState, useCallback, useEffect, useRef } from 'react'
import deepEqual from '@/utils/deepEqual'

export type CategoryDetails = {
  name: string,
  href: string
};

const useCategoryForm = (initialState: CategoryDetails = {
  name: "",
  href: ""
}) => {
  const [categoryDetails, setCategoryDetails] = useState<CategoryDetails>(initialState);

  const [isFormValid, setFormValid] = useState<boolean>(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const isInitialized = useRef(false);

  const isValueEqual = (value1: any, value2: any) => {
    const isBothNumber =
      typeof value1 === "number" &&
      typeof value2 === "number";
    const isEqual = isBothNumber ?
      value1 === value2 :
      String(value1).trim() === String(value2).trim();
    return isEqual;
  };

  const resetForm = () => {
    setCategoryDetails(initialState);
  };

  const resetIsChanged = () => {
    setIsChanged(false);
  };

  const checkIfChanged = (newDetails: CategoryDetails) => {
    if (!initialState)
      return;

    return Object.keys(newDetails).some(key => {
      const initialValue = initialState[key as keyof CategoryDetails];
      const currentValue = newDetails[key as keyof CategoryDetails];
      return !isValueEqual(initialValue, currentValue);
    });
  };

  const handleFormChange = useCallback((fieldId: keyof CategoryDetails, newValue: string | number) => {
    const numberFields = ["rating", "inventory", "price"];
    const value = numberFields.includes(fieldId) ? Number(newValue) : newValue;

    setCategoryDetails(prevDetails => {
      const newDetails = {
	...prevDetails,
	[fieldId]: value
      };

      const hasChanged = checkIfChanged(newDetails);
      setIsChanged(hasChanged);
      return newDetails;
    });
  }, [initialState]);

  const handleDropdownChange = useCallback((selection: string) => {
    setCategoryDetails(prevDetails => {
      const newDetails = {
	...prevDetails,
	category: selection
      };

      const hasChanged = checkIfChanged(newDetails);
      setIsChanged(hasChanged);
      return newDetails;
    });
  }, [initialState]);

  useEffect(() => {
    if (categoryDetails && typeof categoryDetails === "object") {
      const isValid = Object.values(categoryDetails).every(value => value !== "");
      setFormValid(isValid);
    } else {
      setFormValid(false);
    }
  }, [categoryDetails]);

  useEffect(() => {
    if (!isInitialized.current && initialState) {
      setCategoryDetails(initialState);
      isInitialized.current = true;
    }
  }, [initialState]);

  return { categoryDetails, resetForm, resetIsChanged, handleFormChange, handleDropdownChange, isFormValid, isChanged };
}

export default useCategoryForm;
