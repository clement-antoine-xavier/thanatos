export const drawerWidth = 288;

export const navigation = [
  { key: "overview", href: "/overview" },
  { key: "reports", href: "/reports" },
  { key: "cases", href: "/cases" },
  { key: "alerts", href: "/alerts" },
  { key: "surveillance", href: "/surveillance" },
  { key: "reporting", href: "/reporting" },
  { key: "administration", href: "/administration" },
] as const;

export const surveillanceKpis = [
  { labelKey: "mortalityRate", value: "2.41%", delta: "+0.3%", color: "warning" as const },
  { labelKey: "reportedDeaths", value: "1,284", delta: "+6.9%", color: "primary" as const },
  { labelKey: "openAlerts", value: "37", delta: "-4.8%", color: "success" as const },
  { labelKey: "dataCompleteness", value: "96.2%", delta: "+1.1%", color: "success" as const },
] as const;

export const mortalityTrendHeights = [42, 58, 51, 74, 64, 86, 79, 92, 88, 95, 90, 98];

export const pipelineTasks = [
  { key: "validateBdniDailyImport", progress: 90 },
  { key: "runWeeklyAnomalyDetection", progress: 68 },
  { key: "reviewSigalResytalOutliers", progress: 42 },
  { key: "updateSpeciesMetadataMapping", progress: 28 },
] as const;

export const surveillanceActivities = [
  { key: "bovineMortalityClusterDetected", hour: 9, minute: "20" },
  { key: "nightlyEtlCompleted", hour: 10, minute: "21" },
  { key: "alertsEscalatedToReview", hour: 11, minute: "22" },
  { key: "dashboardCacheRefreshed", hour: 12, minute: "23" },
] as const;

export const signals = [
  { id: "SIG-4821", species: "cattle", region: "occitanie", statusKey: "validated" },
  { id: "SIG-4819", species: "poultry", region: "bretagne", statusKey: "pendingReview" },
  { id: "SIG-4815", species: "swine", region: "paysDeLaLoire", statusKey: "highRisk" },
  { id: "SIG-4808", species: "sheep", region: "grandEst", statusKey: "closed" },
  { id: "SIG-4802", species: "goats", region: "normandie", statusKey: "validated" },
] as const;
