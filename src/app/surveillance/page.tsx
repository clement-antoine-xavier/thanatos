import { Box, Card, CardContent, Chip, Grid, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { surveillanceSignals, surveillanceTerritories } from "@/app/mock-data";
import { PageHeader } from "@/app/components/page-header";

const trendHeights = [32, 44, 38, 56, 49, 68, 61, 75, 69, 82, 76, 88];

export default async function SurveillancePage() {
  const t = await getTranslations("dashboard.pages.surveillance");

  return (
    <Grid container spacing={2.5}>
      <PageHeader
        badge={t("badge")}
        title={t("titleMain")}
        subtitle={t("subtitleMain")}
        maxWidth={780}
        chips={[{ label: t("chips.detection") }, { label: t("chips.clustering") }, { label: t("chips.trends") }]}
      >
        <Grid container spacing={2}>
          {surveillanceTerritories.map((territory) => (
            <Grid key={territory.region} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Paper sx={{ p: 2.25, bgcolor: "grey.50" }}>
                <Stack spacing={0.75}>
                  <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                    <Typography fontWeight={700}>{territory.region}</Typography>
                    <Chip size="small" label={territory.trend} />
                  </Stack>
                  <Typography variant="h4" fontWeight={800}>
                    {territory.rate}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {territory.hotspots} {t("territorySuffix")}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </PageHeader>

      <Grid size={{ xs: 12, lg: 5 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("trendTitle")}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1, height: 260, mt: 2 }}>
              {trendHeights.map((height, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    height: `${height}%`,
                    borderRadius: 2,
                    bgcolor: index > 7 ? "primary.main" : "primary.light",
                  }}
                />
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {t("trendSubtitle")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 7 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("signalsTitle")}
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.signal")}</TableCell>
                  <TableCell>{t("tableHeaders.species")}</TableCell>
                  <TableCell>{t("tableHeaders.region")}</TableCell>
                  <TableCell>{t("tableHeaders.expected")}</TableCell>
                  <TableCell>{t("tableHeaders.observed")}</TableCell>
                  <TableCell>{t("tableHeaders.status")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {surveillanceSignals.map((signal) => (
                  <TableRow key={signal.id} hover>
                    <TableCell>{signal.id}</TableCell>
                    <TableCell>{signal.species}</TableCell>
                    <TableCell>{signal.region}</TableCell>
                    <TableCell>{signal.expected}</TableCell>
                    <TableCell>{signal.observed}</TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        label={signal.status}
                        color={signal.status === "Validé" ? "success" : signal.status === "Risque élevé" ? "error" : signal.status === "En revue" ? "warning" : "default"}
                      />
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