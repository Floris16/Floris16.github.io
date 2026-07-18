# Portfolio — Gabriele Floris

Portfolio professionale multipagina, statico e senza dipendenze obbligatorie. Racconta percorso, metodo e progetti con un focus su solution design, Salesforce e delivery.

## Struttura

```text
index.html                 Home sintetica
profilo.html               Percorso, metodo e competenze
progetti.html              Indice dei progetti
progetto-*.html            Pagine dei singoli casi
assets/css/style.css       Layout, temi e responsive
assets/js/content.js       Tutti i contenuti modificabili
assets/js/main.js          Rendering e interazioni
assets/images/             Favicon e immagine social placeholder
assets/documents/          Inserire qui il CV
```

## Avvio locale

Il sito funziona aprendo direttamente `index.html`. Per una preview equivalente al web, dalla cartella del progetto eseguire `python -m http.server 8000` e aprire `http://localhost:8000`.

## Modificare i contenuti

I contenuti variabili sono in `assets/js/content.js`: profilo, link, casi, tecnologie, esperienza, competenze e certificazioni. I casi utilizzano descrizioni di contesto senza includere informazioni riservate.

Aggiornare in `index.html` title, description, canonical, Open Graph e JSON-LD se cambiano dominio o profili. Sostituire `assets/images/og-image.svg` con un’immagine social 1200×630 se desiderato.

## CV, foto e link

- Copiare il CV come `assets/documents/Gabriele-Floris-CV.pdf`, oppure cambiare `person.cv`.
- Il layout non richiede una fotografia. Per aggiungerla, inserirla ottimizzata in `assets/images/`, usare WebP/AVIF, `loading="lazy"`, dimensioni esplicite e alt descrittivo.
- E-mail e LinkedIn si modificano nell’oggetto `person`.
- Allineare gli stessi URL nel JSON-LD di `index.html`.

## Pubblicazione con GitHub Pages

1. Creare il repository e inviare il progetto sul branch `main`.
2. In GitHub: **Settings → Pages → Build and deployment**.
3. Selezionare **Deploy from a branch**, branch `main`, cartella `/ (root)`.
4. Salvare e attendere la pubblicazione; quindi aggiornare canonical, Open Graph e JSON-LD con l’URL reale.

Non serve una GitHub Action: il sito non ha una fase di build.

### Dominio personalizzato

Inserire il dominio in **Settings → Pages → Custom domain**, configurare i record DNS indicati da GitHub e attivare HTTPS. Aggiungere alla root un file `CNAME` contenente solo il dominio; aggiornare poi tutti gli URL assoluti in `index.html`.

## Flusso Git suggerito

`main` contiene la versione pubblicata. Per modifiche rilevanti usare un branch breve (`feature/nuovo-caso`), commit piccoli e descrittivi, quindi una pull request con preview e controllo finale prima del merge.

## Placeholder da sostituire

- PDF del CV
- eventuale immagine Open Graph definitiva
- disponibilità lavorativa e formulazione del messaggio contatti

## Checklist pre-pubblicazione

- [ ] Link, e-mail, canonical, Open Graph e JSON-LD aggiornati
- [ ] CV presente e scaricabile
- [ ] Descrizioni dei progetti prive di dati riservati o identificativi
- [ ] Test da tastiera: menu, link, cambio tema, dialog e tasto Escape
- [ ] Controllo a 320 px, tablet e desktop
- [ ] Revisione dei testi e dei contributi personali da parte di Gabriele
- [ ] Nessun dato riservato, endpoint, ID o nome ambiente
- [ ] Validazione HTML e controllo Lighthouse
- [ ] Test della pagina pubblicata e dei percorsi case-sensitive
