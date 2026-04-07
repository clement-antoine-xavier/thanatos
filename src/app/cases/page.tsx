import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
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

import { dossierAnimals, dossierParticipants, dossierTimeline } from "@/app/mock-data";
import { PageHeader } from "@/app/components/page-header";

const toneColor = (tone: string) => {
  switch (tone) {
    case "success":
      return "success" as const;
    case "info":
      return "info" as const;
    case "warning":
      return "warning" as const;
    default:
      return "default" as const;
  }
};

export default async function CasesPage() {
  const t = await getTranslations("dashboard.pages.cases");

  return (
    <Grid container spacing={2.5}>
      <PageHeader
        badge={t("badge")}
        title={t("caseTitle")}
        subtitle={t("caseSubtitle")}
        chips={[{ label: t("statusQueued") }, { label: t("statusSamples") }, { label: t("statusLab") }]}
      />

      <Grid size={{ xs: 12, lg: 7 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("timelineTitle")}
            </Typography>
            <Stack spacing={2}>
              {dossierTimeline.map((step, index) => (
                <Paper key={step.title} variant="outlined" sx={{ p: 2, bgcolor: index === 0 ? "grey.50" : "background.paper" }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Avatar sx={{ bgcolor: `${toneColor(step.tone)}.light`, color: `${toneColor(step.tone)}.dark`, width: 36, height: 36 }}>
                      {index + 1}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Stack direction="row" justifyContent="space-between" spacing={2}>
                        <Box>
                          <Typography fontWeight={700}>{step.title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {step.actor}
                          </Typography>
                        </Box>
                        <Chip label={step.time} size="small" />
                      </Stack>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {step.note}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <Stack spacing={2.5}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>
                  {t("summaryTitle")}
              </Typography>
              <Grid container spacing={1.5}>
                <Grid size={{ xs: 6 }}>
                  <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                    <Typography variant="body2" color="text.secondary">
                      {t("summary.animals")}
                    </Typography>
                    <Typography variant="h4" fontWeight={800}>
                      3
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                    <Typography variant="body2" color="text.secondary">
                      {t("summary.actions")}
                    </Typography>
                    <Typography variant="h4" fontWeight={800}>
                      4
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>
                {t("participantsTitle")}
              </Typography>
              <List disablePadding>
                {dossierParticipants.map((participant) => (
                  <ListItem key={participant.role} disableGutters sx={{ py: 1, borderBottom: "1px solid", borderColor: "divider" }}>
                    <ListItemAvatar sx={{ minWidth: 40 }}>
                      <Avatar sx={{ width: 30, height: 30 }}>{participant.role.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={participant.role} secondary={participant.name} />
                    <Chip label={participant.status} size="small" />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("animalsTitle")}
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.id")}</TableCell>
                  <TableCell>{t("tableHeaders.age")}</TableCell>
                  <TableCell>{t("tableHeaders.state")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dossierAnimals.map((animal) => (
                  <TableRow key={animal.id} hover>
                    <TableCell>{animal.id}</TableCell>
                    <TableCell>{animal.age}</TableCell>
                    <TableCell>
                      <Chip size="small" label={animal.status} color={animal.status === "Décédé" ? "error" : "info"} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {t("attachmentsTitle")}
            </Typography>
            <Stack spacing={1.5}>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography fontWeight={700}>{t("attachments.photos")}</Typography>
                  <Chip label={t("attachments.fileCount")} size="small" />
                </Stack>
              </Paper>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography fontWeight={700}>{t("attachments.removalSlip")}</Typography>
                  <Chip label={t("attachments.planned")} size="small" color="success" />
                </Stack>
              </Paper>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography fontWeight={700}>{t("attachments.vetReport")}</Typography>
                  <Chip label={t("attachments.toSign")} size="small" color="warning" />
                </Stack>
              </Paper>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}