/* Contenuti del portfolio. Qui si aggiornano profilo, progetti, esperienza e link. */
window.PORTFOLIO = {
  person: {
    name: "Gabriele Floris",
    role: "Senior Salesforce Solution Consultant",
    location: "Reggio Emilia, Italia",
    email: "gabry.floris00@gmail.com",
    linkedin: "https://www.linkedin.com/in/gabriele-floris-84b3b71b7/",
    cv: "assets/documents/Gabriele-Floris-CV.pdf",
    photo: "assets/images/gabriele-floris.webp",
    intro: "Lavoro su progetti Salesforce nel punto in cui processo, dati e implementazione devono restare allineati. Negli ultimi anni il mio ruolo si è spostato dallo sviluppo alla progettazione tecnico-funzionale e al coordinamento della delivery.",
    about: "Mi interessa capire come funzionano davvero le cose: cosa fa un utente, dove nasce un dato, quale sistema ne è responsabile e cosa succede quando il percorso previsto si interrompe. Da qui parto per costruire soluzioni leggibili, prima ancora che tecnicamente corrette."
  },
  projects: [
    {
      id: "crm",
      number: "01",
      icon: "route",
      title: "Evoluzione di un ecosistema CRM integrato",
      context: "Piattaforma digitale nel settore accessori moto",
      role: "Solution design e coordinamento tecnico",
      summary: "Salesforce era al centro di un ecosistema che comprendeva portale, identity, PIM, Marketing Cloud e partner esterni. Il lavoro è stato ricostruire i confini tra i sistemi e accompagnare l’evoluzione del modello dati senza interrompere i processi esistenti.",
      startingPoint: "Il modello precedente conteneva entità legacy, identificativi costruiti nel tempo e flussi API non sempre coerenti. Nel frattempo il nuovo portale richiedeva un modello prodotto più ricco, con varianti, accessori, compatibilità e immagini provenienti dal PIM.",
      work: "Ho ricostruito i flussi end-to-end insieme alle persone coinvolte, chiarito la responsabilità dei sistemi, formalizzato casi limite e dipendenze, e coordinato attività, test e rilasci. La specifica OpenAPI è diventata il riferimento condiviso tra documentazione e implementazione.",
      decisions: ["Migrazione progressiva degli identificativi legacy con batch dedicati", "Separazione tra wishlist semplici e configurazioni complete", "Gestione esplicita di utenti anonimi, validazioni ed errori API", "Ambienti di test dedicati e compatibilità durante la transizione"],
      outcome: "Il nuovo modello è più coerente con il prodotto reale e le integrazioni sono più facili da leggere e manutenere. La migrazione ha seguito un percorso controllato, riducendo gradualmente le dipendenze dalla struttura precedente.",
      tech: ["Salesforce", "Apex", "Flow", "REST API", "OpenAPI / YAML", "Marketing Cloud", "PIM integration", "Batch processing"]
    },
    {
      id: "documenti",
      number: "02",
      icon: "layers",
      title: "Generazione asincrona di documenti complessi",
      context: "Processi commerciali enterprise",
      role: "Solution design e delivery coordination",
      summary: "La generazione sincrona non era affidabile per PDF molto estesi e ricchi di sezioni dinamiche. Abbiamo mantenuto il punto di ingresso già conosciuto dagli utenti, spostando la composizione pesante su un processo asincrono e tracciabile.",
      startingPoint: "Il processo doveva generare sezioni diverse, gestire documenti voluminosi, evitare timeout e pubblicare il risultato sul record corretto senza lasciare l’utente in attesa.",
      work: "Ho analizzato i limiti tecnici, confrontato opzioni alternative, definito il flusso e lo stato delle richieste, stimato l’intervento e coordinato sviluppo, pubblicazione del file e notifiche.",
      decisions: ["Mantenere il comando già noto agli utenti", "Separare preparazione e composizione del documento", "Persistenza dello stato per rendere ogni richiesta tracciabile", "Pubblicazione del risultato tramite Salesforce Files"],
      outcome: "La generazione non blocca più la sessione dell’utente e il processo rende visibile il proprio avanzamento. La stessa architettura può essere riutilizzata per altri formati o composizioni.",
      tech: ["Salesforce", "Apex", "Visualforce", "Asynchronous processing", "REST API", "Salesforce Files", "Platform notifications"]
    },
    {
      id: "lead",
      number: "03",
      icon: "nodes",
      title: "Un lead unico, senza perdere il contesto",
      context: "Marketing e acquisizione multicanale",
      role: "CRM data strategy e phased delivery",
      summary: "Form, campagne ed eventi producevano duplicati e una storia frammentata. La soluzione separa l’identità della persona dal contesto della singola interazione, conservato sul Campaign Member.",
      startingPoint: "Ogni nuova compilazione poteva creare un lead. Era difficile ricostruire il percorso del contatto e gli aggiornamenti da marketing automation rischiavano di sovrascrivere informazioni utili.",
      work: "Ho contribuito alla strategia funzionale e tecnica, chiarito il modello di riconciliazione e diviso il lavoro in fasi: controllo dei nuovi ingressi, gestione degli aggiornamenti e bonifica progressiva dello storico.",
      decisions: ["Un lead per persona e dati di interazione sul Campaign Member", "Riconciliazione tramite e-mail e verifica di anagrafiche esistenti", "Controllo degli aggiornamenti da Account Engagement", "Bonifica progressiva invece di una migrazione unica"],
      outcome: "Identità e storia delle campagne restano distinte ma collegate. La base dati è più coerente e predisposta per una bonifica governata dei record già presenti.",
      tech: ["Sales Cloud", "Campaign Member", "Account Engagement", "Apex", "Flow", "Matching rules", "Data quality"]
    },
    {
      id: "contratti",
      number: "04",
      icon: "flow",
      title: "Contrattualizzazione digitale orchestrata da Salesforce",
      context: "Contratti e pratiche con più attori",
      role: "Process modelling e integration design",
      summary: "Agente, amministratore e back office intervengono in fasi diverse, insieme a DocuSign e a una piattaforma esterna. Il processo è stato modellato come una macchina a stati, con Salesforce nel ruolo di orchestratore.",
      startingPoint: "Firma, apertura della pratica, caricamento dei documenti e consegna dovevano rispettare una sequenza precisa, con permessi diversi e una gestione chiara delle anomalie.",
      work: "Ho modellato attori, responsabilità, transizioni, prerequisiti ed errori. Ho inoltre lavorato sulla configurazione DocuSign in sandbox e sulla definizione dinamica dei firmatari a partire dai record Salesforce.",
      decisions: ["Stati e prerequisiti resi espliciti", "Firmatari derivati dinamicamente dai dati CRM", "Permessi coerenti con ruolo e fase del processo", "Errori conservati come attività azionabili"],
      outcome: "Il percorso del contratto è più leggibile per chi lo utilizza e per chi lo mantiene. Firma, documenti, sistemi esterni e attività residue restano nello stesso contesto operativo.",
      tech: ["Salesforce", "Flow", "Apex", "DocuSign", "REST API", "File management", "Permission model"]
    }
  ],
  method: [
    ["01", "Capire", "Ricostruisco il processo reale, i sistemi coinvolti e i casi che non seguono il percorso ideale."],
    ["02", "Disegnare", "Definisco dati, responsabilità, automazioni e integrazioni prima di scegliere gli strumenti."],
    ["03", "Organizzare", "Traduco il disegno in attività stimabili, dipendenze visibili e criteri di verifica."],
    ["04", "Seguire", "Resto nel progetto durante sviluppo, test e rilascio, soprattutto quando emergono eccezioni."]
  ],
  experience: [
    {date:"Apr 2026 — oggi", company:"Polo Digitale", role:"Senior Salesforce Solution Consultant", text:"Progettazione tecnico-funzionale, confronto con clienti e partner, stime e coordinamento della delivery su più iniziative. Mantengo un coinvolgimento diretto nelle decisioni tecniche e nei passaggi più delicati."},
    {date:"Giu 2025 — Mar 2026", company:"Polo Digitale", role:"Salesforce Developer", text:"Sviluppo con Apex, Flow, LWC, Aura e integrazioni. In questa fase il mio perimetro si è allargato progressivamente verso analisi, stime e confronto diretto con il cliente."},
    {date:"Apr 2023 — Mag 2025", company:"Accenture", role:"Salesforce Developer", text:"Primi progetti Salesforce in contesti enterprise, con processi strutturati di test e rilascio e collaborazione quotidiana con team multidisciplinari."}
  ],
  skills: {
    "Solution design": ["Process modelling", "Data modelling", "Integration design", "Architectural trade-off", "Requirements engineering"],
    "Salesforce engineering": ["Apex", "Flow", "LWC", "Aura", "Visualforce", "SOQL", "Sales Cloud", "Experience Cloud", "Account Engagement"],
    "Delivery": ["Effort estimation", "Release planning", "Testing coordination", "Technical documentation", "Stakeholder management", "Task coordination"],
    "Strumenti": ["Git", "Azure DevOps", "Jira", "OpenAPI / YAML", "REST API", "VS Code", "Sandbox management"]
  },
  certifications: ["Salesforce Certified Associate", "Salesforce Certified AI Associate", "Salesforce Certified Platform Developer I"]
};
