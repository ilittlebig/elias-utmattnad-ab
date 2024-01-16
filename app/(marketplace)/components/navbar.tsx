"use client"
import { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useCartContext } from '@/contexts/cartContext'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'

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
  const { toggleCart, getTotalItemCount } = useCartContext();
  const controls = useAnimation();

  const links: Link[] = [
    { label: "Hem", href: "/" },
    { label: "Produkter", href: "/products/all" },
    { label: "Om Oss", href: "/about" },
    { label: "Kontakta", href: "/contact" },
  ];

  const navbarVariants = {
    initial: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "none",
      borderBottom: "0px solid"
    },
    scrolled: {
      backgroundColor: "#FFFFFF",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      controls.start(window.scrollY > 100 ? "scrolled" : "initial");
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className="min-h-[90px] sticky top-0 z-[100]"
      animate={controls}
      initial="initial"
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex items-center py-2 px-4 lg:px-0 lg:justify-between w-full min-h-[90px] max-w-6xl mx-auto">
	<div className="flex gap-x-4 justify-center items-center pointer-events-none">
	  <div className="lg:hidden py-3 z-50 pointer-events-auto">
	    <Hamburger
	      toggled={isMenuOpen}
	      toggle={setMenuOpen}
	      size={24}
	    />
	  </div>

	  <Link key="Logo" href="/" className="lg:relative absolute w-screen lg:w-auto left-0 justify-center lg:justify-start flex items-center h-[25px] pointer-events-none">
	    <div className="flex items-center gap-x-3 pointer-events-auto">
	      <Image
		src="/TuftingGun.svg"
		width={56}
		height={42}
		alt="Tufting Gun"
	      />

	      <label className="text-base text-black font-semibold cursor-pointer flex-shrink-0 hidden lg:block">
		Elias Mattor
	      </label>
	    </div>
	  </Link>
	</div>

	<div className="lg:flex hidden lg:gap-x-8 justify-center absolute h-[25px] w-full max-w-6xl pointer-events-none items-center">
	  <div className="lg:flex hidden gap-x-8">
	    {links.map((link, index) => (
	      <Link
		key={index}
		href={link.href}
	  	className="h-[25px] hover:text-primary text-black transition-text duration-300 pointer-events-auto text-base font-semibold"
	      >
		{link.label}
	      </Link>
	    ))}
	  </div>
	</div>

	<div className="flex gap-x-8 items-center justify-end w-full lg:w-auto">
	  <div className="flex lg:gap-x-6 gap-x-3 items-center">
	    <Button
	      actionText="Designa Din Matta"
	      className="lg:hidden hidden text-md px-6 py-3"
	    />

	    <div onClick={toggleCart} className="cursor-pointer relative w-8 h-8">
	      <HiOutlineShoppingBag className="w-8 h-8 text-black stroke-[1.25px]" />

	      <div className="absolute -bottom-2 lg:-right-2 bg-red-500 rounded-full h-6 w-6 flex items-center justify-center text-white">
		<span className="text-xs font-semibold">
		  {getTotalItemCount()}
		</span>
	      </div>
	    </div>

	    <Link href="/login/identifier" className="relative w-8 h-8">
	      <HiOutlineUser className="w-8 h-8 text-black stroke-[1.25px]" />
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
    </motion.div>
  );
}

export default Navbar;
