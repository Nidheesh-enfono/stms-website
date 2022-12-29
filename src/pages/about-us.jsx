import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>STMS - About Us</title>
        <meta
          name="description"
          content="STMS is a student management system that helps schools manage their students, and staff."
        />
      </Head>
      <Header />
      <main>
        <Container className="relative overflow-hidden pt-15 pb-20">
        <h1 className="text-center font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        
        <span
          className="relative whitespace-nowrap"
          style={{ color: '#04748e' }}
        >About Us
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
        </span>{' '}
      </h1>
          <p className='mx-auto max-w-5xl mt-6  text-lg tracking-tight text-slate-700 pt-20'>
            <a href='#' style={{ color: '#04748e' }}>stms.one</a> is a brand owned by <a href='https://enfono.com' style={{ color: '#04748e' }}>Enfono Technologies</a>. Enfono is a
            software development company based in Kochi and Calicut, India. We
            specialize in building custom software solutions for a wide range of
            clients, from small businesses to large enterprises. Our team is
            made up of more than 20 talented and experienced software
            developers, designers, and project managers who are passionate about
            delivering high-quality products that meet the unique needs of our
            clients. We pride ourselves on our ability to understand our clients
            vision and translate it into a functional and user-friendly software
            solution. In addition to our technical expertise, we also value
            collaboration and clear communication. We work closely with our
            clients to ensure that their needs are being met throughout the
            development process. Since our founding, we have completed numerous
            successful projects for a variety of industries, including
            healthcare, finance, and e-commerce. Our goal is to help our clients
            streamline their processes, improve their efficiency, and achieve
            their business objectives through the power of technology. We are
            constantly evolving and seeking out new ways to improve our services
            and stay at the forefront of the software development industry. We
            are committed to delivering the best possible products and
            experiences to our clients. Thank you for considering Enfono
            Technologies for your software development needs. We look forward to
            the opportunity to work with you.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  )
}
