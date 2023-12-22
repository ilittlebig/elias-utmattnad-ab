import { useParams } from 'next/navigation'

type CategoryLabelProps = {
  label: string,
  href: string
}

const CategoryLabel = ({ label, href }: CategoryLabelProps) => {
  const { category } = useParams();
  const isSelected = href === category;

  return (
    <h2
      className={`${isSelected ? "text-primary" : ""} text-lg transition-transform duration-300 hover:translate-x-1`}
      style={{ transform: 'translateX(0px)', transition: 'transform 0.3s ease' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0px)'}
    >{label}</h2>
  )
}

export default CategoryLabel;
