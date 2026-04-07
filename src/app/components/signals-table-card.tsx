import { Card, CardContent, Chip, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

import { signals } from "@/app/data";

export default function SignalsTableCard() {
  const t = useTranslations("dashboard.signals");

  const getStatusColor = (statusKey: string) => {
    switch (statusKey) {
      case "validated":
        return "success" as const;
      case "pendingReview":
        return "warning" as const;
      case "highRisk":
        return "error" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <Grid size={{ xs: 12, md: 7 }}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {t("title")}
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t("columns.id")}</TableCell>
                <TableCell>{t("columns.species")}</TableCell>
                <TableCell>{t("columns.region")}</TableCell>
                <TableCell align="right">{t("columns.status")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {signals.map((signal) => (
                <TableRow key={signal.id} hover>
                  <TableCell>{signal.id}</TableCell>
                  <TableCell>{t(`species.${signal.species}`)}</TableCell>
                  <TableCell>{t(`regions.${signal.region}`)}</TableCell>
                  <TableCell align="right">
                    <Chip label={t(`statuses.${signal.statusKey}`)} size="small" color={getStatusColor(signal.statusKey)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
}
