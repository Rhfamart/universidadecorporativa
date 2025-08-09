import Head from 'next/head'
import Hero from '../components/Hero'
import Feed from '../components/Feed'
import ProgressSidebar from '../components/ProgressSidebar'

export default function Home() {
  return (
    <div className="page">
      <Head><title>UniCorp • Universidade Corporativa</title></Head>
      <header className="siteHeader">
        <div className="brand"><img src="/assets/logo.png" alt="logo" /> <strong>UniCorp</strong></div>
        <div className="cta"><a className="btn" href="#">Agende uma demo</a></div>
      </header>
      <main className="container">
        <Hero />
        <div className="layout">
          <Feed />
          <ProgressSidebar />
        </div>
      </main>
      <footer className="footer">Universidade Corporativa • Protótipo</footer>
    </div>
  )
}