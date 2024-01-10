"use client"
import { FC, useState } from 'react'
import { useCartContext } from '@/contexts/cartContext'

import Link from 'next/link'
import Image from 'next/image'
import Hamburger from 'hamburger-react'

import Cart from '@/(marketplace)/components/cart/index'
import HamburgerMenu from '@/(marketplace)/components/hamburgerMenu'
import Button from '@/components/button'

interface Link {
  label: string,
  href: string
}

const Navbar: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const { toggleCart, getTotalItemCount, isCartToggled } = useCartContext();

  const links: Link[] = [
    { label: "Hem", href: "/" },
    { label: "Produkter", href: "/products/all" },
    { label: "Om Oss", href: "/about" },
    { label: "Kontakta", href: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center py-2 lg:justify-between w-full min-h-[64px]">
      <div className="flex lg:gap-x-8 items-center">
	<div className="lg:hidden py-3 pl-4 z-30">
	  <Hamburger
	    toggled={isMenuOpen}
	    toggle={setMenuOpen}
	  />
	</div>

	<div className="lg:flex hidden gap-x-8">
	  {links.map((link, index) => (
	    <Link
	      key={index}
	      href={link.href}
	      className="hover:underline text-sm text-black hover:text-primary"
	    >
	      {link.label}
	    </Link>
	  ))}
	</div>
      </div>

      <div className="absolute h-[25px] w-full max-w-6xl pointer-events-none mt-1.5">
	<Link key="Logo" href="/" className="w-[110px] h-full lg:w-[91px] lg:w-[90px]">
	  <Image
	    src="/logo.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Logo"
	  />
	</Link>
      </div>

      <div className="flex gap-x-8 items-center justify-end w-full lg:w-auto">
	<div className="flex lg:gap-x-6 gap-x-3 items-center">
	  <Button
	    actionText="Designa Din Matta"
	    className="lg:block hidden text-sm px-6 py-3"
	  />

	  <div onClick={toggleCart} className="cursor-pointer relative lg:w-6 lg:h-6 w-8 h-8">
	    <Image
	      src="/shoppingBag.png"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Shopping Bag"
	    />

	    <div className="absolute -bottom-2 lg:-right-2 bg-red-500 rounded-full h-6 w-6 flex items-center justify-center text-white">
	      <span className="text-xs">
		{getTotalItemCount()}
	      </span>
	    </div>
	  </div>

	  <Link href="/login/identifier" className="relative lg:w-6 lg:h-6 w-8 h-8 lg:px-0 pr-16">
	    <Image
	      src="/User.png"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Shopping Bag"
	    />
	  </Link>
	</div>
      </div>

      <HamburgerMenu
      	toggled={isMenuOpen}
	onToggle={toggleMenu}
	children={links}
      />

      <Cart />
    </div>
  );
}

export default Navbar;
