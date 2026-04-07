import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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

import { overviewActivity, overviewAlerts, overviewCases, overviewFlow, overviewMetrics, overviewTerritories } from "@/app/mock-data";

const alertColor = (severity: string) => {
  switch (severity) {
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

const priorityColor = (priority: string) => {
  switch (priority) {
    case "Haute":
      return "error" as const;
    case "Moyenne":
      return "warning" as const;
    default:
      return "success" as const;
  }
};

export default async function Page() {
  const t = await getTranslations("dashboard.pages.overview");

  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <Card sx={{ overflow: "hidden" }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={2.5}>
              <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="flex-start" spacing={2}>
                <Box sx={{ maxWidth: 760 }}>
                  <Chip label={t("badge")} sx={{ mb: 2 }} />
                  <Typography component="h1" variant="h3" fontWeight={800} gutterBottom>
                    {t("heroTitle")}
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: 760, opacity: 0.92, fontWeight: 500 }}>
                    {t("heroSubtitle")}
                  </Typography>
                </Box>

                <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} flexWrap="wrap" justifyContent="flex-end" width={{ xs: "100%", md: "auto" }}>
                  <Button href="/reports" variant="contained" fullWidth sx={{ width: { xs: "100%", md: "auto" } }}>
                    {t("heroActions.newReport")}
                  </Button>
                  <Button href="/alerts" variant="outlined" fullWidth sx={{ width: { xs: "100%", md: "auto" } }}>
                    {t("heroActions.viewAlerts")}
                  </Button>
                </Stack>
              </Stack>

              <Divider />

              <Grid container spacing={2}>
                {overviewMetrics.map((metric) => (
                  <Grid key={metric.label} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        bgcolor: "grey.50",
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={2}>
                        <Box>
                          <Typography variant="body2" sx={{ opacity: 0.88 }}>
                            {metric.label}
                          </Typography>
                          <Typography variant="h4" fontWeight={800}>
                            {metric.value}
                          </Typography>
                        </Box>
                        <Chip label={metric.delta} size="small" />
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 8 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography component="h2" variant="h6" fontWeight={800}>
                  {t("pipelineTitle")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("pipelineSubtitle")}
                </Typography>
              </Box>
              <Chip label={t("pipelineLastUpdate")} />
            </Stack>

            <Stack spacing={2}>
              {overviewFlow.map((step) => (
                <Box key={step.label}>
                  <Stack direction="row" justifyContent="space-between" alignItems="baseline" mb={0.75}>
                    <Box>
                      <Typography fontWeight={700}>{step.label}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.detail}
                      </Typography>
                    </Box>
                    <Typography variant="h6" fontWeight={800}>
                      {step.count}
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={step.progress}
                    aria-label={`${step.label} progress`}
                    sx={{ height: 10, borderRadius: 99 }}
                  />
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography component="h2" variant="h6" fontWeight={800} gutterBottom>
              {t("alertsTitle")}
            </Typography>
            <List disablePadding>
              {overviewAlerts.map((alert) => (
                <ListItem
                  key={alert.id}
                  disableGutters
                  sx={{
                    py: 1.5,
                    px: 0,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    alignItems: "flex-start",
                  }}
                  secondaryAction={<Chip label={alert.severity} color={alertColor(alert.severity)} variant="outlined" size="small" />}
                >
                  <ListItemAvatar sx={{ minWidth: 44 }}>
                    <Avatar sx={{ bgcolor: "primary.dark", color: "common.white", width: 32, height: 32 }}>
                      {alert.id.slice(-2)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={alert.title}
                    secondary={`${alert.region} · ${alert.owner} · ${alert.updated}`}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 7 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography component="h2" variant="h6" fontWeight={800}>
                  {t("casesTitle")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("casesSubtitle")}
                </Typography>
              </Box>
              <Button href="/cases" variant="outlined">
                {t("openQueue")}
              </Button>
            </Stack>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.case")}</TableCell>
                  <TableCell>{t("tableHeaders.farm")}</TableCell>
                  <TableCell>{t("tableHeaders.species")}</TableCell>
                  <TableCell>{t("tableHeaders.priority")}</TableCell>
                  <TableCell align="right">{t("tableHeaders.updated")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {overviewCases.map((caseItem) => (
                  <TableRow key={caseItem.id} hover>
                    <TableCell>
                      <Stack spacing={0.25}>
                        <Typography fontWeight={700}>{caseItem.id}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {caseItem.status}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{caseItem.farm}</TableCell>
                    <TableCell>{caseItem.species}</TableCell>
                    <TableCell>
                      <Chip size="small" label={caseItem.priority} color={priorityColor(caseItem.priority)} />
                    </TableCell>
                    <TableCell align="right">{caseItem.lastUpdate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography component="h2" variant="h6" fontWeight={800} gutterBottom>
              {t("territoriesTitle")}
            </Typography>
            <Grid container spacing={1.5}>
              {overviewTerritories.map((territory) => (
                <Grid key={territory.region} size={{ xs: 6 }}>
                  <Paper variant="outlined" sx={{ p: 2, height: "100%", bgcolor: "grey.50" }}>
                    <Stack spacing={1}>
                      <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                        <Typography fontWeight={700}>{territory.region}</Typography>
                        <Chip label={territory.delta} size="small" color={territory.tone} />
                      </Stack>
                      <Typography variant="h5" fontWeight={800}>
                        {territory.deaths}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t("deathsSuffix")}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography component="h2" variant="h6" fontWeight={800} gutterBottom>
              {t("activityTitle")}
            </Typography>
            <Stack spacing={1.5}>
              {overviewActivity.map((item) => (
                <Paper key={item.label} variant="outlined" sx={{ p: 1.75, bgcolor: "grey.50" }}>
                  <Stack direction="row" justifyContent="space-between" spacing={2}>
                    <Box>
                      <Typography fontWeight={700}>{item.label}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.detail}
                      </Typography>
                    </Box>
                    <Chip label={item.time} size="small" />
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}