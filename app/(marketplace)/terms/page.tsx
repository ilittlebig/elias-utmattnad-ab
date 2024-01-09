import Legal, { Legality } from '@/(marketplace)/components/legal/index'

const TermsOfServicePage = () => {
  const terms: Legality[] = [
    {
      title: "Inledning",
      description: `Välkommen till Elias Utmattad AB:s (\"Elias Mattor\") webbplats som finns på www.eliasmattor.se (\"Webbplatsen\"). Elias Utmattad AB tillhandahåller denna Webbplats som en tjänst till våra kunder. Vänligen läs följande användarvillkor (\"Villkor\") då de styr din användning av vår Webbplats och våra tjänster och innehåll som är tillgängliga via vår Webbplats. För att göra dessa Villkor lättare att läsa, kallas Webbplatsen och våra tjänster och innehåll gemensamt för \"Tjänsterna.\"

Genom att använda våra Tjänster godkänner du att vara bunden av dessa Villkor. Om du inte godkänner att vara bunden av dessa Villkor, ska du inte använda Tjänsterna.

Vi kan uppdatera Villkoren när som helst. Om vi gör det, kommer vi att meddela dig antingen genom att publicera de uppdaterade Villkoren på Webbplatsen eller genom andra kommunikationer. Det är viktigt att du granskar Villkoren varje gång vi uppdaterar dem eller du använder Tjänsterna. Om du fortsätter att använda Tjänsterna efter att vi har publicerat uppdaterade Villkor, godkänner du att vara bunden av de uppdaterade Villkoren. Om du inte godkänner att vara bunden av de uppdaterade Villkoren, då får du inte längre använda Tjänsterna. Eftersom våra Tjänster utvecklas över tid kan vi ändra eller upphöra med alla eller delar av Tjänsterna, när som helst och utan förvarning, efter eget gottfinnande.

VIKTIGT: NÄR DU GODKÄNNER DESSA VILLKOR, GODKÄNNER DU ATT LÖSA DINA TVISTER MED OSS PÅ INDIVIDUELL BASIS GENOM SLUTGILTIG OCH BINDANDE SKILJEDOM, SÅFRAMT DU INTE VÄLJER ATT INTE DELTA I SKILJEDOM INOM 30 DAGAR ELLER TVISTEN ÄR UNDANTAGEN FRÅN SKILJEDOM, SOM YTTERLIGARE BESKRIVS I AVSNITTET OM TVISTLÖSNING NEDAN. VÄNLIGEN GRANSKA AVSNITTET OM TVISTLÖSNING NEDAN FÖR DETALJER OM SKILJEDOM OCH HUR DU VÄLJER ATT INTE DELTA.`
    },
    {
      title: "Medlemskap och Behörighet",
      description: `Elias Utmattad AB är en passionerad tillverkare av unika, handgjorda mattor. Vårt engagemang ligger i att skapa varje matta med omsorg och precision, vilket garanterar en distinkt och personlig produkt för varje kund. För att köpa våra produkter, kan du registrera dig och skapa ett 'Konto' hos oss. Tjänsterna är tillgängliga för köp för personer som är 18 år eller äldre och som har förmåga att ingå bindande avtal. Det är viktigt att du tillhandahåller korrekt, fullständig och aktuell information för ditt konto och att du uppdaterar sådan information vid behov. Om korrekt information inte upprätthålls, kan vi behöva suspendera eller avsluta ditt konto. Du godkänner att inte avslöja ditt lösenord för kontot till någon och att du omedelbart meddelar oss om obehörig användning av ditt konto. Du är ansvarig för alla aktiviteter som utförs under ditt konto, oavsett om du är medveten om dem eller inte.`
    },
    {
      title: "Betalningar",
      description: "När du genomför ett köp via våra tjänster, godkänner du oss eller vår tredjepartsbetalningshanterare att debitera din betalningsmetod för sådana köp (plus eventuell tillämplig skatt och andra avgifter) som kan uppkomma i samband med ditt köp. Du ansvarar för att betala alla avgifter i tid och för att tillhandahålla en giltig betalningsmetod. Alla priser, avgifter och eventuella tillämpliga skatter och andra avgifter betalas i din valda valuta vid kassan. När du inleder ett köp via tjänsterna kommer du att ombeds att tillhandahålla vanlig faktureringsinformation såsom ditt namn, faktureringsadress och kreditkortsinformation. Du kan också behöva tillhandahålla ytterligare information för att verifiera din identitet innan du slutför din transaktion. Om du genomför köpet med en tredjepartsbetalningshanterare, gäller den hanterarens villkor för din betalningstransaktion."
    },
    {
      title: "Kundnöjdhet",
      description: "På Elias Mattor är vi engagerade i att erbjuda våra kunder produkter av hög kvalitet till låga priser. Våra produkter säljs endast online i begränsade kvantiteter och tillgänglighet. Vi har gjort vårt bästa för att så exakt som möjligt visa våra artiklar via våra tjänster. Observera dock att variationer i stil, färg, storlek, form och utseende kan förekomma. Om du inte är nöjd med ditt köp, vänligen se vår returpolicy."
    },
    {
      title: "Andra Kampanjer",
      description: "Vi förbehåller oss rätten att vägra, avbryta eller återkalla kampanjerbjudanden när som helst."
    },
    {
      title: "Användning av Tjänsterna",
      description: "Vi vill verkligen att alla ska ha en fantastisk upplevelse när de använder våra tjänster. Därför godkänner du att du inte ska göra något av följande, annars kan vi behöva avbryta eller avsluta ditt konto."
    },
    {
      title: "Internationella Beställningar",
      description: "Kunder som använder Eliasmattor.se-webbplatsen från utanför SVERIGE ansvarar för att följa sina lokala lagar och föreskrifter. När du gör en beställning och väljer en leveransadress utanför SVERIGE, blir du eller din utpekade mottagare Importör och du godkänner därmed att Elias Utmattad AB importerar varorna till ditt destinationsland på ditt uppdrag. Vidare godkänner du att Elias Utmattad AB kan delegera skyldigheten att importera varorna till en underleverantör (t.ex. en tullmäklare). När det anges på webbplatsen, kommer Elias Utmattad AB, genom egna eller tredjepartsprogramvaruverktyg, att göra sitt bästa för att beräkna och samla in tillämpliga tullar och skatter samt eventuella ytterligare avgifter i förväg, antingen vid utcheckningen eller inkluderat i produktpriset, men slutligen är du eller din utpekade mottagare som Importör ansvarig för att betala de tillämpliga tullarna, skatterna och eventuella andra importavgifter till dina lokala tullmyndigheter."
    },
    {
      title: "Feedback",
      description: "Vi välkomnar feedback, kommentarer, recensioner av de produkter du köper genom oss och förslag på förbättringar av Tjänsterna (\"Feedback\"). Du kan skicka Feedback till oss via e-post eller genom att recensera en viss produkt. Du ger oss en icke-exklusiv, världsomspännande, evig, oåterkallelig, fullt betald, royaltyfri, underlicensierbar och överförbar licens under alla immateriella rättigheter som du äger eller kontrollerar för att använda, kopiera, modifiera, skapa härledda verk baserade på och på annat sätt utnyttja Feedbacken för vilket syfte som helst."
    },
    {
      title: "Korrigering av Webbplatsfel",
      description: "Informationen på webbplatsen kan innehålla typografiska fel eller felaktigheter. Vi förbehåller oss rätten att uppdatera all information som vi anser lämplig när som helst utan föregående meddelande. Observera att sådana fel kan relatera till produktinformation, prissättning och tillgänglighet. I dessa fall har vi rätten att avsluta alla beställningar som involverar prisfel eller felaktigheter. Vi ber om ursäkt för eventuella olägenheter."
    },
    {
      title: "Ersättning",
      description: "Du går med på att ersätta och hålla Elias Utmattad AB (och dess officerare, direktörer, agenter, dotterbolag, samriskföretag och anställda) skadeslösa från alla krav eller krav samt förluster, utgifter, skador och kostnader som resultat av någon överträdelse av dessa Villkor, din användning av Tjänsterna eller någon aktivitet relaterad till ditt konto (inklusive vårdslös eller felaktig uppförande)."
    },
    {
      title: "Tredjepartslänkar",
      description: "Tjänsterna kan innehålla länkar till webbplatser eller resurser från tredje part. Vi tillhandahåller dessa länkar endast som en bekvämlighet och är inte ansvariga för innehållet, produkterna eller tjänsterna på eller tillgängliga från dessa webbplatser eller resurser eller länkar som visas på sådana webbplatser. Du erkänner ensamt ansvar för och antar alla risker som uppstår från din användning av webbplatser eller resurser från tredje part."
    },
    {
      title: "Avslutning",
      description: "Vi kan när som helst avsluta din tillgång till och användning av tjänsterna, efter eget gottfinnande, utan förvarning till dig. Du kan när som helst inaktivera tillgången till ditt konto genom att skicka ett e-postmeddelande till oss. Vid avslutning, upphörande eller avbokning av tjänster eller ditt konto kommer följande avsnitt att överleva: Användarinnehåll, Betalningar, Feedback, Garantiavstående, Ansvarsbegränsning, Tvistlösning, Tillämplig lag och Allmänna villkor."
    },
    {
      title: "Avsägelse av Garanti",
      description: "ALLT INNEHÅLL, PRODUKTER OCH TJÄNSTER PÅ WEBBPLATSEN TILLHANDAHÅLLS DIG \"SOM DE ÄR\" UTAN NÅGRA GARANTIER ELLER FÖRSÄKRINGAR. UTAN ATT BEGRÄNSA DET FÖREGÅENDE, AVSÄGER VI OSS UTTRYCKLIGEN ALLA GARANTIER OM SÄLJBARHET, LÄMPLIGHET FÖR ETT VISST ÄNDAMÅL, NJUTNING ELLER ICKE-INTRÅNG OCH ALLA GARANTIER SOM UPPSTÅR UR AFFÄRER ELLER ANVÄNDNING AV HANDEL."
    },
    {
      title: "Begränsning av Ansvar",
      description: `Varken ELIAS UTMATTAD AB eller någon annan part inblandad i att skapa, producera eller leverera tjänsterna kommer att vara ansvarig för några tillfälliga, speciella, exemplariska eller följdskador, INKLUDERANDE FÖRLORAD VINST, FÖRLUST AV DATA ELLER GOODWILL, SERVICEAVBROTT, DATORSKADA ELLER SYSTEMSVIKT ELLER KOSTNADEN FÖR ERSÄTTNINGSTJÄNSTER som uppstår i samband med DESSA VILLKOR eller från användningen AV eller oförmågan att använda Tjänsterna, oavsett om det är baserat på garanti, kontrakt, skadestånd (inklusive vårdslöshet), PRODUKTANSVAR eller någon annan rättslig teori, och oavsett om ELIAS UTMATTAD AB har informerats om möjligheten till sådan skada, ÄVEN OM ETT begränsat AVHJÄLPANDE HÄRINNAN ÄR FUNNET ATT HA MISSLYCKATS MED SITT VÄSENTLIGA SYFTE. Vissa jurisdiktioner tillåter inte uteslutning eller begränsning av ansvar för följd- eller tillfälliga skador, så ovanstående begränsning kanske inte gäller för dig.

I inget fall kommer Elias Utmattad AB:s totala ansvar som uppstår ur eller i samband med DESSA VILLKOR eller från användningen AV eller oförmågan att använda Tjänsterna eller innehållet ÖVERSTIGA de belopp du har betalat till ELIAS UTMATTAD AB för användning av Tjänsterna eller innehållet ELLER TUSEN KRONOR (1000,00 kr), OM DU INTE HAR HAFT NÅGRA BETALNINGSFÖRPLIKTELSER TILL ELAIS UTMATTAD AB, SOM TILLÄMPLIGT.

DE UTELSLUTNINGAR OCH BEGRÄNSNINGAR AV SKADOR SOM ANGIVITS OVAN ÄR FUNDAMENTALA ELEMENT I GRUNDEN FÖR AVTALET MELLAN ELAIS UTMATTAD AB OCH DIG.`
    },
    {
      title: "Tvistlösning",
      description: `Vårt mål på Elias Utmattad AB är att tillhandahålla utmärkt service, och vi strävar efter att lösa eventuella meningsskiljaktigheter du kan ha med oss på ett smidigt sätt. Om vi inte lyckas lösa en tvist genom direkt dialog, går du och vi med på att ta följande steg för att lösa tvisten:

Vi börjar med att försöka lösa tvisten genom förhandling. Om detta inte leder till en lösning, kan vi använda en medlare för att hjälpa till att nå en överenskommelse.

Om förhandling och medling inte leder till en lösning, kan vi välja att använda skiljedom som en alternativ tvistlösningsmetod. Detta innebär att en oberoende skiljedomare eller en skiljedomspanel kommer att utvärdera tvisten och fatta ett bindande beslut. Skiljedom följer Sveriges skiljedomsregler och lagar.

Om tvisten inte kan lösas genom förhandling, medling eller skiljedom, har du rätt att ta tvisten till allmän domstol i Sverige.

Du går med på att lösa dina tvister med oss på en individuell basis och inte som en del av en grupp- eller klassåtgärd. Vi överensstämmer att göra detsamma.

För att inleda en tvistlösningsprocess, vänligen kontakta oss direkt. Vi kommer att tillhandahålla ytterligare instruktioner och information om hur vi kan gå vidare med att lösa tvisten på ett för båda parter tillfredsställande sätt.`
    },
    {
      title: "Tillämplig Lag",
      description: "Dessa Villkor och alla åtgärder relaterade till dem ska styras av svensk lag, utan hänsyn till dess lagvalsregler."
    },
    {
      title: "Allmänna Villkor",
      description: `Dessa Villkor utgör hela och exklusiva förståelsen och överenskommelsen mellan Elias Utmattad AB och dig avseende Tjänsterna och Innehållet, och dessa Villkor upphäver och ersätter alla tidigare muntliga eller skriftliga förståelser eller avtal mellan Elias Utmattad AB och dig avseende Tjänsterna och Innehållet. Om någon bestämmelse i dessa Villkor anses ogiltig eller icke verkställbar (antingen av en skiljeman utsedd enligt villkoren i avsnittet \"Tvistlösning\" ovan eller av behörig domstol, men endast om du i tid väljer att inte delta i skiljedom genom att skicka ett opt-out-mejl enligt villkoren ovan), ska den bestämmelsen verkställas i största möjliga utsträckning och de övriga bestämmelserna i dessa Villkor förblir fullt giltiga och i kraft. Du får inte överlåta eller överföra dessa Villkor, vare sig genom lagens kraft eller på annat sätt, utan Elias Utmattad AB:s tidigare skriftliga samtycke. Varje försök från din sida att överlåta eller överföra dessa Villkor utan sådant samtycke är ogiltigt. Elias Utmattad AB får fritt överlåta eller överföra dessa Villkor utan restriktioner. Med förbehåll för ovanstående kommer dessa Villkor att binda och tillfalla fördel för parterna, deras efterträdare och tillåtna tilldelningsmottagare.

Alla meddelanden eller annan kommunikation som tillhandahålls av Elias Utmattad AB enligt dessa Villkor, inklusive de som gäller ändringar av dessa Villkor, kommer att ges: (i) via e-post; eller (ii) genom att publiceras på Tjänsterna. För meddelanden som görs via e-post anses mottagningsdatumet vara det datum då sådant meddelande sänds.

Elias Utmattad AB:s underlåtenhet att verkställa någon rättighet eller bestämmelse i dessa Villkor ska inte anses vara ett avstående från sådan rättighet eller bestämmelse. Avståendet från någon sådan rättighet eller bestämmelse kommer endast att vara effektivt om det är skriftligt och undertecknat av en behörigt auktoriserad representant för Elias Utmattad AB. Förutom som uttryckligen anges i dessa Villkor, kommer utövandet av någon av parternas rättigheter enligt dessa Villkor inte att påverka dess andra rättigheter enligt dessa Villkor eller annars.`
    },
    {
      title: "Kontaktinformation",
      description: "För frågor om dessa användarvillkor, kontakta oss på kontakt@eliasmattor.se."
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
