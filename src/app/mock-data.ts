export const overviewMetrics = [
  { label: "Décès signalés", value: "1 284", delta: "+6.9%", tone: "warning" as const },
  { label: "Cas qualifiés", value: "846", delta: "+4.1%", tone: "info" as const },
  { label: "Alertes ouvertes", value: "37", delta: "-4.8%", tone: "error" as const },
  { label: "Complétude", value: "96.2%", delta: "+1.1%", tone: "success" as const },
] as const;

export const overviewFlow = [
  { label: "Déclaration", count: "146", detail: "92% complètes", progress: 92 },
  { label: "Qualification", count: "118", detail: "34 dossiers critiques", progress: 74 },
  { label: "Enlèvements", count: "81", detail: "3 incidents logistiques", progress: 61 },
  { label: "Prélèvements", count: "52", detail: "11 résultats critiques", progress: 48 },
] as const;

export const overviewAlerts = [
  {
    id: "AL-2409",
    title: "Cluster bovin atypique",
    region: "Occitanie",
    severity: "Critique",
    owner: "Dr Lambert",
    updated: "il y a 12 min",
    progress: 78,
  },
  {
    id: "AL-2394",
    title: "Mortalité multiple en volaille",
    region: "Bretagne",
    severity: "Alerte",
    owner: "GDS 22",
    updated: "il y a 28 min",
    progress: 54,
  },
  {
    id: "AL-2388",
    title: "Dossier incomplet à risque",
    region: "Pays de la Loire",
    severity: "Vigilance",
    owner: "Support terrain",
    updated: "il y a 41 min",
    progress: 36,
  },
] as const;

export const overviewCases = [
  {
    id: "CAS-10482",
    farm: "GAEC de la Forêt",
    species: "Bovins",
    status: "En qualification",
    lastUpdate: "07:42",
    priority: "Haute",
  },
  {
    id: "CAS-10477",
    farm: "Ferme de la Rivière",
    species: "Volaille",
    status: "En attente labo",
    lastUpdate: "06:58",
    priority: "Moyenne",
  },
  {
    id: "CAS-10470",
    farm: "Élevage des Tilleuls",
    species: "Ovins",
    status: "Clôturé",
    lastUpdate: "Hier",
    priority: "Faible",
  },
] as const;

export const overviewTerritories = [
  { region: "Occitanie", deaths: "324", delta: "+12%", tone: "error" as const },
  { region: "Bretagne", deaths: "211", delta: "+7%", tone: "warning" as const },
  { region: "Grand Est", deaths: "176", delta: "+3%", tone: "info" as const },
  { region: "Normandie", deaths: "143", delta: "-2%", tone: "success" as const },
] as const;

export const overviewActivity = [
  {
    label: "Cluster bovin détecté",
    detail: "5 dossiers rattachés dans un rayon de 18 km",
    time: "09:20",
  },
  {
    label: "ETL nocturne terminé",
    detail: "BDNI, SPE et référentiels géographiques synchronisés",
    time: "10:21",
  },
  {
    label: "Deux alertes escaladées",
    detail: "Transmission automatique vers l’épidémiologiste",
    time: "11:22",
  },
] as const;

export const singleDeathMock = {
  reference: "SIG-2026-041",
  farm: "Ferme des Aulnes",
  species: "Bovins",
  animalId: "FR 12 345 678 901",
  date: "06/04/2026 07:42",
  location: "Bâtiment 3 - case 12",
  symptoms: "Abattement, respiration rapide, impossibilité de se relever",
  assignee: "GDS 64",
  removal: "Demandée",
} as const;

export const multipleDeathMock = {
  reference: "SIG-2026-044",
  farm: "Groupement du Haut-Pâtis",
  species: "Volaille",
  batch: "Lot 4A - poulettes",
  count: "17",
  window: "24 h",
  expected: "2",
  observed: "17",
  symptom: "Prostration, baisse d’ingestion, mortalité nocturne",
} as const;

export const recentDeclarations = [
  {
    id: "SIG-2026-041",
    title: "Décès individuel bovin",
    actor: "Éleveur - M. Martin",
    status: "À qualifier",
    time: "07:42",
  },
  {
    id: "SIG-2026-044",
    title: "Mortalité multiple volaille",
    actor: "GDS 35",
    status: "Critique",
    time: "08:14",
  },
  {
    id: "SIG-2026-039",
    title: "Demande d’enlèvement",
    actor: "Élevage des Grands Prés",
    status: "Planifié",
    time: "Hier 16:20",
  },
] as const;

export const dossierTimeline = [
  {
    title: "Signalement initial",
    actor: "Éleveur",
    time: "07:42",
    note: "Déclaration d’un décès isolé avec photo et géolocalisation.",
    tone: "success" as const,
  },
  {
    title: "Qualification GDS",
    actor: "GDS",
    time: "08:06",
    note: "Cas orienté vers un vétérinaire pour investigation terrain.",
    tone: "info" as const,
  },
  {
    title: "Visite vétérinaire",
    actor: "Dr Lambert",
    time: "09:15",
    note: "Hypothèse infectieuse retenue et prélèvements prescrits.",
    tone: "warning" as const,
  },
  {
    title: "Résultats laboratoire",
    actor: "LAB 33",
    time: "12:40",
    note: "Résultat en attente, échantillons conformes à l’arrivée.",
    tone: "default" as const,
  },
] as const;

export const dossierParticipants = [
  { role: "Éleveur", name: "M. Martin", status: "Disponible" },
  { role: "GDS", name: "Mme Caron", status: "Assignée" },
  { role: "Vétérinaire", name: "Dr Lambert", status: "En visite" },
  { role: "Équarrisseur", name: "Service Sud Ouest", status: "En attente" },
] as const;

export const dossierAnimals = [
  { id: "FR 12 345 678 901", age: "4 ans", status: "Décédé" },
  { id: "FR 12 345 678 907", age: "3 ans", status: "Surveillance" },
  { id: "FR 12 345 678 912", age: "2 ans", status: "Exposé" },
] as const;

export const alertInbox = [
  {
    id: "AL-2409",
    title: "Cluster bovin atypique",
    region: "Occitanie",
    level: "Critique",
    owner: "Dr Lambert",
    sla: "02:14",
  },
  {
    id: "AL-2394",
    title: "Mortalité multiple en volaille",
    region: "Bretagne",
    level: "Alerte",
    owner: "GDS 22",
    sla: "05:30",
  },
  {
    id: "AL-2388",
    title: "Résultat labo positif",
    region: "Grand Est",
    level: "Vigilance",
    owner: "LAB 57",
    sla: "09:45",
  },
] as const;

export const alertRules = [
  { label: "Mortalité > baseline", value: "+38%", progress: 84 },
  { label: "Délai de qualification", value: "2 h 14", progress: 69 },
  { label: "Complétude dossier", value: "91%", progress: 91 },
] as const;

export const surveillanceSignals = [
  { id: "SIG-4821", species: "Bovins", region: "Occitanie", expected: "3", observed: "11", status: "Validé" },
  { id: "SIG-4819", species: "Volaille", region: "Bretagne", expected: "5", observed: "14", status: "En revue" },
  { id: "SIG-4815", species: "Porcs", region: "Pays de la Loire", expected: "2", observed: "6", status: "Risque élevé" },
  { id: "SIG-4808", species: "Ovins", region: "Grand Est", expected: "4", observed: "4", status: "Clos" },
] as const;

export const surveillanceTerritories = [
  { region: "Occitanie", rate: "3.8%", trend: "+12%", hotspots: "4", tone: "error" as const },
  { region: "Bretagne", rate: "2.9%", trend: "+7%", hotspots: "3", tone: "warning" as const },
  { region: "Grand Est", rate: "2.1%", trend: "+3%", hotspots: "2", tone: "info" as const },
  { region: "Normandie", rate: "1.7%", trend: "-2%", hotspots: "1", tone: "success" as const },
] as const;

export const administrationUsers = [
  { name: "Dr Lenoir", role: "Administration sanitaire", territory: "Occitanie", status: "Actif" },
  { name: "Mme Dubois", role: "Épidémiologiste", territory: "National", status: "Actif" },
  { name: "M. Bernard", role: "GDS", territory: "Bretagne", status: "Suspendu" },
] as const;

export const administrationImports = [
  { source: "BDNI", lastRun: "06:00", status: "Réussi", volume: "12 448 lignes" },
  { source: "SPE", lastRun: "06:12", status: "Réussi", volume: "8 092 lignes" },
  { source: "SIGAL/RESYTAL", lastRun: "06:18", status: "A surveiller", volume: "1 204 lignes" },
] as const;

export const administrationReferentials = [
  { label: "Espèces", value: "24 référentiels", tone: "info" as const },
  { label: "Motifs d’alerte", value: "18 règles", tone: "warning" as const },
  { label: "Territoires", value: "96 zones", tone: "success" as const },
] as const;

export const veterinaryInterventions = [
  {
    caseId: "CAS-10482",
    farm: "GAEC de la Forêt",
    priority: "Urgent",
    visitAt: "13:30",
    veterinarian: "Dr Lambert",
    status: "Planned",
  },
  {
    caseId: "CAS-10491",
    farm: "Ferme des Hauts Prés",
    priority: "High",
    visitAt: "15:10",
    veterinarian: "Dr Camus",
    status: "In progress",
  },
  {
    caseId: "CAS-10467",
    farm: "Élevage du Lac",
    priority: "Medium",
    visitAt: "Demain 09:00",
    veterinarian: "Dr Lenoir",
    status: "Pending",
  },
] as const;

export const veterinarySamples = [
  { sampleId: "PREL-2201", caseId: "CAS-10482", type: "Sang", destination: "LAB 33", chain: "Conforme", result: "Pending" },
  { sampleId: "PREL-2198", caseId: "CAS-10477", type: "Poumon", destination: "LAB 35", chain: "Conforme", result: "Positive" },
  { sampleId: "PREL-2189", caseId: "CAS-10450", type: "Écouvillon", destination: "LAB 64", chain: "À vérifier", result: "Pending" },
] as const;

export const removalRequests = [
  {
    requestId: "ENL-7802",
    caseId: "CAS-10482",
    farm: "GAEC de la Forêt",
    slot: "Aujourd’hui 14:00-16:00",
    collector: "Sud Ouest Collecte",
    status: "Scheduled",
  },
  {
    requestId: "ENL-7798",
    caseId: "CAS-10477",
    farm: "Ferme de la Rivière",
    slot: "Aujourd’hui 10:00-12:00",
    collector: "Atlantique Collecte",
    status: "Collected",
  },
  {
    requestId: "ENL-7785",
    caseId: "CAS-10461",
    farm: "Élevage des Tilleuls",
    slot: "Demain 08:00-10:00",
    collector: "Sud Ouest Collecte",
    status: "Pending",
  },
] as const;

export const laboratoryQueue = [
  {
    sampleId: "PREL-2201",
    caseId: "CAS-10482",
    species: "Bovins",
    analysis: "PCR respiratoire",
    priority: "Urgent",
    status: "Received",
  },
  {
    sampleId: "PREL-2198",
    caseId: "CAS-10477",
    species: "Volaille",
    analysis: "Bactériologie",
    priority: "High",
    status: "In analysis",
  },
  {
    sampleId: "PREL-2189",
    caseId: "CAS-10450",
    species: "Porcs",
    analysis: "Sérologie",
    priority: "Medium",
    status: "Pending",
  },
] as const;

export const laboratoryResults = [
  { resultId: "RES-3310", caseId: "CAS-10477", pathogen: "Influenza A", interpretation: "Positive", publishedAt: "11:42" },
  { resultId: "RES-3308", caseId: "CAS-10460", pathogen: "Pasteurella", interpretation: "Negative", publishedAt: "09:17" },
  { resultId: "RES-3304", caseId: "CAS-10455", pathogen: "Non concluant", interpretation: "Inconclusive", publishedAt: "Hier" },
] as const;

export const reportingKpis = [
  { label: "Déclarations", value: "1 284", trend: "+6.9%" },
  { label: "Délai qualification médian", value: "2h14", trend: "-18 min" },
  { label: "Alertes critiques", value: "4", trend: "+1" },
  { label: "Taux clôture", value: "71%", trend: "+5 pts" },
] as const;

export const reportingExports = [
  { name: "Synthèse territoriale hebdo", owner: "Administration sanitaire", generatedAt: "06/04 08:10", status: "Ready" },
  { name: "Bulletin épidémiologique", owner: "Épidémiologie", generatedAt: "06/04 07:42", status: "Ready" },
  { name: "Suivi logistique enlèvements", owner: "Ops terrain", generatedAt: "05/04 18:20", status: "Pending" },
] as const;