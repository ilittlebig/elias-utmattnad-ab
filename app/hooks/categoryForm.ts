import useGenericForm from '@/hooks/genericForm'

export type CategoryDetails = {
  name: string,
  href: string
};

const useCategoryForm = (initialState: CategoryDetails = {
  name: "",
  href: ""
}) => {
  return useGenericForm<CategoryDetails>(initialState);
}

export default useCategoryForm;
