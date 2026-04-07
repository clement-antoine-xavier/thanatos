"use client";

import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcher from "./locale-switcher";

type SurveillanceHeaderProps = {
  onOpenMobileDrawer: () => void;
};

export default function SurveillanceHeader({ onOpenMobileDrawer }: SurveillanceHeaderProps) {
  const t = useTranslations("dashboard.shell");
  const locale = useLocale();

  return (
    <Paper
      square
      elevation={0}
      sx={{
        px: { xs: 2, md: 4 },
        py: 2,
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Button
            variant="outlined"
            size="small"
            onClick={onOpenMobileDrawer}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            {t("menu")}
          </Button>
          <Box>
            <Typography variant="h4" fontWeight={700}>
              {t("title")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("subtitle")}
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocaleSwitcher currentLocale={locale} englishLabel={t("englishLabel")} frenchLabel={t("frenchLabel")} />
          <Avatar sx={{ width: 32, height: 32, bgcolor: "grey.900", color: "common.white" }}>TH</Avatar>
        </Stack>
      </Stack>
    </Paper>
  );
}
