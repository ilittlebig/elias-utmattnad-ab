import Link from 'next/link'
import Image from 'next/image'

interface Link {
  label: string,
  href: string
}

type MenuProps = {
  toggled: boolean,
  children: Link[],
  onToggle: () => void
}

const HamburgerMenu = ({ toggled, children, onToggle }: MenuProps) => {
  const handleMenuItemClick = () => {
    onToggle();
  };

  return (
    <div className="lg:hidden">
      <div onClick={onToggle} className={`
	${toggled ? 'opacity-100 visible' : 'opacity-0 invisible'}
	absolute
	right-0
	top-0
	w-full
	transition-opacity
	duration-300
	ease-in-out
	backdrop-blur-md
	bg-black/50
	h-screen
	z-20`
      }/>

      <div className={`
	${toggled ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
	bg-white
	absolute
	left-0
	top-0
	transition-transform
	duration-300
	ease-in-out
	w-[90%]
	h-screen
	z-20`
      }>
	<div className="flex flex-col font-rockwell px-8 justify-between h-full pt-5 pb-8">
	  <div className="flex flex-col gap-y-8">
	    <div className="text-2xl font-bold px-12">
	      Sidor
	    </div>

	    <div className="flex flex-col gap-y-8">
	      <div className="flex flex-col gap-y-3">
		<div onClick={handleMenuItemClick} className="flex flex-col font-rockwell gap-y-2">
		  {children.map((link, index) => (
		    <Link key={index} href={link.href} className="text-xl">
		      {link.label}
		    </Link>
		  ))}
		</div>
	      </div>

	      <Link key="CTA5" href="/" className="font-rockwell text-xl text-center text-white bg-primary rounded-md px-4 py-3">
		Designa Din Matta
	      </Link>
	    </div>
	  </div>

	  <div className="flex mx-auto relative w-[110px] h-[90px]">
	    <Image
	      src="/logo.svg"
	      layout="fill"
	      objectfit="contain"
	      alt="Logo"
	    />
	  </div>
	</div>
      </div>
    </div>
  )
}

export default HamburgerMenu;
