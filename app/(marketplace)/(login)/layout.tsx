import Link from 'next/link'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center">
      {children}

      <div className="flex text-sm gap-x-4 -mt-16 py-4">
	<Link href="/terms" className="hover:underline text-primary">
	  Användarvillkor
	</Link>

	<label className="text-lg">|</label>

	<Link href="/privacy" className="hover:underline text-primary">
	  Integritetspolicy
	</Link>
      </div>
    </div>
  )
}
