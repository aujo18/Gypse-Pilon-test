import { Footer, Navbar } from '@components/common'
import Achievements from '@components/sections/Achievements'
import ContactUs from '@components/sections/ContactUs'
import Hero from '@components/sections/Hero'
import Partners from '@components/sections/Partners'
import Presentation from '@components/sections/Presentation'
import { Container } from '@components/ui'
import type { GetStaticPropsContext, NextPage } from 'next'

const Home: NextPage<{ locale: string }> = ({ locale }) => {
  return (
    <>
      <Navbar locale={locale} />
      <Hero />
      <Presentation />
      <Container>
        <hr className="mb-16 border-gray-300" />
      </Container>
      <Partners />
      <Achievements />
      <ContactUs />
      <Footer />
    </>
  )
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like, but the recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: require(`../config/${locale}.json`),
      locale,
    },
  }
}

export default Home
