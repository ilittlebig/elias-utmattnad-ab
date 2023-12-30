import CompanyCard from '@/(marketplace)/components/companyCard'

const TrustedBySection = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 w-full pt-32">
      <label className="font-bold font-rockwell text-2xl">
	Stolta Leverantörer till Dessa Företag
      </label>

      <div className="flex flex-wrap justify-center gap-6">
        <CompanyCard image="MIO.svg" />
        <CompanyCard image="ikea.svg" />
        <CompanyCard image="ICA.svg" />
        <CompanyCard image="Coop.svg" />

        <CompanyCard image="ICA.svg" />
        <CompanyCard image="Hemkop.svg" />
        <CompanyCard image="Amazon.svg" />
        <CompanyCard image="ikea.svg" />
      </div>
    </div>
  )
}

export default TrustedBySection;
