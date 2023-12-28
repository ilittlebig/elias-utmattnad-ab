import { useState, useCallback, useEffect, useRef } from 'react'
import deepEqual from '@/utils/deepEqual'

export type ProductDetails = {
  name: string,
  description: string,
  dimensions: string,
  material: string,
  category: string,
  price: string | number,
  inventory: string | number,
  rating: string | number
};

const useProductForm = (initialState: ProductDetails = {
  name: "",
  description: "",
  dimensions: "",
  material: "",
  category: "",
  price: "",
  inventory: "",
  rating: ""
}) => {
  const [productDetails, setProductDetails] = useState<ProductDetails>(initialState);

  const [isFormValid, setFormValid] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
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
    setProductDetails(initialState);
  };

  const resetIsChanged = () => {
    setIsChanged(false);
  };

  const checkIfChanged = (newDetails: ProductDetails) => {
    if (!initialState)
      return;

    return Object.keys(newDetails).some(key => {
      const initialValue = initialState[key as keyof ProductDetails];
      const currentValue = newDetails[key as keyof ProductDetails];
      return !isValueEqual(initialValue, currentValue);
    });
  };

  const handleFormChange = useCallback((fieldId: keyof ProductDetails, newValue: string | number) => {
    const numberFields = ["rating", "inventory", "price"];
    const value = numberFields.includes(fieldId) ? Number(newValue) : newValue;

    setProductDetails(prevDetails => {
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
    setProductDetails(prevDetails => {
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
    if (productDetails && typeof productDetails === "object") {
      const isValid = Object.values(productDetails).every(value => value !== "");
      setFormValid(isValid);
    } else {
      setFormValid(false);
    }
  }, [productDetails]);

  useEffect(() => {
    if (!isInitialized.current && initialState) {
      setProductDetails(initialState);
      isInitialized.current = true;
    }
  }, [initialState]);

  return { productDetails, resetForm, resetIsChanged, handleFormChange, handleDropdownChange, isFormValid, isChanged };
}

export default useProductForm;
