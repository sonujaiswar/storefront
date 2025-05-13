import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en-in", "hi-in"],

  // Used when no locale matches
  defaultLocale: "en-in",
});
