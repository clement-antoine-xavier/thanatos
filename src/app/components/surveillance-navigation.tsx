"use client";

import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import Link from "@/components/link";

import { navigation } from "@/app/data";

type SurveillanceNavigationProps = {
  onNavigate: () => void;
};

export default function SurveillanceNavigation({ onNavigate }: SurveillanceNavigationProps) {
  const t = useTranslations("dashboard");
  const pathname = usePathname();

  const canonicalPathByRoleRoute = {
    "/breeder": "/reports",
    "/gds": "/cases",
    "/veterinarian": "/veterinary-interventions",
    "/collector": "/removal-requests",
    "/laboratory": "/laboratory-operations",
    "/epidemiologist": "/surveillance",
    "/health-administration": "/alerts",
    "/platform-administration": "/administration",
  } as const;

  const canonicalPath = canonicalPathByRoleRoute[pathname as keyof typeof canonicalPathByRoleRoute] ?? pathname;

  const isSelected = (href: string) => {
    if (href === "/reports") {
      return canonicalPath === "/reports" || canonicalPath === "/removal-requests";
    }
    if (href === "/cases") {
      return (
        canonicalPath === "/cases" ||
        canonicalPath === "/veterinary-interventions" ||
        canonicalPath === "/laboratory-operations"
      );
    }
    return canonicalPath === href;
  };

  return (
    <Box sx={{ height: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ px: 2, py: 3 }}>
        <Box component="h2" sx={{ m: 0, fontSize: 20, fontWeight: 800 }}>
          {t("shell.sidebarTitle")}
        </Box>
        <Box component="p" sx={{ m: 0, color: "text.secondary", fontSize: 14 }}>
          {t("shell.sidebarSubtitle")}
        </Box>
      </Box>
      <Divider />
      <List sx={{ p: 1 }}>
        {navigation.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={isSelected(item.href)}
              sx={{ borderRadius: 1.5, mb: 0.75 }}
              onClick={onNavigate}
            >
              <ListItemAvatar sx={{ minWidth: 36 }}>
                <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>{t(`navigation.${item.key}`).charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={t(`navigation.${item.key}`)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
