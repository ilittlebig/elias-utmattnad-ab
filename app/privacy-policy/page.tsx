import Legal from '@/components/legal/index'

interface Legality {
  title: string,
  description: string
}

const RefundPolicyPage = () => {
  const terms: Legality[] = [
    {
      title: "Inledning",
      description: "På Elias Utmattnad AB värdesätter vi din integritet och strävar efter att skydda dina personuppgifter i enlighet med gällande dataskyddslagar."
    },
    {
      title: "Insamling av Information",
      description: "Vi samlar in personuppgifter som du frivilligt tillhandahåller när du använder vår webbplats, exempelvis när du gör en beställning, kontaktar oss via e-post eller prenumererar på vårt nyhetsbrev. Denna information kan innefatta ditt namn, adress, e-postadress och betalningsinformation."
    },
    {
      title: "Användning av Information",
      description: "Den insamlade informationen används för att hantera beställningar, leverera produkter, hantera betalningar, kommunicera med dig om din beställning, och för att förbättra våra tjänster och din användarupplevelse."
    },
    {
      title: "Delning av Information",
      description: "Vi delar inte din personliga information med tredje parter, förutom i de fall det krävs för att fullfölja din beställning, exempelvis med leveranstjänster, eller om det krävs enligt lag."
    },
    {
      title: "Dataskydd",
      description: "Vi vidtar lämpliga säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, ändring, avslöjande eller förstörelse."
    },
    {
      title: "Dina rättigheter",
      description: "Du har rätt att begära tillgång till, ändring eller radering av dina personuppgifter. Du kan även motsätta dig viss behandling av dina uppgifter."
    },
    {
      title: "Ändringar i Integritetspolicyn",
      description: "Vi kan uppdatera denna policy från tid till annan. Den senaste versionen finns alltid tillgänglig på vår webbplats."
    },
    {
      title: "Kontaktuppgifter",
      description: "För frågor om vår integritetspolicy eller för att utöva dina rättigheter, vänligen kontakta oss på elias@jamee.se."
    },
  ];

  return (
    <Legal
      title="Integritetspolicy"
      legalities={terms}
      imagePath="/hero.png"
    />
  )
}

export default RefundPolicyPage;
