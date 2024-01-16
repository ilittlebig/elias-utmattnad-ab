import Image from 'next/image'
import Link from 'next/link'
import Accordion from '@/components/accordion'
import SubscriptionForm from '@/components/subscriptionForm'

interface Child {
  label: string;
  href: string;
};

interface FooterSection {
  title: string;
  children: Child[];
};

const Footer = () => {
  const pages: FooterSection[] = [
    {
      title: "Sidor",
      children: [
	{ label: "Hem", href: "/" },
	{ label: "Produkter", href: "/products/all" },
	{ label: "Om Oss", href: "/about" },
	{ label: "Kontakta", href: "/contact" },
      ]
    },
    {
      title: "Juridiskt",
      children: [
	{ label: "Integritetspolicy", href: "/privacy" },
	{ label: "Användarvillkor", href: "/terms" },
	{ label: "Returpolicy", href: "/refund" },
      ]
    },
    {
      title: "Konto",
      children: [
	{ label: "Logga In", href: "/login/identifier" },
	{ label: "Skapa Konto", href: "/sign-up" },
      ]
    },
  ];

  return (
    <div className="absolute left-0 right-0 bg-gray-100">
      <div className="flex flex-col gap-y-8 items-center text-black">
	<div className="flex max-w-6xl lg:flex-row flex-col w-full gap-y-8 lg:justify-between lg:px-0 px-6 lg:pt-28 pt-8">
	  {pages.map((section, index) => (
	    <>
	      {/* Small Screens */}
	      <div className="lg:hidden">
		<Accordion
		  title={section.title}
		  content={
		    <div className="flex flex-col gap-y-3">
		      {section.children.map((page, index) => (
			<Link key={index} href={page.href} className="text-black text-opacity-60 hover:underline font-semibold text-base hover:text-primary">
			  {page.label}
			</Link>
		      ))}
		    </div>
		  }
		/>
	      </div>

	      {/* Large Screen */}
	      <div className="lg:block hidden flex lg:gap-x-28 justify-between">
		<div className="text-lg font-semibold">{section.title}</div>
		<div className="flex flex-col gap-y-3 pt-3">
		  {section.children.map((page, index) => (
		    <Link key={index} href={page.href} className="text-black text-opacity-60 hover:underline font-semibold text-base hover:text-primary">
		      {page.label}
		    </Link>
		  ))}
		</div>
	      </div>
	    </>
	  ))}
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
