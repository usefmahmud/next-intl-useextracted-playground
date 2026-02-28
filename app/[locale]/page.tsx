"use client";
import { useExtracted } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useExtracted();
  return (
    <div>
      <h1>{t("Hello world")}</h1>
      <p>{t("Welcome to our application")}</p>

      <p>
        {t("Your Name is not {name}", {
          name: "Yousef",
        })}
      </p>
    </div>
  );
}
