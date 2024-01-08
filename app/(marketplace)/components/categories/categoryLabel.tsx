import { useParams } from 'next/navigation'

type CategoryLabelProps = {
  label: string,
  href: string
}

const CategoryLabel = ({ label, href }: CategoryLabelProps) => {
  const { category } = useParams();
  const isSelected = href === category;

  return (
    <label role="button" className={`${isSelected ? "text-primary" : ""} text-xs hover:underline transition-transform duration-300 hover:translate-x-1`}>
      {label}
    </label>
  )
}

export default CategoryLabel;
