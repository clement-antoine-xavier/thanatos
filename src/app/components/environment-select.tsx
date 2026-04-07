"use client";

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

type PageRoute =
  | "/overview"
  | "/reports"
  | "/cases"
  | "/alerts"
  | "/surveillance"
  | "/veterinary-interventions"
  | "/removal-requests"
  | "/laboratory-operations"
  | "/reporting"
  | "/administration";

const options: Array<{ route: PageRoute; labelKey: string }> = [
  { route: "/overview", labelKey: "overview" },
  { route: "/reports", labelKey: "reports" },
  { route: "/cases", labelKey: "cases" },
  { route: "/alerts", labelKey: "alerts" },
  { route: "/surveillance", labelKey: "surveillance" },
  { route: "/veterinary-interventions", labelKey: "veterinaryInterventions" },
  { route: "/removal-requests", labelKey: "removalRequests" },
  { route: "/laboratory-operations", labelKey: "laboratoryOperations" },
  { route: "/reporting", labelKey: "reporting" },
  { route: "/administration", labelKey: "administration" },
];

const legacyRouteToPage: Record<string, PageRoute> = {
  "/breeder": "/reports",
  "/gds": "/cases",
  "/veterinarian": "/veterinary-interventions",
  "/collector": "/removal-requests",
  "/laboratory": "/laboratory-operations",
  "/epidemiologist": "/surveillance",
  "/health-administration": "/alerts",
  "/platform-administration": "/administration",
};

const STORAGE_KEY = "mictlantecuhtli.selectedPage";

export default function EnvironmentSelect() {
  const shell = useTranslations("dashboard.shell");
  const page = useTranslations("dashboard.pages");
  const pathname = usePathname();
  const router = useRouter();

  const canonicalPath = (legacyRouteToPage[pathname] ?? pathname) as PageRoute;
  const knownPages = options.map((item) => item.route);
  const selectedPage = knownPages.includes(canonicalPath) ? canonicalPath : "/overview";

  const handleChange = (event: SelectChangeEvent<PageRoute>) => {
    const nextPage = event.target.value as PageRoute;

    window.localStorage.setItem(STORAGE_KEY, nextPage);

    if (nextPage !== pathname) {
      router.push(nextPage);
    }
  };

  return (
    <FormControl size="small" sx={{ minWidth: 210 }}>
      <Select value={selectedPage} onChange={handleChange} displayEmpty aria-label={shell("environmentLabel")}>
        {options.map((option) => (
          <MenuItem key={option.route} value={option.route}>
            {page(`${option.labelKey}.title`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}