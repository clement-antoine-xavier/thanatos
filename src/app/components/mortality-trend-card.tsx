import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

import { mortalityTrendHeights } from "@/app/data";

export default function MortalityTrendCard() {
  const t = useTranslations("dashboard.mortalityTrend");

  return (
    <Grid size={{ xs: 12, lg: 8 }}>
      <Card>
        <CardContent>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={1}
            mb={2}
          >
            <Typography variant="h6" fontWeight={700}>
              {t("title")}
            </Typography>
            <Chip label={t("period")} size="small" />
          </Stack>
          <Stack direction="row" spacing={1} alignItems="flex-end" sx={{ height: 240 }}>
            {mortalityTrendHeights.map((height, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  borderRadius: 1,
                  bgcolor: index > 8 ? "primary.main" : "primary.light",
                  height: `${height}%`,
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
