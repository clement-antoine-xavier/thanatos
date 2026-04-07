import { Box, Button, Card, CardContent, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

import { pipelineTasks } from "@/app/data";

export default function PipelineTasksCard() {
  const t = useTranslations("dashboard.pipelineTasks");

  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {t("title")}
          </Typography>
          <Stack spacing={2}>
            {pipelineTasks.map((task) => (
              <Box key={task.key}>
                <Stack direction="row" justifyContent="space-between" mb={0.5}>
                  <Typography variant="body2">{t(`tasks.${task.key}`)}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {task.progress}%
                  </Typography>
                </Stack>
                <LinearProgress variant="determinate" value={task.progress} />
              </Box>
            ))}
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Button fullWidth variant="outlined">
            {t("openQueue")}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
