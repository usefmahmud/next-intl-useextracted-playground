"use client";
import { useExtracted } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useExtracted();
  return (
    <div>
      <h1>{t("Hello world")}</h1>
      <h2>{t("Hello world")}</h2>
    </div>
  );
}
