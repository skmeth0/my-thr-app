import { ArrowDownToLine, ArrowUpRight, BookOpen, Layers3, Sparkles } from "lucide-react"

const downloadUrl = "https://github.com/skmeth0/my-thr-app/releases/download/v2.0.0/base.2.apk"

const highlights = [
  {
    number: "01",
    icon: Layers3,
    title: "Две вселенные. Один мир.",
    description: "Объединяйте фракции Тедкарей и Хижаков в общей вселенной.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Лор, который растёт",
    description: "Собирайте историю, персонажей и детали мира в одном месте.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Пространство для идей",
    description: "Находите новые связи и создавайте собственные сюжетные линии.",
  },
]

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="THR APP — на главную">
          <span className="wordmark-mark">T</span>
          <span>THR<span className="wordmark-light">.APP</span></span>
        </a>
        <a className="github-link" href="https://github.com/skmeth0/my-thr-app/releases/tag/v2.0.0" target="_blank" rel="noreferrer">
          Релиз 2.0 <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> МИР ТЕДКАРЕЙ И ХИЖАКОВ</p>
          <h1 id="hero-title">Две стороны.<br /><span>Одна история.</span></h1>
          <p className="hero-description">
            THR APP объединяет фракции Тедкарей и Хижаков в одном мире. Исследуйте общий лор, находите новые связи и продолжайте историю по-своему.
          </p>
          <a className="download-button" href={downloadUrl} aria-label="Скачать THR APP для Android">
            <span className="download-icon"><ArrowDownToLine aria-hidden="true" /></span>
            <span className="button-copy"><strong>Скачать THR APP</strong><small>Для Android · APK</small></span>
            <span className="button-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </a>
          <p className="download-note">Версия 2.0 · Прямая загрузка с GitHub</p>
        </div>

        <div className="hero-art" aria-label="Символ единого мира THR" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-cross cross-one" />
          <div className="art-cross cross-two" />
          <div className="art-core"><span>T</span><i>H</i><b>R</b></div>
          <span className="art-caption caption-top">TEDKAREI / 01</span>
          <span className="art-caption caption-bottom">KHIJAK / 02</span>
          <span className="art-index">EST. IN LORE</span>
        </div>
      </section>

      <section className="highlights" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">ВНУТРИ ПРИЛОЖЕНИЯ</p>
          <h2 id="features-title">Больше, чем две фракции.</h2>
        </div>
        <div className="feature-grid">
          {highlights.map(({ number, icon: Icon, title, description }) => (
            <article className="feature" key={number}>
              <div className="feature-top"><span>{number}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>THR APP <span className="footer-muted">— мир продолжается.</span></span>
        <a href={downloadUrl}>Начать исследовать <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </main>
  )
}
