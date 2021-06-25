# Specificera att vi vill bygga ovanpå image som inkluderar node runtime
FROM node:14

# Skapa katalogen för vår applikation och gör denna till aktiva katalogen,
# vilket innebär att kommandona som följer är relaterat denna
# (ungefär som att köra "md" följt av "cd")
WORKDIR /usr/src/app

# Kopiera över alla filer i katalogen in under /usr/src/app
COPY . .

# Installera beroenden
RUN npm install

# Öppna upp port 3000 - samma port som vår webbapplikation kör på
EXPOSE 3000

# Kör kommando "node start" i samband med att container startar
CMD [ "npm", "start" ]
