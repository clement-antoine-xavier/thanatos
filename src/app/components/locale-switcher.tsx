"use client";

import { useRouter } from "next/navigation";

import { Button, ButtonGroup } from "@mui/material";

type LocaleSwitcherProps = {
  currentLocale: string;
  englishLabel: string;
  frenchLabel: string;
};

function setLocaleCookie(locale: string) {
  document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LocaleSwitcher({ currentLocale, englishLabel, frenchLabel }: LocaleSwitcherProps) {
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    if (locale === currentLocale) {
      return;
    }

    setLocaleCookie(locale);
    router.refresh();
  };

  return (
    <ButtonGroup size="small" variant="outlined" aria-label="locale switcher">
      <Button onClick={() => handleLocaleChange("en")} variant={currentLocale === "en" ? "contained" : "outlined"}>
        {englishLabel}
      </Button>
      <Button onClick={() => handleLocaleChange("fr")} variant={currentLocale === "fr" ? "contained" : "outlined"}>
        {frenchLabel}
      </Button>
    </ButtonGroup>
  );
}