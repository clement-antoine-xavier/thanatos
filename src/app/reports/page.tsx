import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { getTranslations } from "next-intl/server";

import { recentDeclarations, multipleDeathMock, singleDeathMock } from "@/app/mock-data";

const fieldSx = { bgcolor: "grey.50" };

export default async function ReportsPage() {
  const t = await getTranslations("dashboard.pages.reports");

  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction={{ xs: "column", lg: "row" }} justifyContent="space-between" spacing={2}>
              <Box sx={{ maxWidth: 760 }}>
                <Chip label={t("badge")} sx={{ mb: 2 }} />
                <Typography variant="h4" fontWeight={800} gutterBottom>
                  {t("title")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t("subtitle")}
                </Typography>
              </Box>
              <Stack direction={{ xs: "column", lg: "row" }} spacing={1} flexWrap="wrap" alignItems="flex-start">
                <Chip label={t("titleSingle")} color="primary" />
                <Chip label={t("titleMultiple")} color="warning" />
                <Chip label={t("fields.removal")} color="info" />
              </Stack>
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
                  {t("titleSingle")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("subtitleSingle")}
                </Typography>
              </Box>
              <Chip label={singleDeathMock.reference} />
            </Stack>

            <Grid container spacing={1.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label={t("fields.farm")} value={singleDeathMock.farm} InputProps={{ readOnly: true }} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label={t("fields.animalId")} value={singleDeathMock.animalId} InputProps={{ readOnly: true }} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label={t("fields.species")} value={singleDeathMock.species} InputProps={{ readOnly: true }} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label={t("fields.date")} value={singleDeathMock.date} InputProps={{ readOnly: true }} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label={t("fields.removal")} value={singleDeathMock.removal} InputProps={{ readOnly: true }} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label={t("fields.location")} value={singleDeathMock.location} InputProps={{ readOnly: true }} sx={fieldSx} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label={t("fields.symptoms")}
                  value={singleDeathMock.symptoms}
                  InputProps={{ readOnly: true }}
                  sx={fieldSx}
                />
              </Grid>
            </Grid>

            <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} mt={2}>
              <Button variant="contained" fullWidth sx={{ width: { xs: "100%", md: "auto" } }}>{t("submit")}</Button>
              <Button variant="outlined" fullWidth sx={{ width: { xs: "100%", md: "auto" } }}>{t("saveDraft")}</Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  {t("titleMultiple")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("subtitleMultiple")}
                </Typography>
              </Box>
              <Chip label={multipleDeathMock.reference} color="warning" />
            </Stack>

            <Stack spacing={1.5}>
              <TextField fullWidth label={t("fields.farmGroup")} value={multipleDeathMock.farm} InputProps={{ readOnly: true }} sx={fieldSx} />
              <Grid container spacing={1.5}>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth label={t("fields.batch")} value={multipleDeathMock.batch} InputProps={{ readOnly: true }} sx={fieldSx} />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth label={t("fields.window")} value={multipleDeathMock.window} InputProps={{ readOnly: true }} sx={fieldSx} />
                </Grid>
              </Grid>
              <Grid container spacing={1.5}>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth label={t("fields.expectedDeaths")} value={multipleDeathMock.expected} InputProps={{ readOnly: true }} sx={fieldSx} />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth label={t("fields.observedDeaths")} value={multipleDeathMock.observed} InputProps={{ readOnly: true }} sx={fieldSx} />
                </Grid>
              </Grid>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                <Stack spacing={0.75}>
                  <Typography variant="body2" color="text.secondary">
                    {t("subtitleMultiple")}
                  </Typography>
                  <Typography variant="h4" fontWeight={800}>
                    x8.5
                  </Typography>
                  <Typography variant="body2">
                    Prostration, baisse d’ingestion et mortalité nocturne rattachées au même lot.
                  </Typography>
                </Stack>
              </Paper>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label={t("fields.associatedSymptoms")}
                value={multipleDeathMock.symptom}
                InputProps={{ readOnly: true }}
                sx={fieldSx}
              />
              <Button variant="contained">{t("escalateCase")}</Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  {t("lastReportsTitle")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("lastReportsSubtitle")}
                </Typography>
              </Box>
              <Button variant="outlined">{t("filterDeclarations")}</Button>
            </Stack>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.reference")}</TableCell>
                  <TableCell>{t("tableHeaders.report")}</TableCell>
                  <TableCell>{t("tableHeaders.actor")}</TableCell>
                  <TableCell>{t("tableHeaders.status")}</TableCell>
                  <TableCell align="right">{t("tableHeaders.time")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentDeclarations.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.actor}</TableCell>
                    <TableCell>
                      <Chip size="small" label={item.status} color={item.status === "Critique" ? "error" : item.status === "Planifié" ? "success" : "warning"} />
                    </TableCell>
                    <TableCell align="right">{item.time}</TableCell>
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