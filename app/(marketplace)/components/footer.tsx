import Image from 'next/image'
import Link from 'next/link'
import AcceptedPayments from '@/(marketplace)/components/acceptedPayments'

interface Link {
  label: string,
  href: string
}

const Footer = () => {
  const pages: Link[] = [
    { label: "Hem", href: "/" },
    { label: "Produkter", href: "/products/all" },
    { label: "Om Oss", href: "/about" },
  ];

  const legalities: Link[] = [
    { label: "Integritetspolicy", href: "/privacy-policy" },
    { label: "Användarvillkor", href: "/terms-of-service" },
    { label: "Returpolicy", href: "/refund-policy" },
  ];

  return (
    <div className="absolute left-0 right-0 bg-gray-100">
      <div className="flex flex-col gap-y-8 items-center text-black">
	<div className="flex max-w-6xl lg:flex-row flex-col lg:justify-between gap-y-12 lg:px-0 px-4 lg:items-center gap-x-64 pt-28">
	  <div className="flex flex-col gap-y-6 items-center lg:items-start">
	    {/* Logo */}
	    <div className="flex lg:w-[389px] w-[300px] justify-center lg:justify-start">
	      <Link key="Logo" href="/">
		<Image
		  src="/logo.svg"
		  width={100}
		  height={32}
		  alt="Logo"
		/>
	      </Link>
	    </div>

	    <div className="lg:text-xl text-center lg:text-left font-medium text-lg max-w-xs">
	      Hantverk Möter Hem – Skapa Din Värld Med Oss
	    </div>

	    <AcceptedPayments />
	  </div>

	  <div className="flex lg:gap-x-28 lg:justify-between gap-x-20 justify-center lg:justify-start">
	    {/* Pages */}
	    <div className="flex flex-col gap-y-3">
	      <div className="text-2xl font-bold">Sidor</div>
	      {pages.map((page, index) => (
		<Link key={index} href={page.href} className="hover:underline font-medium text-xl hover:text-primary">
		  {page.label}
		</Link>
	      ))}
	    </div>

	    {/* Legal */}
	    <div className="flex flex-col gap-y-3">
	      <div className="text-2xl font-bold">Juridiskt</div>
	      {legalities.map((legal, index) => (
		<Link key={index} href={legal.href} className="hover:underline font-medium text-xl hover:text-primary">
		  {legal.label}
		</Link>
	      ))}
	    </div>
	  </div>
	</div>

	<div className="mt-8 w-full border" />

	<div className="pb-8 font-medium text-lg text-center">
	  © 2024 Elias Utmattad AB. Alla rättigheter förbehållna.
	</div>
      </div>
    </div>
  )
}

export default Footer;
