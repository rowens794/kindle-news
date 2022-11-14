import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={"TBD Terms and Conditions"} />
      </Head>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block pt-12 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-700 sm:text-4xl">
              Terms and Conditions
            </span>
            <span className="block text-sm font-light tracking-wide text-center uppercase text-indigo-600">
              Effective Date: 9/15/2021
            </span>
          </h1>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Introduction
          </h2>

          <p className="mt-4 font-light text-gray-700">
            This agreement constitutes a binding legal contract between TBD, LLC
            (“TBD ”) (sometimes referred to as “we”, “us” or “our”) and you,
            with respect to your use of www.TBD.co and all websites,
            applications and communications that post a link to this agreement
            (collectively, the “Site”)(“Terms and Conditions”).
          </p>

          <p className="mt-4 font-light text-gray-700">
            We reserve our right to change these Terms and Conditions in the
            future. Except as explicitly stated otherwise, your continued use of
            the Site will constitute deemed acceptance of our updated Terms and
            Conditions.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">Site</h2>
          <p className="mt-4 font-light text-gray-700">
            We may from time to time, at our sole and absolute discretion and
            without notice to you, update the Site (or any part of it). We will
            not be liable to you or any third party for any modification,
            variation, interruption, suspension or discontinuation of the Site.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            The Site may provide links to third party websites that are not
            owned, managed or controlled by us. You expressly acknowledge and
            agree that we are not responsible for the content of those third
            party websites. You are encouraged to read that third party’s terms
            and conditions, privacy policy and any other document that governs
            your relationship with that third party.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            The Site uses cookies in accordance with our Cookies Policy, which
            can be found here: www.TBD.co/cookies
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Account
          </h2>
          <p className="mt-4 font-light text-gray-700">
            To access certain features on the Site, you may be required to
            create an account with us in the form provided by us.
          </p>
          <p className="mt-4 font-light text-gray-700">
            You agree that by registering an account with us that: all
            information you provide to us during the registration process is
            true and accurate to the best of your belief; you are at least 18
            years of age; and you have capacity to enter into contractual
            arrangements.
          </p>
          <p className="mt-4 font-light text-gray-700">
            You agree that you are solely responsible for your account and all
            activities conducted on your account. You must keep your password
            and any other login information private and secure. Your account is
            registered to you, and you may not assign, transfer or otherwise
            dispose of your interest in your account without our express written
            permission.
          </p>
          <p className="mt-4 font-light text-gray-700">
            We may, from time to time, provide rules that govern your activities
            whilst using your account (“Account Rules”). You expressly
            acknowledge and agree that you will abide by these Rules. Should you
            be in breach of the Account Rules, we may (at our absolute and sole
            discretion) restrict, prohibit, suspend or terminate your account.
            Should your account be terminated in accordance with this clause, we
            are not liable to you, or any third party, for any loss or damage
            suffered.
          </p>
          <p className="mt-4 font-light text-gray-700">
            You may terminate your account, for any reason, by notifying us. You
            agree, however, that by terminating your account, your experience on
            the Site may be limited. We are not liable to you, or any third
            party, for any loss or damage suffered because of this.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Communications
          </h2>
          <p className="mt-4 font-light text-gray-700">
            By using the Site and providing your e-mail address, you agree to
            subscribe to newsletters, marketing or promotional materials and
            other information we may send. You may unsubscribe from these emails
            at any time.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            User Submitted Content
          </h2>
          <p className="mt-4 font-light text-gray-700">
            The Site may allow you to publish, share, store and otherwise make
            available certain information, text, graphics, videos, or other
            content (“Content”).
          </p>
          <p className="mt-4 font-light text-gray-700">
            We cannot guarantee the accuracy, integrity or quality of Content
            posted by users of the Site.
          </p>
          <p className="mt-4 font-light text-gray-700">
            We are not liable for any statements, representations, or Content
            provided by Site users. Any opinions, advice or recommendations
            expressed therein are those of the users providing such Content and
            not those of TBD
          </p>
          <p className="mt-4 font-light text-gray-700">
            You represent and warrant that you own or otherwise control the
            Content you post on the Site, and that the sharing of your Content
            on or through the Site does not violate the privacy rights,
            publicity rights, copyrights, contract rights or any other rights of
            any person or entity.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            We take no responsibility and assume no liability for Content you or
            any third party posts on or through the Site. However, by posting
            Content you grant us a perpetual, worldwide, irrevocable,
            unrestrictive, non-exclusive royalty-free licence to use any Content
            in any manner whatsoever without compensation or attribution to you.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Prohibited Uses
          </h2>
          <p className="mt-4 font-light text-gray-700">
            Unless explicitly agreed by us, you acknowledge and agree that you
            may not use our Site for the following purposes:
          </p>

          <ul className="pl-10 mt-4 font-light text-gray-600 list-disc">
            <li>resale of data acquired from TBD</li>
            <li>
              use the Site in any way that violates any applicable local,
              national or international law or regulation
            </li>
            <li>impersonate or attempt to impersonate any person or entity</li>
            <li>
              engage in any conduct that restricts or inhibits anyone’s use or
              enjoyment of the Site
            </li>
            <li>
              monitor or copy any of the material on the Site for any
              unauthorized purpose without our prior written consent
            </li>
            <li>
              attempt to gain unauthorized access to, interfere with, damage or
              disrupt any parts of the Site
            </li>
            <li>
              use the Site in any manner that could disable, overburden, damage,
              or impair the Site
            </li>
            <li>
              attempt to interfere with the proper working of the Site in any
              way whatsoever
            </li>
          </ul>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Fees and Payment
          </h2>
          <p className="mt-4 font-light text-gray-700">
            You may be required to purchase or pay a fee to access some features
            of the Site. You agree to pay all fees due and payable to us
            (including all applicable taxes) at the prices then in effect for
            your purchases.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            You represent and warrant that the information you provide to us is
            true, correct and complete.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            Where payments are processed through our Site using third party
            payment processors, you also agree to any terms and conditions set
            by those payment processors.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Communications
          </h2>
          <p className="mt-4 font-light text-gray-700">
            Where we provide you with a free trial to use the Site, for the
            duration of the free trial period, we may at our sole discretion:
            (i) limit your ability to access certain features; (ii) limit any
            technical support to you that may usually be available to paying
            users; (iii) without notice to you, stop your free trial.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Specifications
          </h2>
          <p className="mt-4 font-light text-gray-700">
            We may, from time to time, set certain minimum specifications
            required to access our Site to ensure all users have the best
            possible experience. You are solely responsible to obtain, keep and
            maintain all equipment and other software that meets our minimum
            specifications to enable you to have the best possible experience of
            our Site.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            We may from time to time, at our sole discretion and without notice
            to you, make variations, modifications, alterations or updates to
            our Site (“Enhancements”). These Enhancements may be made to improve
            our Site to you or to comply with relevant legal requirements.
          </p>
          <p className="mt-4 font-light text-gray-700">
            We will use reasonable endeavors to notify you of any scheduled
            disruptions to our Site, including those due to any Enhancements.
            However, regardless of whether a disruption is scheduled or not, we
            are not liable to you or any third party for any loss or damage
            caused by any disruption to our Site.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Copyrights and Trademarks
          </h2>
          <p className="mt-4 font-light text-gray-700">
            Except as expressly stated otherwise, you acknowledge and agree that
            the original content on the Site, and the software, features and
            functionality comprising the Site are the exclusive property of TBD
            (the “Materials”) and its licensors.
          </p>
          <p className="mt-4 font-light text-gray-700">
            You agree you will not copy, reproduce, create derivative works
            from, transmit or distribute the Materials in any way without our
            prior written consent.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Limitation of Liability, Indemnities and Warranties
          </h2>
          <p className="mt-4 font-light text-gray-700">
            Except as expressly provided by law, we shall not be liable to you
            or any third parties for any loss, damage, expenses or any other
            liability arising directly or indirectly from the performance of our
            services to you. To the fullest extent permitted by law, all
            warranties or conditions implied by statute, at law, by trade,
            custom or otherwise are excluded.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            You acknowledge and agree that you assume sole and entire
            responsibility for, and indemnify and hold us harmless from, any and
            all claims, liabilities, losses, expenses, responsibilities and
            damages by reason of any claim, proceedings, action, liability or
            injury arising out of or as a result of (i) your conduct in relation
            to these Terms and Conditions; (ii) your use of any material, advice
            or other results of the services provided to you; (iii) your
            relations with your clients and/or other third parties; or (iv) any
            breach of these Terms and Conditions by you.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Term and Termination
          </h2>
          <p className="mt-4 font-light text-gray-700">
            These Terms and Conditions will remain in full force and effect
            while you use the Site.
          </p>
          <p className="mt-4 font-light text-gray-700">
            We may, without notice to you, immediately stop providing any
            services to you at our sole discretion for any reason whatsoever.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            Where these Terms and Conditions are terminated in accordance with
            these Terms and Conditions, they will terminate without prejudice to
            any rights either party may have had against the other prior to
            termination. Further, all provisions of which by their nature should
            survive termination shall survive termination, including, without
            limitation: (i) all intellectual property you have granted us under
            these Terms and Conditions; and (ii) your obligation to pay any fees
            due to us at the time of termination; and (iii) warranty
            disclaimers, indemnity and limitations of liability.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Assignment{" "}
          </h2>
          <p className="mt-4 font-light text-gray-700">
            These Terms and Conditions will bind and inure for the benefit of
            the parties, including their respective successors, permitted
            assigns and legal representatives.
          </p>
          <p className="mt-4 font-light text-gray-700">
            We may, without notice to you, immediately stop providing any
            services to you at our sole discretion for any reason whatsoever.{" "}
          </p>
          <p className="mt-4 font-light text-gray-700">
            Provided your rights are not affected under these Terms and
            Conditions, we will be permitted to assign our interest in these
            Terms and Conditions without prior notice to you. However, you may
            not assign, transfer, novate or other dispose of your rights and
            obligations under these Terms and Conditions without our express
            written approval (which we may withhold in our sole discretion).
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Privacy{" "}
          </h2>
          <p className="mt-4 font-light text-gray-700">
            You acknowledge that you have read and understood the terms of TBD
            ’s Privacy Policy, which can be found here: www.TBD.co/privacy . You
            agree that we may use your information (including disclosure to
            third parties) in accordance with the terms of our Privacy Policy.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Non-Waiver
          </h2>
          <p className="mt-4 font-light text-gray-700">
            Our failure to exercise, or delay in exercising, our rights under
            these Terms and Conditions does not operate as a waiver of that
            right.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Exclusion of Implied Relationships
          </h2>
          <p className="mt-4 font-light text-gray-700">
            Nothing in these Terms and Conditions shall be deemed or construed
            to constitute any party a partner, agent, representative, employer
            or employee of another party or to create any trust or commercial
            partnership unless specifically otherwise provided. We do not owe
            you any duty of good faith under these Terms and Conditions.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Severability{" "}
          </h2>
          <p className="mt-4 font-light text-gray-700">
            If any part of these Terms and Conditions are held to be illegal,
            invalid, or unenforceable, then that part shall be deemed deleted
            and shall not affect the validity and enforceability of the
            remaining provisions of these Terms and Conditions.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Entire Agreement
          </h2>
          <p className="mt-4 font-light text-gray-700">
            These Terms and Conditions constitute the entire agreement between
            the parties with respect to the Company’s services and supersede all
            previous versions of the Terms and Conditions, understandings,
            arrangements, agreements, and communications, whether verbal or
            written, between the parties.
          </p>
        </div>

        <div className="mx-auto text-lg max-w-prose">
          <h2 className="mt-8 text-lg font-semibold text-indigo-700">
            Applicable Law and Jurisdiction
          </h2>
          <p className="mt-4 font-light text-gray-700">
            These Terms and Conditions shall be governed by and construed in
            accordance with West Virignia law. Both parties agree to submit to
            the jurisdiction of the courts of West Virignia with respect to any
            claim or dispute arising out of these Terms and Conditions.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
