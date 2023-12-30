"use client"
import { ReactElement } from 'react'
import { usePathname } from 'next/navigation'
import { LabelProps } from '@/dashboard/components/sidebar/sidebar'

import Link from 'next/link'

const SidebarLabel = ({ label, icon, href }: LabelProps) => {
  const pathname = usePathname();
  const isSelected = href === pathname;

  return (
    <Link href={href} className="w-full">
      <div className={`flex items-center ${isSelected ? "bg-primary" : "text-gray-400"} rounded-md w-full py-2`}>
        <div className="flex w-full justify-start pl-6"> {/* Adjust padding as needed */}
          <div className="flex items-center w-12 mr-4"> {/* Container for icon alignment */}
            {icon}
          </div>
          <span className="text-xl font-medium hover:underline">
            {label}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SidebarLabel;
