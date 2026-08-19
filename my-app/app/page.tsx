'use client'
import Navbar from "./components/ui/Navbar"
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import Page4 from "./Pages/Page4"
import Page5 from "./Pages/Page5"
import Page6 from "./Pages/Page6"
import Page7 from "./Pages/Page7"
import Footer from "./components/ui/Footer"

import Wrapper from "./components/ui/Wrapper"


export default function Home() {
  return (
    <>
    <Navbar /> {/* ini komponen */}
    <main>
      <Wrapper delay={0.2}>
        <Page1 />
      </Wrapper>

      <Wrapper delay={0.05}>
        <Page2 />
      </Wrapper>

      <Wrapper delay={0.1}>
        <Page3 />
      </Wrapper>
      
        <Page4 />

      <Wrapper delay={0.1}>
        <Page5 />
      </Wrapper>

      <Wrapper delay={0.1}>
        <Page6 />
      </Wrapper>

      <Wrapper delay={0.1}>
        <Page7 />
      </Wrapper>

    </main>
    
    <Footer /> 
    </>
  )
}