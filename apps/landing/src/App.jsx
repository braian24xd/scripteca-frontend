import Header from "./components/layout/Header/Header"
import HomePage from '@pages/HomePage/HomePage'
import AboutPage from '@pages/AboutPage/AboutPage'
import Footer from '@components/layout/Footer/Footer'
import '@styles/global.scss'

function App() {

  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default App
