import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Navbar } from 'app/components/nav'
import { SectionText } from 'app/components/typeanimation'
import styles from './contact.module.css'
import { ForwardLink } from 'app/components/forward-link'

export const metadata: Metadata = {
  title: { absolute: 'contact' },
  description: 'Get in touch with George Howard, a software developer based in Nashville, Tennessee.',
}

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:georgelthoward@gmail.com',
    icon: '',
    label: 'Straight to my inbox',
    description: 'georgelthoward@gmail.com',
    action: 'Send an email',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/georgelth',
    icon: '/icons/linkedin-app-white-icon.svg',
    label: 'Start a conversation',
    description: 'For opportunities, collaborations, and introductions.',
    action: 'Connect with me',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/georgelth',
    icon: '/icons/GitHub_Invertocat_White.svg',
    label: 'Explore the code',
    description: 'A closer look at what I build and how I build it.',
    action: 'View my GitHub',
  },
]

export default function Contact() {
  return (
    <div className={styles.page}>
      <Navbar />

      <header className={styles.header}>
        <h1 className="font-sans text-5xl font-bold tracking-tighter">
          <SectionText title="contact" />
        </h1>
        <div className={styles.intro}>
          <h2 className={`font-sans text-4xl font-bold tracking-tighter`}>
            have something<br />in mind?
          </h2>
          <p className={`font-mono tracking-tight dark:text-neutral-400`}>
            A project, an opportunity, or just a hello. I&apos;d love to hear
            what you&apos;re thinking about.
          </p>
        </div>
      </header>

      <section aria-label="Ways to connect" className={styles.links}>
        {contactLinks.map((link, index) => {
          const isEmail = link.href.startsWith('mailto:')
          return (
            <a key={link.name} href={link.href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              className={styles.link}
              aria-label={`${link.action}${isEmail ? '' : ' (opens in a new tab)'}`}>
              <span className={`font-mono ${styles.number}`} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.linkContent}>
                <span className={`font-mono ${styles.label}`}>{link.label}</span>
                <div className={styles.linkTitle}>
                  {link.icon
                    ? <Image src={link.icon} alt="" width={28} height={28} className={styles.icon} />
                    : <EnvelopeIcon className={styles.emailIcon} aria-hidden="true" />}
                  <h3 className="font-sans">{link.name}</h3>
                </div>
                <p className={`font-mono ${styles.linkDescription}`}>{link.description}</p>
              </div>
              <span className={`font-mono ${styles.action}`} aria-hidden="true">
                <span className={styles.actionText}>{link.action}</span>
                <span className={styles.arrow}><ArrowUpRightIcon /></span>
              </span>
            </a>
          )
        })}
      </section>

      <footer className={`font-mono ${styles.footer}`}>
        <p className={styles.location}><MapPinIcon aria-hidden="true" />Nashville, Tennessee</p>
        <ForwardLink href='/projects'>see what I'm building</ForwardLink>
      </footer>
    </div>
  )
}
