"use client"
import { FC, useState } from 'react'
import { useCart } from '@/hooks/cart'
import { useScrolling } from '@/hooks/scrolling'

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
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const { toggleScrolling } = useScrolling();
  const { getTotalItemCount } = useCart();

  const links: Link[] = [
    { label: "Hem", href: "/" },
    { label: "Produkter", href: "/products/all" },
    { label: "Om Oss", href: "/about" },
    { label: "Kontakta", href: "/about" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleCart = (onlyScroll: boolean) => {
    if (!onlyScroll) {
      setCartOpen(!isCartOpen);
    }
    toggleScrolling(isCartOpen);
  }

  return (
    <div className="flex items-center py-2 lg:justify-between w-full lg:w-auto max-h-[64px]">
      {/* Hamburger Menu */}
      <div className="flex items-center">
	<div className="lg:hidden py-3 pl-4 z-30">
	  <Hamburger
	    toggled={isMenuOpen}
	    toggle={setMenuOpen}
	  />
	</div>

	{/* Logo */}
	<Link key="Logo" href="/" className="relative w-[110px] h-[40px] lg:w-[91px] lg:w-[90px]">
	  <Image
	    src="/logo.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Logo"
	  />
	</Link>
      </div>

      <div className="flex gap-x-8 items-center w-full lg:w-auto">
	{/* Links */}
	<div className="lg:flex hidden gap-x-8">
	  {links.map((link, index) => (
	    <Link key={index} href={link.href} className="hover:underline text-base text-black font-medium hover:text-primary">
	      {link.label}
	    </Link>
	  ))}
	</div>

	<Button
	  actionText="Designa Din Matta"
	  href="/"
	  className="lg:hidden hidden text-md px-4 py-2"
	/>

	<div className="w-full lg:hidden" />

	<div className="flex cursor-pointer lg:gap-x-6 gap-x-3">
	  {/* Shopping Cart Button */}
	  <div
	    onClick={() => setCartOpen(!isCartOpen)}
	    className="relative lg:w-6 lg:h-6 w-8 h-8"
	  >
	    <Image
	      src="/shoppingBag.png"
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Shopping Bag"
	    />
	    <div className="absolute -bottom-2 lg:-right-2 bg-red-500 rounded-full h-6 w-6 flex items-center justify-center text-white">
	      <span className="text-xs pt-1">
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

      {/* Mobile Menu */}
      <HamburgerMenu
      	toggled={isMenuOpen}
	onToggle={toggleMenu}
	children={links}
      />

      {/* Cart */}
      <Cart
	toggled={isCartOpen}
	onToggle={toggleCart}
      />
    </div>
  );
}

export default Navbar;
