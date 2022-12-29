import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>STMS - Privacy Policy</title>
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
              Privacy Policy
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
              Enfono Technologies values the privacy of our users and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and share your personal
              information when you use our software-as-a-service (SaaS) product
              (the STMS). By using the Product, you agree to the collection,
              use, and sharing of your personal information as described in this
              Privacy Policy. If you do not agree with our policies and
              practices, do not use the Product.
            </h5>
            <p className="p-5 font-medium text-black">
              1 . Information We Collect
            </p>
            We collect information from you when you use the Product, register
            for an account, or otherwise interact with us. This information may
            include:
            <ul className="p-5">
              <li>
                a . Personal information, such as your name, email address, and
                phone number.
              </li>
              <li className="mt-3">
                b . Profile information, such as your username and profile
                picture.
              </li>

              <li className="mt-3">
                c . Payment information, such as your credit card or bank
                account information.
              </li>
              <li className="mt-3">
                d . Usage information, such as how you use the Product and the
                features you access.
              </li>
              <li className="mt-3">
                e . Device information, such as your IP address, browser type,
                and device identifier.
              </li>
            </ul>
            <p className="p-5 font-medium text-black">
              2 . How We Use Your Information
            </p>
            We use the information we collect from you to provide, maintain, and
            improve the Product, and to communicate with you. Specifically, we
            may use your information for the following purposes:
            <ul className="p-5">
              <li>
                a . To provide and improve the Product, including to fix errors,
                analyze usage, and personalize your experience.
              </li>
              <li className="mt-3">
                b . To communicate with you about the Product, including to send
                you updates and notifications.
              </li>

              <li className="mt-3">
                c . To process payments and prevent fraud.
              </li>
              <li className="mt-3">
                d . To enforce our policies and comply with legal obligations.
              </li>
            </ul>
            <p className="p-5 font-medium text-black">
              3 . How We Share Your Information
            </p>
            We may share your information with third parties for the following
            purposes:
            <ul className="p-5">
              <li>
                a . To provide the Product to you, including to our service
                providers who assist us with hosting, maintenance, and support.
              </li>
              <li className="mt-3">
                b . To comply with legal obligations, such as to respond to a
                subpoena or court order.
              </li>

              <li className="mt-3">
                c . To protect the rights, property, or safety of Enfono
                Technologies, our users, or others.
              </li>
              <li className="mt-3">
                d . With your consent or at your direction.
              </li>
            </ul>
            <p className="p-5 font-medium text-black">
              4 . Your Choices and Rights
            </p>
            You have the following choices and rights regarding your personal
            information:
            <ul className="p-5">
              <li>
                a . You can access, update, or delete your personal information
                at any time by logging into your account and accessing your
                profile settings.
              </li>
              <li className="mt-3">
                b . You can opt out of receiving marketing communications from
                us by following the unsubscribe instructions in the
                communication or by contacting us at{' '}
                <a href="mailto:" style={{ color: '#04748e' }}>
                  mail
                </a>{' '}
                .
              </li>

              <li className="mt-3">
                c . You have the right to request a copy of your personal
                information, to request that we delete your personal
                information, or to object to the processing of your personal
                information. You can exercise these rights by contacting us at{' '}
                <a href="mailto:" style={{ color: '#04748e' }}>
                  mail
                </a>{' '}
                .
              </li>
            </ul>
            <p className="p-5 font-medium text-black">
              5 . Data Retention and Security
            </p>
            We retain your personal information for as long as necessary to
            provide the Product and fulfill the purposes outlined in this
            Privacy Policy. We have implemented appropriate technical and
            organizational measures to protect your personal information from
            unauthorized access, use, or disclosure. However, no system can be
            completely secure, and we cannot guarantee the security of your
            personal information.
            <p className="p-5 font-medium text-black">6 . Children Privacy</p>
            The Product is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If we become aware that we have collected personal information from
            a child under 13, we will take steps to delete such information as
            soon as possible.
            <p className="p-5 font-medium text-black">
              7 . Changes to This Privacy Policy
            </p>
            We may update this Privacy Policy from time to time to reflect
            changes to our practices or for other operational, legal, or
            regulatory reasons. We encourage you to review this Privacy Policy
            periodically for the latest information on our privacy practices
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
