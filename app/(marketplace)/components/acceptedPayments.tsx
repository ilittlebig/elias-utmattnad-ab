import Image from 'next/image'

const AcceptedPayments = () => {
  const payments = [
    "mc_symbol.svg",
    "Visa.svg",
    "PayPal.svg",
    "Google_Pay.svg",
    "Apple_Pay.svg",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {payments.map((payment, index) => (
	<div key={index} className="flex justify-center bg-white rounded-md w-16 h-10 items-center">
	  <div className="relative w-12 h-8">
	    <Image
	      src={`/payments/${payment}`}
	      fill
	      style={{ objectFit: "contain" }}
	      alt="Accepted Payment Logo"
	    />
	  </div>
	</div>
      ))}
    </div>
  )
}

export default AcceptedPayments;
