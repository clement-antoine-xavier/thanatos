import { Avatar, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

import { surveillanceActivities } from "@/app/data";

export default function SurveillanceActivityCard() {
  const t = useTranslations("dashboard.activity");

  return (
    <Grid size={{ xs: 12, md: 5 }}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {t("title")}
          </Typography>
          <List disablePadding>
            {surveillanceActivities.map((item, index) => (
              <ListItem key={item.key} disableGutters sx={{ py: 1 }}>
                <ListItemAvatar sx={{ minWidth: 42 }}>
                  <Avatar sx={{ width: 28, height: 28 }}>{index + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={t(`items.${item.key}`)}
                  secondary={t("time", { hour: item.hour, minute: item.minute })}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}
