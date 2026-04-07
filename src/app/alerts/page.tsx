import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { getTranslations } from "next-intl/server";

import { alertInbox, alertRules } from "@/app/mock-data";

const levelColor = (level: string) => {
  switch (level) {
    case "Critique":
      return "error" as const;
    case "Alerte":
      return "warning" as const;
    case "Vigilance":
      return "info" as const;
    default:
      return "default" as const;
  }
};

export default async function AlertsPage() {
  const t = await getTranslations("dashboard.pages.alerts");

  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction={{ xs: "column", lg: "row" }} justifyContent="space-between" spacing={2}>
              <Box sx={{ maxWidth: 740 }}>
                <Chip label={t("badge")} sx={{ mb: 2 }} />
                <Typography variant="h4" fontWeight={800} gutterBottom>
                  {t("title")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t("subtitle")}
                </Typography>
              </Box>
              <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="flex-start">
                <Chip label="Critique 4" color="error" />
                <Chip label="Alerte 11" color="warning" />
                <Chip label="Vigilance 22" color="info" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("titleInbox")}
            </Typography>
            <Stack spacing={1.5}>
              {alertInbox.map((alert) => (
                <Paper key={alert.id} variant="outlined" sx={{ p: 2, bgcolor: alert.level === "Critique" ? "grey.50" : "background.paper" }}>
                  <Stack spacing={1}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                      <Box>
                        <Typography fontWeight={800}>{alert.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {alert.id} · {alert.region}
                        </Typography>
                      </Box>
                      <Chip label={alert.level} color={levelColor(alert.level)} size="small" />
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" color="text.secondary">
                        {t("responsiblePrefix")} {alert.owner}
                      </Typography>
                      <Chip label={`SLA ${alert.sla}`} size="small" />
                    </Stack>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 7 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  {t("titleSelected")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("subtitleSelected")}
                </Typography>
              </Box>
              <Chip label="AL-2409" color="error" />
            </Stack>

            <Stack spacing={2}>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {t("impact")}
                    </Typography>
                    <Typography variant="h4" fontWeight={800}>
                      18 dossiers
                    </Typography>
                  </Box>
                  <Chip label="Critique" color="error" />
                </Stack>
              </Paper>

              {alertRules.map((rule) => (
                <Box key={rule.label}>
                  <Stack direction="row" justifyContent="space-between" mb={0.5}>
                    <Typography fontWeight={700}>{rule.label}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {rule.value}
                    </Typography>
                  </Stack>
                  <LinearProgress variant="determinate" value={rule.progress} sx={{ height: 10, borderRadius: 99 }} />
                </Box>
              ))}

              <Stack direction="row" spacing={1.5} flexWrap="wrap">
                <Chip label={t("escalate")} color="error" />
                <Chip label={t("assign")} color="primary" />
                <Chip label={t("lift")} variant="outlined" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("journalTitle")}
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.reference")}</TableCell>
                  <TableCell>{t("tableHeaders.title")}</TableCell>
                  <TableCell>{t("tableHeaders.region")}</TableCell>
                  <TableCell>{t("tableHeaders.owner")}</TableCell>
                  <TableCell>{t("tableHeaders.level")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alertInbox.map((alert) => (
                  <TableRow key={alert.id} hover>
                    <TableCell>{alert.id}</TableCell>
                    <TableCell>{alert.title}</TableCell>
                    <TableCell>{alert.region}</TableCell>
                    <TableCell>{alert.owner}</TableCell>
                    <TableCell>
                      <Chip label={alert.level} size="small" color={levelColor(alert.level)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}