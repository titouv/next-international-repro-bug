// Server Component
import {
  getI18n,
  getScopedI18n,
  getStaticParams,
} from "../../../locales/server"

async function Page() {
  const t = await getI18n()
  const scopedT = await getScopedI18n("hello")

  return (
    <div>
      <p>{t("hello")}</p>

      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>
    </div>
  )
}
export default function Home() {
  return <Page />
}
