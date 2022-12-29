import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function CancellationPolicy() {
  return (
    <>
      <Head>
        <title>STMS - Cancellation Policy</title>
        <meta
          name="description"
          content="STMS is a student management system that helps schools manage their students, and staff."
        />
      </Head>
      <Header />
      <main>
        <Container className="relative overflow-hidden pt-20 pb-20">
          <h1 className="text-center font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            <span
              className="relative whitespace-nowrap"
              style={{ color: '#04748e' }}
            >
              {' '}
              Cancellation and Refund Policy
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
          <div className="mx-auto text-lg mt-6 max-w-5xl  pt-20  tracking-tight text-slate-800">
            <h5 className='text-xl font-semibold text-black'>Enfono Technologies values your satisfaction with our
            software-as-a-service (SaaS) product (the stms). If you are not
            satisfied with the Product and wish to cancel your account or
            request a refund, please review the following policy.</h5>
            
            <p className="p-5 text-black font-medium">1 . Cancellation</p>
            You may cancel your account at any time by contacting us at{' '}
            <a href="mailto:" style={{ color: '#04748e' }}>
              mail
            </a>{' '}
            or through your account settings. Your cancellation will take effect
            at the end of your current billing period. If you cancel your
            account, you will not be charged for the following billing period,
            but you will not be entitled to a refund for any fees already paid.
            <p className="p-5 text-black font-medium">2 . Refunds</p> We do not offer
            refunds for fees already paid, except in the following
            circumstances:
            <ul className="p-5">
              <li>
                a . If we are unable to provide the Product as described in our
                terms and conditions due to technical issues or other problems
                beyond our control, we will issue a full or partial refund at
                our discretion.
              </li>
              <li className="mt-3">
                b . If you cancel your account within 14 days of signing up for
                a paid plan and have not used the Product, we will issue a full
                refund.
              </li>
            </ul>
            <p className="p-5 text-black font-medium">3 . Disputes</p> If you have a dispute
            regarding the Product or your account, please contact us at {''}
            <a href="mailto:" style={{ color: '#04748e' }}>
              mail
            </a>{' '}
            to resolve the issue. If we are unable toresolve the dispute to your
            satisfaction, you may have the right to pursue a claim through
            arbitration or small claims court, depending on the nature of the
            dispute.<p className="p-5 text-black font-medium">4 .  Changes to This Policy</p>  We reserve the right to update this
            Cancellation and Refund Policy at any time without notice to you.
            Your continued use of the Product after any changes to this policy
            will constitute your acceptance of such changes.
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
