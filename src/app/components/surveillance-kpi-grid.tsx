import { Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

import { surveillanceKpis } from "@/app/data";

export default function SurveillanceKpiGrid() {
  const t = useTranslations("dashboard");

  return (
    <>
      {surveillanceKpis.map((stat) => (
        <Grid key={stat.labelKey} size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {t(`kpis.${stat.labelKey}`)}
              </Typography>
              <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                <Typography variant="h4" fontWeight={700}>
                  {stat.value}
                </Typography>
                <Chip size="small" label={stat.delta} color={stat.color} variant="outlined" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
