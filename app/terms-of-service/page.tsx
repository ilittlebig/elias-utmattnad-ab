import Legal from '@/components/legal/index'

interface Legality {
  title: string,
  description: string
}

const TermsOfServicePage = () => {
  const terms: Legality[] = [
    {
      title: "Inledning",
      description: "Välkommen till Elias Utmattnad AB. Genom att använda vår hemsida och våra tjänster godkänner du dessa användarvillkor."
    },
    {
      title: "Om Våra Produkter",
      description: "Elias Utmattnad AB erbjuder unika, handtuftade mattor. Varje produkt är unikt skapad och kan variera något i design och färg."
    },
    {
      title: "Användning av Webbplatsen",
      description: "Du åtar dig att inte missbruka webbplatsen eller dess innehåll. Allt material på sidan, inklusive bilder och design, är skyddat av upphovsrättsliga lagar."
    },
    {
      title: "Köp och Beställningar",
      description: "När du genomför ett köp på vår webbplats, ingår du ett bindande avtal. Se till att du noggrant granskar din beställning innan du bekräftar köpet."
    },
    {
      title: "Priser och Betalning",
      description: "Alla priser visas i svenska kronor. Betalning sker genom de betalningsmetoder som finns tillgängliga på webbplatsen."
    },
    {
      title: "Leverans och Frakt",
      description: "Vi levererar till hela världen. Leveranstider kan variera och är endast uppskattningar."
    },
    {
      title: "Återbetalningar och Returer",
      description: "Om du inte är nöjd med din produkt, har du rätt att returnera varan inom 14 dagar från mottagandet, under förutsättning att den är i oförändrat skick."
    },
    {
      title: "Ansvarsbegränsning",
      description: "Elias Utmattnad AB ansvarar inte för indirekta förluster som uppstår som en följd av användningen av vår webbplats eller våra produkter."
    },
    {
      title: "Ändringar av Användarvillkoren",
      description: "Vi förbehåller oss rätten att när som helst ändra dessa användarvillkor. Den senaste versionen finns alltid tillgänglig på vår webbplats."
    },
    {
      title: "Kontaktinformation",
      description: "För frågor om dessa användarvillkor, kontakta oss på elias@jamee.se"
    },
  ];

  return (
    <Legal
      title="Användarvillkor"
      legalities={terms}
      imagePath="/hero.png"
    />
  )
}

export default TermsOfServicePage;
