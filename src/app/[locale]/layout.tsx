// app/[locale]/layout.tsx
import { ReactElement } from "react"
import { I18nProviderServer } from "../../locales/server"

export default function RootLayout({
  children,
  params,
}: {
  children: ReactElement
  params: { locale: string }
}) {
  return (
    <I18nProviderServer locale={params.locale}>{children}</I18nProviderServer>
  )
}
