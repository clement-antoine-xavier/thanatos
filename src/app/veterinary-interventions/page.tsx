import { Card, CardContent, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { veterinaryInterventions, veterinarySamples } from "@/app/mock-data";
import { PageHeader } from "@/app/components/page-header";

export default async function VeterinaryInterventionsPage() {
  const t = await getTranslations("dashboard.pages.veterinaryInterventions");

  return (
    <Grid container spacing={2.5}>
      <PageHeader title={t("titleMain")} subtitle={t("subtitleMain")} titleVariant="h5" density="compact" />

      <Grid size={{ xs: 12, lg: 7 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("visitsTitle")}
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.case")}</TableCell>
                  <TableCell>{t("tableHeaders.farm")}</TableCell>
                  <TableCell>{t("tableHeaders.veterinarian")}</TableCell>
                  <TableCell>{t("tableHeaders.slot")}</TableCell>
                  <TableCell>{t("tableHeaders.priority")}</TableCell>
                  <TableCell>{t("tableHeaders.status")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {veterinaryInterventions.map((visit) => (
                  <TableRow key={visit.caseId} hover>
                    <TableCell>{visit.caseId}</TableCell>
                    <TableCell>{visit.farm}</TableCell>
                    <TableCell>{visit.veterinarian}</TableCell>
                    <TableCell>{visit.visitAt}</TableCell>
                    <TableCell>
                      <Chip size="small" label={visit.priority} color={visit.priority === "Urgent" ? "error" : visit.priority === "High" ? "warning" : "default"} />
                    </TableCell>
                    <TableCell>{visit.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("samplesTitle")}
            </Typography>
            <Stack spacing={1.5}>
              {veterinarySamples.map((sample) => (
                <Card key={sample.sampleId} variant="outlined">
                  <CardContent sx={{ p: 1.5 }}>
                    <Typography fontWeight={700}>{sample.sampleId}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {sample.caseId} · {sample.type} · {sample.destination}
                    </Typography>
                    <Stack direction="row" spacing={1} mt={1}>
                      <Chip size="small" label={sample.chain} color={sample.chain === "Conforme" ? "success" : "warning"} />
                      <Chip size="small" label={sample.result} variant="outlined" />
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}