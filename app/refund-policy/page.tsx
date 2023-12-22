import Legal from '@/components/legal/index'

interface Legality {
  title: string,
  description: string
}

const RefundPolicyPage = () => {
  const terms: Legality[] = [
    {
      title: "Inledning",
      description: "Tack för att du väljer våra handtuftade mattor. Vi strävar efter att du ska bli helt nöjd med ditt köp. Om du av någon anledning inte är nöjd, följer här vår retur- och återbetalningspolicy."
    },
    {
      title: "Returrätt",
      description: "Du har rätt att returnera din produkt inom 14 dagar efter att du har mottagit den. För att vara berättigad till en retur måste produkten vara i samma skick som när du mottog den, oanvänd och i originalförpackningen."
    },
    {
      title: "Skadade eller Felaktiga Varor",
      description: "Om du mottar en skadad eller felaktig vara, kontakta oss omedelbart för att ordna med en ersättningsvara eller återbetalning."
    },
    {
      title: "Återbetalningsprocess",
      description: "När din retur har mottagits och inspekterats kommer vi att meddela dig om godkännande eller avslag på din återbetalning. Om den godkänns, kommer din återbetalning att behandlas, och en kredit kommer automatiskt att tillämpas på ditt ursprungliga betalningssätt, inom ett visst antal dagar."
    },
    {
      title: "Returkostnader",
      description: "Kunden är ansvarig för att betala för fraktkostnaderna för att returnera varan. Fraktkostnader är icke-återbetalningsbara. Om du mottar en återbetalning, kommer kostnaden för returfrakten att dras från din återbetalning."
    },
    {
      title: "Kontaktinformation",
      description: "Om du har några frågor om hur du returnerar din vara till oss, kontakta oss på elias@jamee.se"
    },
  ];

  return (
    <Legal
      title="Retur- och Återbetalningspolicy"
      legalities={terms}
      imagePath="/hero.png"
    />
  )
}

export default RefundPolicyPage;
