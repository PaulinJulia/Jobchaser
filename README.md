# Jobchaser

Del 3  
1.Vad menas med Reacts ekosystem?  
React-ekosystemet avser det bredare ekosystemet av verktyg, bibliotek, ramverk och gemenskap som har vuxit runt React-biblioteket. Det omfattar allt från utvecklingsverktyg och tillägg till kompletterande bibliotek och ramverk som används tillsammans med React.

2.Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form.  
Chakra UI och Material-UI som är komponentbibliotek.

3.Vad är fördelen med att använda React Hook Form?  
Det är enklare och effektivare att hantera formulär. Hantera indata, validering, felhantering på ett smidigt sätt. Är möjligtvis inte nödvändigt för ett litet formulär men mycket bra för mer omfattande formulärhantering.

4.Vad är syftet med useContext? Vilket problem med props löser den?  
useContext är en hook, ett sätt att hantera state globalt. Man kan komma åt contexten i vilken komponent som helst inom applikationen. Context kan innehålla ett state.
Varför Context?
Med useContext kan man ”teleportera” tex state till vilken komponent som helst.
Tex vid inlogg eller dark mode.

5.Vilka fördelar finns det att använda Tailwind / nackdelar?  
Fördelar:
*Allt ligger samlat, man gör CSS i samma fil som html. Man slipper selektorer.
*Kommer med ”Preflight”. En bas-css där alla element är ”nollade från början.
*Kan leda till snabb protyping, när man väl lärt sig.
*Det finns färre val vad gäller typsnittsstorlek, annan storlek, färger, skuggor men man kan också välja själv.
*Finns bra komponentbibliotek med nästan ostylade komponenter, där man kan lägga till Tailwind CSS.  
Nackdelar att det blir tjockt och ”klumpigt” i CSS:en. Tar lite tid att lära sig.
