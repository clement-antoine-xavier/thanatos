import { Box, Card, CardContent, Chip, Grid, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { administrationImports, administrationReferentials, administrationUsers } from "@/app/mock-data";

export default async function AdministrationPage() {
  const t = await getTranslations("dashboard.pages.administration");

  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction={{ xs: "column", lg: "row" }} justifyContent="space-between" spacing={2}>
              <Box sx={{ maxWidth: 760 }}>
                <Chip label={t("badge")} sx={{ mb: 2 }} />
                <Typography variant="h4" fontWeight={800} gutterBottom>
                  {t("titleMain")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t("subtitleMain")}
                </Typography>
              </Box>
              <Stack direction={{ xs: "column", lg: "row" }} spacing={1} flexWrap="wrap" alignItems="flex-start">
                <Chip label={t("chips.users")} color="primary" />
                <Chip label={t("chips.imports")} color="warning" />
                <Chip label={t("chips.audit")} color="success" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 7 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("usersTitle")}
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.name")}</TableCell>
                  <TableCell>{t("tableHeaders.role")}</TableCell>
                  <TableCell>{t("tableHeaders.territory")}</TableCell>
                  <TableCell>{t("tableHeaders.status")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {administrationUsers.map((user) => (
                  <TableRow key={user.name} hover>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.territory}</TableCell>
                    <TableCell>
                      <Chip size="small" label={user.status} color={user.status === "Actif" ? "success" : "warning"} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <Stack spacing={2.5}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>
                {t("referentialsTitle")}
              </Typography>
              <Stack spacing={1.5}>
                {administrationReferentials.map((ref) => (
                  <Paper key={ref.label} variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography fontWeight={700}>{ref.label}</Typography>
                      <Chip label={ref.value} size="small" color={ref.tone} />
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>
                {t("importsTitle")}
              </Typography>
              <Stack spacing={1.5}>
                {administrationImports.map((job) => (
                  <Paper key={job.source} variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                    <Stack spacing={0.75}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontWeight={700}>{job.source}</Typography>
                        <Chip label={job.status} size="small" color={job.status === "Réussi" ? "success" : "warning"} />
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {job.volume} · Dernier run {job.lastRun}
                      </Typography>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
}