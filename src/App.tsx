import React, { useState } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header toggleTheme={() => setIsDark(!isDark)}></Header>
      <Main isDark={isDark}></Main>
      <Footer></Footer>
    </>
  )
}

export default App
