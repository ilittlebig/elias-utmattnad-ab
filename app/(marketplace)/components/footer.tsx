import Image from 'next/image'
import Link from 'next/link'
import SubscriptionForm from '@/components/subscriptionForm'

interface Link {
  label: string,
  href: string
}

const Footer = () => {
  const pages: Link[] = [
    { label: "Hem", href: "/" },
    { label: "Produkter", href: "/products/all" },
    { label: "Om Oss", href: "/about" },
    { label: "Kontakta", href: "/contact" },
  ];

  const legalities: Link[] = [
    { label: "Integritetspolicy", href: "/privacy" },
    { label: "Användarvillkor", href: "/terms" },
    { label: "Returpolicy", href: "/refund" },
  ];

  const account: Link[] = [
    { label: "Logga In", href: "/login/identifier" },
    { label: "Skapa Konto", href: "/sign-up" },
  ];

  return (
    <div className="absolute left-0 right-0 bg-gray-100">
      <div className="flex flex-col gap-y-8 items-center text-black">
	<div className="flex max-w-6xl lg:flex-row flex-col w-full gap-y-12 lg:justify-between lg:px-0 px-4 pt-28">
	  <div className="flex lg:gap-x-28 lg:justify-between gap-x-20 justify-center lg:justify-start">
	    {/* Pages */}
	    <div className="flex flex-col gap-y-3 flex-shrink-0">
	      <div className="text-lg font-semibold">Sidor</div>
	      {pages.map((page, index) => (
		<Link key={index} href={page.href} className="text-black text-opacity-60 hover:underline font-semibold text-base hover:text-primary">
		  {page.label}
		</Link>
	      ))}
	    </div>

	    {/* Legal */}
	    <div className="flex flex-col gap-y-3 flex-shrink-0">
	      <div className="text-lg font-semibold">Juridiskt</div>
	      {legalities.map((legal, index) => (
		<Link key={index} href={legal.href} className="text-black text-opacity-60 hover:underline font-semibold text-base hover:text-primary">
		  {legal.label}
		</Link>
	      ))}
	    </div>

	    {/* Account */}
	    <div className="flex flex-col gap-y-3 flex-shrink-0">
	      <div className="text-lg font-semibold">Konto</div>
	      {account.map((acc, index) => (
		<Link key={index} href={acc.href} className="text-black text-opacity-60 font-semibold hover:underline hover:text-primary">
		  {acc.label}
		</Link>
	      ))}
	    </div>
	  </div>
	  <SubscriptionForm />
	</div>

	<div className="mt-8 w-full border" />

	<div className="flex flex-col gap-y-4 pb-8 max-w-sm lg:max-w-none">
	  <div className="text-black text-opacity-60 text-base font-semibold text-center">
	    © 2024 Elias Utmattad AB. Alla rättigheter förbehållna.
	  </div>
	</div>
      </div>
    </div>
  )
}

export default Footer;
