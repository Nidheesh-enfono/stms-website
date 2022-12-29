import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>STMS - Terms and Conditions</title>
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
              Terms and Conditions
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
          <div className="mx-auto mt-6 max-w-5xl pt-20  text-lg  tracking-tight text-slate-800">
            <h5 className="text-xl font-semibold text-black">
              Welcome to STMS! These terms and conditions (the Terms) are a
              legally binding agreement between you and Enfono Technologies
              regarding your use of our software-as-a-service (SaaS) product
              (the STMS). By using the Product, you agree to be bound by these
              Terms. If you do not agree to these Terms, you may not use the
              Product.
            </h5>
            <p className="p-5 font-normal text-black">
              1 . License and Access. Enfono Technologies grants you a limited,
              non-exclusive, non-transferable, revocable license to access and
              use the Product in accordance with these Terms. You may not
              modify, distribute, sell, or transfer any part of the Product, or
              use it for any commercial purpose not specifically authorized by
              Enfono Technologies. You are responsible for maintaining the
              confidentiality of your account and password and for restricting
              access to your computer or device, and you agree to accept
              responsibility for all activities that occur under your account or
              password.
            </p>
            <p className="p-5 font-normal text-black">
              2 . Intellectual Property. The Product and all content and
              materials included on it, including but not limited to text,
              graphics, logos, images, and software, are the property of Enfono
              Technologies or its licensors and are protected by copyright and
              other intellectual property laws. You may not use any content or
              materials on the Product for any commercial purpose without the
              express written consent of Enfono Technologies.
            </p>
            <p className="p-5 font-normal text-black">
              3 . Disclaimer of Warranties. The Product is provided on an{' '}
              {'as is'}
              and {'as available'} basis. Enfono Technologies makes no
              representations or warranties of any kind, express or implied, as
              to the operation of the Product or the information, content,
              materials, or products included on it. Enfono Technologies will
              not be liable for any damages of any kind arising from the use of
              the Product, including but not limited to direct, indirect,
              incidental, punitive, and consequential damages.
            </p>
            <p className="p-5 font-normal text-black">
              4 . Limitation of Liability. Enfono Technologies will not be
              liable for any damages of any kind arising from the use of the
              Product, including but not limited to direct, indirect,
              incidental, punitive, and consequential damages, even if Enfono
              Technologies has been advised of the possibility of such damages.
            </p>
            <p className="p-5 font-normal text-black">
              5 . Termination. Enfono Technologies reserves the right, in its
              sole discretion, to terminate your access to the Product and to
              block or prevent your future access to the Product without notice.
            </p>
            <p className="p-5 font-normal text-black">
              6 . Governing Law. These Terms and your use of the Product will be
              governed by and construed in accordance with the laws of the State
              of [State], without giving effect to any principles of conflicts
              of law.
            </p>
            <p className="p-5 font-normal text-black">
              7 . Changes to the Terms. Enfono Technologies reserves the right
              to update these Terms at any time without notice to you. Your
              continued use of the Product after any changes to these Terms will
              constitute your acceptance of such changes.
            </p>
            <p className="p-5 font-normal text-black">
              8 . Entire Agreement. These Terms constitute the entire agreement
              between you and Enfono Technologies regarding the use of the
              Product. If any provision of these Terms is found to be invalid or
              unenforceable, that provision will be enforced to the maximum
              extent possible and the remaining provisions will remain in full
              force and effect.
            </p>
            <p className="p-5 font-normal text-black">
              9 . Contact Information. If you have any questions about these
              Terms or the Product, please contact us at{' '}
              <a href="mailto:" style={{ color: '#04748e' }}>
                mail
              </a>{' '}
              .
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
