import Image from 'next/image'
import Term from './term'

export interface Legality {
  title: string,
  description: string
}

type LegalProps = {
  title: string,
  legalities: Legality[],
  imagePath: string
}

const Legal = ({ title, legalities, imagePath}: LegalProps) => {
  return (
    <div className="flex pt-8 pb-16">
      <div className="flex flex-col mx-auto gap-y-6">
	<h1 className="text-2xl">
	  {title}
	</h1>

	{legalities.map((term) => (
	  <Term
	    title={term.title}
	    description={term.description}
	  />
	))}
      </div>
    </div>
  )
}

export default Legal;
