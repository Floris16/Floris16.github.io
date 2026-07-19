window.PORTFOLIO = {
  person: {
    name: "Gabriele Floris",
    role: "Senior Salesforce Solution Consultant",
    location: "Reggio Emilia, Italy",
    email: "gabry.floris00@gmail.com",
    linkedin: "https://www.linkedin.com/in/gabriele-floris-84b3b71b7/",
    cv: "../assets/documents/Gabriele-Floris-CV.pdf",
    photo: "../assets/images/gabriele-floris.webp",
    intro: "I work on Salesforce projects where processes, data and implementation need to stay aligned. Over the last few years, my role has evolved from development to technical and functional design and delivery coordination.",
    about: "I like understanding how things actually work: what a user does, where data originates, which system owns it and what happens when the expected path breaks. That is where I start when designing solutions that are clear before they are technically correct."
  },
  projects: [
    {
      id: "crm",
      number: "01",
      icon: "route",
      title: "Evolving an integrated CRM ecosystem",
      context: "Digital platform in the motorcycle accessories industry",
      role: "Solution design and technical coordination",
      summary: "Salesforce sat at the centre of an ecosystem spanning a portal, identity, PIM, Marketing Cloud and external partners. The work involved redefining system boundaries and evolving the data model without disrupting existing processes.",
      startingPoint: "The previous model included legacy entities, identifiers introduced over time and API flows that were not always consistent. At the same time, the new portal required a richer product model, with variants, accessories, compatibility data and images coming from the PIM.",
      work: "I reconstructed end-to-end flows with the people involved, clarified system ownership, formalised edge cases and dependencies, and coordinated activities, testing and releases. The OpenAPI specification became the shared reference for both documentation and implementation.",
      decisions: ["Gradual migration of legacy identifiers through dedicated batches", "Separation between simple wishlists and complete configurations", "Explicit handling of anonymous users, validations and API errors", "Dedicated test environments and compatibility during the transition"],
      outcome: "The new model is more consistent with the actual product and integrations are easier to understand and maintain. The migration followed a controlled path, progressively reducing dependencies on the previous structure.",
      tech: ["Salesforce", "Apex", "Flow", "REST API", "OpenAPI / YAML", "Marketing Cloud", "PIM integration", "Batch processing"]
    },
    {
      id: "documenti",
      number: "02",
      icon: "layers",
      title: "Asynchronous generation of complex documents",
      context: "Enterprise sales processes",
      role: "Solution design and delivery coordination",
      summary: "Synchronous generation was unreliable for very large PDFs with dynamic sections. We kept the entry point users already knew while moving the heavy composition work to an asynchronous, traceable process.",
      startingPoint: "The process had to generate different sections, handle large documents, avoid timeouts and publish the result on the correct record without keeping the user waiting.",
      work: "I analysed the technical constraints, compared alternative options, defined the flow and request states, estimated the work and coordinated development, file publication and notifications.",
      decisions: ["Keep the command users were already familiar with", "Separate document preparation from composition", "Persist status to make every request traceable", "Publish the result through Salesforce Files"],
      outcome: "Generation no longer blocks the user session and the process makes its progress visible. The same architecture can be reused for other formats or compositions.",
      tech: ["Salesforce", "Apex", "Visualforce", "Asynchronous processing", "REST API", "Salesforce Files", "Platform notifications"]
    },
    {
      id: "lead",
      number: "03",
      icon: "nodes",
      title: "One lead, without losing context",
      context: "Marketing and multi-channel acquisition",
      role: "CRM data strategy and phased delivery",
      summary: "Forms, campaigns and events were creating duplicates and a fragmented history. The solution separates a person’s identity from the context of each interaction, which is retained on the Campaign Member.",
      startingPoint: "Every new form submission could create a lead. Reconstructing a contact’s journey was difficult, and updates from marketing automation risked overwriting useful information.",
      work: "I contributed to the functional and technical strategy, clarified the reconciliation model and divided the work into phases: controlling new entries, managing updates and progressively cleaning up historical data.",
      decisions: ["One lead per person, with interaction data on the Campaign Member", "Reconciliation through email and checks against existing records", "Control updates coming from Account Engagement", "Progressive cleanup instead of a one-off migration"],
      outcome: "Identity and campaign history remain distinct but connected. The database is more consistent and ready for a governed cleanup of existing records.",
      tech: ["Sales Cloud", "Campaign Member", "Account Engagement", "Apex", "Flow", "Matching rules", "Data quality"]
    },
    {
      id: "contratti",
      number: "04",
      icon: "flow",
      title: "Digital contracting orchestrated by Salesforce",
      context: "Contracts and cases involving multiple actors",
      role: "Process modelling and integration design",
      summary: "Agents, administrators and back office teams act at different stages, alongside DocuSign and an external platform. The process was modelled as a state machine, with Salesforce acting as the orchestrator.",
      startingPoint: "Signing, opening the case, uploading documents and delivery had to follow a precise sequence, with different permissions and clear exception handling.",
      work: "I modelled actors, responsibilities, transitions, prerequisites and errors. I also worked on the DocuSign sandbox configuration and on dynamically defining signers from Salesforce records.",
      decisions: ["Make states and prerequisites explicit", "Derive signers dynamically from CRM data", "Align permissions with each role and process stage", "Preserve errors as actionable activities"],
      outcome: "The contract journey is clearer for both users and maintainers. Signatures, documents, external systems and outstanding activities remain within the same operational context.",
      tech: ["Salesforce", "Flow", "Apex", "DocuSign", "REST API", "File management", "Permission model"]
    }
  ]
};
