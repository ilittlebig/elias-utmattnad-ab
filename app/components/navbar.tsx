"use client"
import { FC, useState } from 'react'
import { useCart } from '@/hooks/cart'
import { useScrolling } from '@/hooks/scrolling'

import Link from 'next/link'
import Image from 'next/image'
import Hamburger from 'hamburger-react'

import Cart from '@/components/cart/index'
import HamburgerMenu from '@/components/hamburgerMenu'

interface Link {
  label: string,
  href: string
}

const Navbar: FC = () => {
  const links: Link[] = [
    { label: "Hem", href: "/" },
    { label: "Produkter", href: "/products/all" },
    { label: "Om Oss", href: "/about" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const { getTotalItemCount } = useCart();
  const { toggleScrolling } = useScrolling(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleCart = (onlyScroll) => {
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
	    layout="fill"
	    objectfit="contain"
	    alt="Logo"
	  />
	</Link>
      </div>

      <div className="flex gap-x-8 items-center w-full lg:w-auto">
	{/* Links */}
	<div className="lg:flex hidden gap-x-8">
	  {links.map((link, index) => (
	    <Link key={index} href={link.href} className="font-rockwell hover:underline text-base hover:text-primary">
	      {link.label}
	    </Link>
	  ))}
	</div>

	{/* Call To Action */}
	<Link key="CTA1" href="/" className="font-rockwell hidden lg:block text-white bg-primary hover:bg-primary-hover rounded-md px-4 py-3">
	  Designa Din Matta
	</Link>

	<div className="w-full lg:hidden" />

	{/* Shopping Cart Button */}
	<div
	  onClick={() => setCartOpen(!isCartOpen)}
	  className="relative lg:w-6 lg:h-6 w-8 h-8 lg:px-0 px-12"
	>
	  <Image
	    src="/shoppingBag.png"
	    layout="fill"
	    objectFit="contain"
	    alt="Shopping Bag"
	  />
	  <div className="absolute -bottom-2 lg:-right-2 bg-red-500 rounded-full h-6 w-6 flex items-center justify-center text-white">
	    <span className="text-xs font-rockwell pt-1">
	      {getTotalItemCount()}
	    </span>
	  </div>
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
