import { Card, CardContent, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { reportingExports, reportingKpis } from "@/app/mock-data";

const reportingKpiKeyByLabel: Record<string, string> = {
  Déclarations: "declarations",
  "Délai qualification médian": "medianQualificationDelay",
  "Alertes critiques": "criticalAlerts",
  "Taux clôture": "closureRate",
};

export default async function ReportingPage() {
  const t = await getTranslations("dashboard.pages.reporting");

  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight={800} gutterBottom>
              {t("titleMain")}
            </Typography>
            <Typography color="text.secondary">
              {t("subtitleMain")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grid container spacing={1.5}>
          {reportingKpis.map((kpi) => (
            <Grid key={kpi.label} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {t(`kpis.${reportingKpiKeyByLabel[kpi.label]}`)}
                  </Typography>
                  <Typography variant="h4" fontWeight={800}>
                    {kpi.value}
                  </Typography>
                  <Chip label={kpi.trend} size="small" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("exportsTitle")}
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.report")}</TableCell>
                  <TableCell>{t("tableHeaders.owner")}</TableCell>
                  <TableCell>{t("tableHeaders.generatedAt")}</TableCell>
                  <TableCell>{t("tableHeaders.status")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportingExports.map((item) => (
                  <TableRow key={item.name} hover>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.owner}</TableCell>
                    <TableCell>{item.generatedAt}</TableCell>
                    <TableCell>
                      <Chip size="small" label={item.status} color={item.status === "Ready" ? "success" : "warning"} />
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