# Hotel_Booking

## Pershkrimi i Projektit

Platforma e rezervimeve hoteliere është një web aplikacion që lejon përdoruesit të shikojne hotelet në destinacionet e tyre të preferuara, të kryejnë rezervime dhe të menaxhojnë akomodimet e tyre. 

## Implementimi i ORM dhe Migrimeve të Bazës së të Dhënave

Ky projekt përdor MongoDB si bazë të të dhënave dhe implementon një sistem ORM (Object-Relational Mapping) për të manipuluar dhe menaxhuar të dhënat. Këtu do të dokumentojmë procesin e zhvillimit dhe vendimet kyçe të marra gjatë këtij procesi.

Teknologjitë e Përdorura
Baza e të Dhënave: MongoDB
Përzgjedhëm MongoDB për shkak të fleksibilitetit të tij dhe aftësisë për të punuar me dokumente të shumta në një koleksion.

ORM: Mongoose
Përzgjedhëm Mongoose sepse është një mjet modelimi objekti për MongoDB i projektuar për të punuar në një mjedis asinkron si Node.js. Ai ofron një zgjidhje të drejtpërdrejtë, bazuar në shkema për të modeluar të dhënat dhe për të ndërvepruar me bazën e të dhënave.

Migrime
Ne nuk kemi përdorur ndonjë librari specifike për migrimet për Mongoose, pasi ka opsione të kufizuara të disponueshme. Në vend të kësaj, kemi krijuar skripta për të menaxhuar migrimet. Kemi krijuar skripta të ndara për të bërë update skemat dhe për të modifikuar të dhënat.

Skriptat e Migrimit
Ne kemi krijuar skriptat e migrimit të mëposhtme:

migration-v1-createadress.ts: Ky migrim krijon një fushë adresë në koleksionin e përdoruesve.
migration-v2-createphonehumber.ts: Ky migrim krijon një fushë numër telefoni në koleksionin e përdoruesve.
migration-v3-createdescription.ts: Ky migrim krijon një fushë përshkrim në koleksionin e hoteleve.
migration-v4-addrating.ts: Ky migrim krijon një fushë vlerësimi në koleksionin e hoteleve.

Për shembull, nëse dëshironjme të ekzekutojm skripten e migrimit të dytë, përdorim komandën e mëposhtme:

```bash
npx ts-node src/migrations/migration-v2-createphonehumber.ts
```

Skripta e migrimit do të lidhet me bazën e të dhënave MongoDB, do të updetojë koleksionin e përdoruesve për të vendosur fushën e numrit të telefonit në null, dhe pastaj do të ndërpritë lidhjen nga baza e të dhënave.

Nëse kemi nevojë për të kthyer prapa migrimin, mund të ekzekutojme funksionin down në të njëjtën mënyrë:

```bash
npx ts-node src/migrations/migration-v2-createphonehumber.ts down
```

Kjo do të updetojë koleksionin e përdoruesve për të hequr fushën e numrit të telefonit.

Ky README dokumenton procesin e implementimit të ORM dhe migrimeve të bazës së të dhënave në projektin tonë. Përmes përdorimit të Mongoose dhe migrimeve të bazës së të dhënave, kemi mundësuar një zhvillim të qëndrueshëm dhe fleksibël të aplikacionit tonë.




