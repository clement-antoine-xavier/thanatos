import { Card, CardContent, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { laboratoryQueue, laboratoryResults } from "@/app/mock-data";
import { PageHeader } from "@/app/components/page-header";

export default async function LaboratoryOperationsPage() {
  const t = await getTranslations("dashboard.pages.laboratoryOperations");

  return (
    <Grid container spacing={2.5}>
      <PageHeader title={t("titleMain")} subtitle={t("subtitleMain")} titleVariant="h5" density="compact" />

      <Grid size={{ xs: 12, lg: 7 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("queueTitle")}
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.sample")}</TableCell>
                  <TableCell>{t("tableHeaders.case")}</TableCell>
                  <TableCell>{t("tableHeaders.species")}</TableCell>
                  <TableCell>{t("tableHeaders.analysis")}</TableCell>
                  <TableCell>{t("tableHeaders.priority")}</TableCell>
                  <TableCell>{t("tableHeaders.status")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {laboratoryQueue.map((item) => (
                  <TableRow key={item.sampleId} hover>
                    <TableCell>{item.sampleId}</TableCell>
                    <TableCell>{item.caseId}</TableCell>
                    <TableCell>{item.species}</TableCell>
                    <TableCell>{item.analysis}</TableCell>
                    <TableCell>
                      <Chip size="small" label={item.priority} color={item.priority === "Urgent" ? "error" : item.priority === "High" ? "warning" : "default"} />
                    </TableCell>
                    <TableCell>{item.status}</TableCell>
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
              {t("resultsTitle")}
            </Typography>
            <Stack spacing={1.5}>
              {laboratoryResults.map((result) => (
                <Card key={result.resultId} variant="outlined">
                  <CardContent sx={{ p: 1.5 }}>
                    <Typography fontWeight={700}>{result.resultId}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.caseId} · {result.pathogen}
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1} mt={1}>
                      <Chip size="small" label={result.interpretation} color={result.interpretation === "Positive" ? "error" : result.interpretation === "Negative" ? "success" : "warning"} />
                      <Chip size="small" label={result.publishedAt} variant="outlined" />
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