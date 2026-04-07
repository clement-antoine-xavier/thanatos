import { Card, CardContent, Chip, Grid, Stack, Typography, type ChipProps, type SxProps, type Theme, type TypographyProps } from "@mui/material";
import type { ReactNode } from "react";

type HeaderChip = {
  key?: string;
  label: ReactNode;
  color?: ChipProps["color"];
  variant?: ChipProps["variant"];
};

type PageHeaderProps = {
  badge?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  chips?: HeaderChip[];
  actions?: ReactNode;
  children?: ReactNode;
  maxWidth?: number;
  titleVariant?: TypographyProps["variant"];
  titleComponent?: TypographyProps["component"];
  subtitleColor?: TypographyProps["color"];
  subtitleSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  density?: "regular" | "compact";
};

const regularContentSx: SxProps<Theme> = { p: { xs: 3, md: 4 } };
const compactContentSx: SxProps<Theme> = { p: 2 };

export function PageHeader({
  badge,
  title,
  subtitle,
  chips = [],
  actions,
  children,
  maxWidth = 760,
  titleVariant = "h4",
  titleComponent,
  subtitleColor = "text.secondary",
  subtitleSx,
  contentSx,
  density = "regular",
}: PageHeaderProps) {
  const showRightColumn = chips.length > 0 || Boolean(actions);
  const titleComponentProps = titleComponent ? { component: titleComponent } : {};
  const resolvedContentSx = contentSx ?? (density === "compact" ? compactContentSx : regularContentSx);

  return (
    <Grid size={{ xs: 12 }}>
      <Card>
      <CardContent sx={resolvedContentSx}>
          <Stack spacing={children ? 2 : 0}>
            <Stack direction={{ xs: "column", lg: "row" }} justifyContent="space-between" spacing={2}>
              <Stack sx={{ maxWidth }}>
                {badge ? <Chip label={badge} sx={{ mb: 2, width: "fit-content" }} /> : null}
                <Typography variant={titleVariant} fontWeight={800} gutterBottom {...titleComponentProps}>
                  {title}
                </Typography>
                {subtitle ? (
                  <Typography variant="body1" color={subtitleColor} sx={subtitleSx}>
                    {subtitle}
                  </Typography>
                ) : null}
              </Stack>

              {showRightColumn ? (
                actions ? (
                  <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} flexWrap="wrap" justifyContent="flex-end" width={{ xs: "100%", md: "auto" }}>
                    {actions}
                  </Stack>
                ) : (
                  <Stack direction={{ xs: "column", lg: "row" }} spacing={1} flexWrap="wrap" alignItems="flex-start">
                    {chips.map((chip, index) => (
                      <Chip key={chip.key ?? `chip-${index}`} label={chip.label} color={chip.color} variant={chip.variant} />
                    ))}
                  </Stack>
                )
              ) : null}
            </Stack>

            {children}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
