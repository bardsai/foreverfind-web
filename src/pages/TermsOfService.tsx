import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      {
        text: 'By downloading, installing, or using the ForeverFind mobile application or visiting the Sophisticated Alaga website (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms constitute a legally binding agreement between you and ForeverFind ("we", "our", or "us").',
      },
    ],
  },
  {
    title: '2. Eligibility',
    body: [
      {
        text: 'You must be at least 18 years of age to use ForeverFind. By using the Service, you represent and warrant that you are 18 or older, that you are legally capable of entering into a binding agreement, and that all information you provide is accurate, truthful, and complete.',
      },
      {
        text: 'We reserve the right to suspend or terminate your account at any time if we discover or reasonably believe that you do not meet these eligibility requirements.',
      },
    ],
  },
  {
    title: '3. Account Registration & Profile Approval',
    body: [
      {
        subtitle: 'Registration',
        text: 'To access ForeverFind, you must create an account using a valid email address and password. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.',
      },
      {
        subtitle: 'Profile Approval',
        text: 'ForeverFind operates a curated membership model. After completing your profile, it is submitted for review by our team. We reserve the right to approve or reject any profile at our sole discretion, without obligation to provide a reason. Approved profiles are visible to other members; rejected profiles are not.',
      },
      {
        subtitle: 'Accurate Information',
        text: 'You agree to provide accurate, current, and complete information during registration and to keep your profile up to date. Providing false information — including misrepresenting your identity, age, or relationship status — is grounds for immediate account termination.',
      },
    ],
  },
  {
    title: '4. Acceptable Use',
    body: [
      {
        text: 'You agree not to use ForeverFind to:',
      },
      {
        text: '• Harass, abuse, threaten, stalk, or intimidate any other user\n• Post or transmit content that is obscene, defamatory, fraudulent, or illegal\n• Impersonate any person or entity\n• Solicit money, financial information, or other valuables from other users\n• Advertise products or services without our written consent\n• Collect or harvest personal data from other users\n• Use automated bots, scrapers, or scripts to access the Service\n• Attempt to gain unauthorised access to any part of the Service or its infrastructure\n• Upload or transmit viruses, malware, or any other harmful code',
      },
      {
        text: 'We reserve the right to investigate and take appropriate action against anyone who violates these restrictions, including removing content, suspending accounts, and reporting to law enforcement where applicable.',
      },
    ],
  },
  {
    title: '5. Matching & Communication',
    body: [
      {
        text: 'ForeverFind facilitates introductions between approved members based on compatibility criteria. We do not guarantee that any match will lead to a romantic relationship, friendship, or any other outcome. We are not responsible for the conduct of users on or off the platform.',
      },
      {
        text: 'All communications between matched users take place within the app. You agree not to share personal contact information (phone numbers, social media profiles, addresses) until you feel comfortable and have verified the identity of the other person.',
      },
    ],
  },
  {
    title: '6. User Content',
    body: [
      {
        subtitle: 'Your Content',
        text: 'You retain ownership of any photos, text, or other content you submit to ForeverFind ("User Content"). By submitting User Content, you grant us a non-exclusive, royalty-free, worldwide licence to use, display, and reproduce your content solely for the purpose of operating and improving the Service.',
      },
      {
        subtitle: 'Content Standards',
        text: 'Profile photos must show your face clearly and represent you accurately. You may not upload images of other people without their consent, explicit or sexual content, images depicting minors, or content that violates any applicable law.',
      },
      {
        subtitle: 'Content Removal',
        text: 'We reserve the right to remove any User Content that we determine, at our sole discretion, violates these Terms or is otherwise harmful or inappropriate.',
      },
    ],
  },
  {
    title: '7. Safety & Reporting',
    body: [
      {
        text: 'Your safety is our priority. If you encounter behaviour that makes you feel unsafe — including harassment, threats, or suspicious activity — please use the in-app Report feature or contact us at foreverfind@gmail.com. We review all reports and take appropriate action, which may include account suspension or removal.',
      },
      {
        text: 'ForeverFind provides block and report functionality within the app. We encourage you to use these tools whenever you feel uncomfortable. We do not conduct background checks on users and cannot guarantee the conduct of any member.',
      },
    ],
  },
  {
    title: '8. Privacy',
    body: [
      {
        text: 'Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at sophisticatedandco.com/privacy to understand our data practices.',
      },
    ],
  },
  {
    title: '9. Termination',
    body: [
      {
        subtitle: 'By You',
        text: 'You may delete your account at any time through the Settings screen in the ForeverFind app. Upon deletion, your profile, matches, and messages will be permanently removed from our systems.',
      },
      {
        subtitle: 'By Us',
        text: 'We may suspend or terminate your account at any time, with or without notice, for violation of these Terms, conduct that we deem harmful to other users or to the Service, or for any other reason at our sole discretion.',
      },
    ],
  },
  {
    title: '10. Disclaimers',
    body: [
      {
        text: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.',
      },
      {
        text: 'WE ARE NOT RESPONSIBLE FOR ANY INTERACTIONS BETWEEN USERS, INCLUDING MEETINGS ARRANGED THROUGH THE SERVICE. ALWAYS EXERCISE CAUTION WHEN MEETING SOMEONE NEW AND MEET IN PUBLIC PLACES UNTIL YOU ARE COMFORTABLE.',
      },
    ],
  },
  {
    title: '11. Limitation of Liability',
    body: [
      {
        text: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, FOREVERFIND AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, REVENUE, OR GOODWILL.',
      },
    ],
  },
  {
    title: '12. Governing Law',
    body: [
      {
        text: 'These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
      },
    ],
  },
  {
    title: '13. Changes to These Terms',
    body: [
      {
        text: 'We reserve the right to modify these Terms at any time. When we do, we will update the "Last updated" date at the top of this page and notify you through the app where appropriate. Your continued use of the Service after changes are posted constitutes your acceptance of the updated Terms.',
      },
    ],
  },
  {
    title: '14. Contact',
    body: [
      {
        text: 'If you have questions about these Terms, please contact us:',
      },
      {
        text: 'Email: foreverfind@gmail.com\nPhone: +44 7423 243282\nForeverFind — Nigeria & United Kingdom',
      },
    ],
  },
]

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFAF6] font-['Jost',sans-serif]">

      {/* Header */}
      <div className="bg-[#100B07] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-[5%] pt-20 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors text-[11px] tracking-[0.2em] uppercase mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-4"
          >
            Legal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#F0DEBB] leading-tight mb-6"
          >
            Terms of Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#F0DEBB]/40 text-sm font-light"
          >
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </motion.p>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-[5%] pt-14 pb-4">
        <p className="text-[#1C1410]/70 text-[15px] leading-relaxed font-light">
          Please read these Terms of Service carefully before using ForeverFind. By creating an account or using our services, you agree to be bound by these Terms. These Terms apply to all users of the ForeverFind mobile application and website.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-[5%] pt-6 pb-24">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
            className="mb-10 pb-10 border-b border-[#1C1410]/8 last:border-0 last:mb-0 last:pb-0"
          >
            <h2 className="font-['Cormorant_Garamond',serif] text-xl font-semibold text-[#1C1410] mb-5 tracking-wide">
              {section.title}
            </h2>
            <div className="flex flex-col gap-4">
              {section.body.map((block, j) => (
                <div key={j}>
                  {'subtitle' in block && block.subtitle && (
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-2">{block.subtitle}</p>
                  )}
                  {block.text.split('\n').map((line, k) => (
                    <p key={k} className="text-[#1C1410]/65 text-[14px] leading-relaxed font-light mb-1 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Bottom */}
        <div className="mt-16 pt-10 border-t border-[#C9A84C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#1C1410]/40 text-[11px] tracking-wide font-light">
            &copy; {new Date().getFullYear()} ForeverFind. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[11px] tracking-[0.2em] uppercase text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] hover:text-[#1C1410] transition-colors font-medium">
              Return to Home
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
