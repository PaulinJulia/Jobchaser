# Jobchaser

```
https://github.com/PaulinJulia/jobchaser
```

## Description

This project is meant to be a tool for students to find internships or jobs. You can search through the ads, sort by location, be linked to the fully ad by clicking on the card. You can also mark an ad as a favorite and save it to your own page. By signing in you can review all your favorite ads. 

## Strengths and weaknesses

In this project, I see the strength in the process. The project started for example with CSS modules and later added on tailwind, it was first written in Javascript and later in the process transformed to Typescript. It started with the hook useReducer and later the Redux toolkit. All updates have been messy but also educative.  

I see improvement opportunities such as using destructering more as props. I think the documentation of the API could have been more clear to be able to use the API better. The UX/UI could have been nicer and I would have loved to done more animations with Framer Motion. Unfortunately, a lot of time has been spent on favorites.

During this project, I've learned that it goes relatively fast to build applications in React. Even though there are a lot of files and dependencies to install. 

Today I better understand the power of React and using components. I like that they are reusable, easy to replace, and move around. I have also learned that the ternary operator is very useful and more about how global and local states work, and how to put the components together.

In general, the project could have been cleaner but for educational purposes, it has been good with this step-by-step method for learning React.

## Visuals

![Home page](/jobchaser.png)

## How to install

node.js - https://nodejs.org/en/download  
npm - https://www.npmjs.com/

## Usage

If you want to test basic functionality made in React, this application can be useful for you.  

## About

The project was carried out by one person for the purpose of learing and consolidate knowledge during a course in React. This project has no intention of continuing.

## Project status

This project is on hold for correcting and feedback. Feel free to pull the code and test the features.

## Support

email address: julia.paulin@chasacademy.se


## Del 4

1.Vad är Redux Toolkit?  
Det är ett bibliotek för state-management som hanterar reducers. Det skapades av Redux-teamet och bygger på Redux. Det är ett förenklat Redux, enklare att sätta upp och konfigurera. Redux toolkit erbjuder ett globalt state, där en "store" är samlingsplats som hanterar att man kan dispatcha i vilken komponent som helst. Man vill att state skall vara samlade på en plats för tydlighet och att enklare kunna ändra på. Det samma gäller för feature-logik.

2.När, i vilka situationer vill man använda Redux Toolkit?  
När man gör större applikationer där flera tillstånd behöver hanteras enhetligt över flera komponenter.

3.Beskriv typiska områden hur man använder Typescript i React? (ex props, event, useReducer, etc)  
Genom att typa props och State kan man tidigt upptäcka fel i utvecklingsprocessen. Typning av event och hooks är viktigt för att garantera korrekt användning och underlätta felhantering.

## Del 3

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
