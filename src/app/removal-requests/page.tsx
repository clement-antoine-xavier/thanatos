import { Card, CardContent, Chip, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { removalRequests } from "@/app/mock-data";

export default async function RemovalRequestsPage() {
  const t = await getTranslations("dashboard.pages.removalRequests");

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
        <Card>
          <CardContent>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("tableHeaders.request")}</TableCell>
                  <TableCell>{t("tableHeaders.case")}</TableCell>
                  <TableCell>{t("tableHeaders.farm")}</TableCell>
                  <TableCell>{t("tableHeaders.slot")}</TableCell>
                  <TableCell>{t("tableHeaders.collector")}</TableCell>
                  <TableCell>{t("tableHeaders.status")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {removalRequests.map((item) => (
                  <TableRow key={item.requestId} hover>
                    <TableCell>{item.requestId}</TableCell>
                    <TableCell>{item.caseId}</TableCell>
                    <TableCell>{item.farm}</TableCell>
                    <TableCell>{item.slot}</TableCell>
                    <TableCell>{item.collector}</TableCell>
                    <TableCell>
                      <Chip size="small" label={item.status} color={item.status === "Collected" ? "success" : item.status === "Scheduled" ? "info" : "warning"} />
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