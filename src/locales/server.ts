// locales/server.ts
import { createI18nServer } from "next-international/server"

export const { getI18n, getScopedI18n, I18nProviderServer, getStaticParams } =
  createI18nServer({
    en: () => import("./en"),
    fr: () => import("./fr"),
  })
