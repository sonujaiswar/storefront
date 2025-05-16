import "@fontsource/nunito";
import "@fontsource/playfair-display";
import "@fontsource/roboto";
import "@/styles/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import StateUI from "@/app/system/StateUI";

import localFont from "next/font/local";
import ResponsiveWatcher from "@/helper/ResponsiveWatcher";
const Rostema = localFont({
  src: "./fonts/Rostema.woff",
  variable: "--font-rostema",
  weight: "400",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={` ${Rostema.variable} `}>
        <NextIntlClientProvider>
          <StateUI>
            <ResponsiveWatcher />
            {children}
          </StateUI>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
