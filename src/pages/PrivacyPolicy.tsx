import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      {
        subtitle: 'Information You Provide',
        text: 'When you create a ForeverFind account and complete your profile, we collect: your name, date of birth, gender, location, occupation, contact number, physical attributes (height, physique, dietary habits), lifestyle details (bio, interests, personality traits), background information (education level, religion, marital status, family plans, genotype), partner preferences, and the photos you upload.',
      },
      {
        subtitle: 'Usage Data',
        text: 'We collect information about how you interact with the app, including profiles you view or swipe on, matches you accept or decline, messages you send and receive, and the timing of those interactions.',
      },
      {
        subtitle: 'Device & Technical Data',
        text: 'We collect your device type, operating system, push notification token (with your permission), and app version to provide our service and send you relevant notifications.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      {
        text: 'We use the information we collect to: operate and improve the ForeverFind platform; curate and present compatible profiles for you; facilitate real-time chat and media sharing between matched users; send push notifications for matches, messages, and updates (with your consent); ensure the safety of our community by detecting and acting on blocked or reported users; and comply with applicable legal obligations.',
      },
      {
        text: 'We do not sell your personal data to third parties. We do not use your information for automated profiling that produces legal or similarly significant effects without human review.',
      },
    ],
  },
  {
    title: '3. Profile Approval & Admin Review',
    body: [
      {
        text: 'ForeverFind uses a human curation model. When you submit your profile, it is reviewed by our team before being made visible to other users. During this review, authorised ForeverFind staff may view your profile information and photos solely for the purpose of approving or declining your membership. Rejected profiles are not shared or retained beyond the review period.',
      },
    ],
  },
  {
    title: '4. Sharing Your Information',
    body: [
      {
        subtitle: 'With Other Users',
        text: 'Your profile — including your name, photos, bio, and selected attributes — is shared with other approved ForeverFind members for the purpose of matchmaking. Your contact number and email address are never surfaced to other users.',
      },
      {
        subtitle: 'Service Providers',
        text: 'We use Supabase (cloud database and authentication), Expo (mobile app infrastructure), and Apple/Google push notification services to operate ForeverFind. These providers process data only as necessary to deliver their services to us and are bound by appropriate data processing agreements.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose your information if required by law, court order, or to protect the rights, property, or safety of ForeverFind, our users, or the public.',
      },
    ],
  },
  {
    title: '5. Data Storage & Security',
    body: [
      {
        text: 'Your data is stored securely on Supabase infrastructure with row-level security (RLS) policies that ensure you can only access your own data and data you are authorised to see. All data is transmitted over encrypted HTTPS connections.',
      },
      {
        text: 'Media files (chat images, voice notes, videos) are stored in a secured Supabase Storage bucket. We retain your data for as long as your account is active or as needed to provide our services.',
      },
    ],
  },
  {
    title: '6. Your Rights',
    body: [
      {
        text: 'Depending on your location, you may have the right to: access a copy of the personal data we hold about you; correct inaccurate information; request deletion of your account and associated data; object to certain processing; and withdraw consent where processing is based on consent.',
      },
      {
        text: 'To exercise any of these rights, contact us at foreverfind@gmail.com. We will respond within 30 days.',
      },
    ],
  },
  {
    title: '7. Push Notifications',
    body: [
      {
        text: 'With your permission, we send push notifications to alert you of new matches, incoming messages, and app updates. You can withdraw this permission at any time through your device settings or within the ForeverFind app under Settings.',
      },
    ],
  },
  {
    title: '8. Location Data',
    body: [
      {
        text: 'We request access to your device location solely to display relevant matches near you. Location data is used in-app and is not stored on our servers beyond what you voluntarily enter as your profile location.',
      },
    ],
  },
  {
    title: '9. Photos & Media',
    body: [
      {
        text: 'Profile photos you upload are stored securely and displayed to other approved users. Photos and media shared in private chats are stored in our secure media bucket and are accessible only to the participants of that conversation. We request camera and photo library access only to enable you to select or capture photos for your profile or chats.',
      },
    ],
  },
  {
    title: '10. Children\'s Privacy',
    body: [
      {
        text: 'ForeverFind is intended for adults aged 18 and over. We do not knowingly collect data from anyone under the age of 18. If you believe a minor has registered, please contact us immediately at foreverfind@gmail.com.',
      },
    ],
  },
  {
    title: '11. Changes to This Policy',
    body: [
      {
        text: 'We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page and, where appropriate, notify you through the app. Continued use of ForeverFind after changes are posted constitutes your acceptance of the updated policy.',
      },
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      {
        text: 'If you have any questions about this Privacy Policy or how we handle your data, please reach out to us:',
      },
      {
        text: 'Email: foreverfind@gmail.com\nPhone: +44 7423 243282\nForeverFind — Nigeria & United Kingdom',
      },
    ],
  },
]

export default function PrivacyPolicy() {
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
            Privacy Policy
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
          ForeverFind ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains what personal information we collect when you use the ForeverFind mobile application and website, how we use it, and the rights you have over it. By creating an account or using our services, you agree to the terms described here.
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
                  {block.subtitle && (
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

        {/* Bottom CTA */}
        <div className="mt-16 pt-10 border-t border-[#C9A84C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#1C1410]/40 text-[11px] tracking-wide font-light">
            &copy; {new Date().getFullYear()} ForeverFind. All rights reserved.
          </p>
          <Link
            to="/"
            className="text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] hover:text-[#1C1410] transition-colors font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>

    </div>
  )
}
