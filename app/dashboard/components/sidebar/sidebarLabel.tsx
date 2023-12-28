"use client"
import { ReactElement } from 'react'
import { usePathname } from 'next/navigation'
import { LabelProps } from '@/dashboard/components/sidebar/sidebar'

import Link from 'next/link'

const SidebarLabel = ({ label, icon, href }: LabelProps) => {
  const pathname = usePathname();
  const isSelected = href === pathname;

  console.log(pathname, href);

  return (
    <div className={`flex ${isSelected ? "" : "text-gray-400"} items-center gap-x-6`}>
      {icon}
      <Link href={`${href}`} className="text-xl font-medium hover:underline">
        {label}
      </Link>
    </div>
  )
}

export default SidebarLabel;
