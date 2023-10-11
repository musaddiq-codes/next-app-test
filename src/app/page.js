import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar/Navbar'
import PageHeader from './components/PageHeader/PageHeader'
import Services from './components/Services/Services'
import About from './components/AboutMe/About'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.main_div}>
          <Navbar />
          <PageHeader />
          <Services />
          <About/>
        </div>
      </main>
    </>
  )
}
