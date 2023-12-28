import { FaChartPie } from 'react-icons/fa'
import { GrTransaction } from 'react-icons/gr'
import { FaBorderAll } from 'react-icons/fa'
import { FaCartFlatbed } from 'react-icons/fa6'
import { FaChartLine } from 'react-icons/fa6'

import Link from 'next/link'
import Image from 'next/image'

import SidebarLabel from '@/dashboard/components/sidebar/sidebarLabel'

export type LabelProps = {
  label: string,
  icon: ReactElement,
  href: string
};

const Sidebar = () => {
  const labels: LabelProps[] = [
    {
      label: "Översikt",
      href: "/dashboard/overview",
      icon: (<FaChartPie />)
    },
    {
      label: "Transaktioner",
      href: "/dashboard/transactions",
      icon: (<GrTransaction />)
    },
    {
      label: "Beställningar",
      href: "/dashboard/orders",
      icon: (<FaChartLine />)
    },
    {
      label: "Produkter",
      href: "/dashboard/products",
      icon: (<FaCartFlatbed />)
    },
    {
      label: "Kategorier",
      href: "/dashboard/categories",
      icon: (<FaBorderAll />)
    },
  ];

  return (
    <div className="flex flex-col bg-white items-center py-12 border shadow-sm h-screen min-w-[300px] border">
      <div key="Logo" className="relative w-[90px] h-[90px]">
	<Image
	  src="/logo.svg"
	  layout="fill"
	  objectfit="contain"
	  alt="Logo"
	/>
      </div>

      <div className="flex flex-col gap-y-3 py-6">
        {labels.map((label) => (
	  <SidebarLabel
	    label={label.label}
	    icon={label.icon}
	    href={label.href}
	  />
	))}
      </div>
    </div>
  )
}

export default Sidebar;
