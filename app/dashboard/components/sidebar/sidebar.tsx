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
  icon: React.ReactElement,
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
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Logo"
	/>
      </div>

      <div className="flex flex-col py-6 px-2 w-full items-center">
        {labels.map((label, index) => (
	  <SidebarLabel
	    key={index}
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
