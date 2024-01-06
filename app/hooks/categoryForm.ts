import useGenericForm from '@/hooks/genericForm'

export type CategoryDetails = {
  name: string,
  href: string,
  description: string
};

const useCategoryForm = (initialState: CategoryDetails = {
  name: "",
  href: "",
  description: ""
}) => {
  return useGenericForm<CategoryDetails>(initialState);
}

export default useCategoryForm;
