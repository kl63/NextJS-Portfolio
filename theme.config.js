/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'
import { MdOutlinePrivacyTip } from 'react-icons/md';

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: TfiHome,
    //number: 1,
  },
  /*{
   name: 'Home (2)',
    slug: '/index-2',
    Icon: TfiHome,
  number: 2,
  },*/
  /*{
    name: 'Home (3)',
    slug: '/index-3',
    Icon: TfiHome,
    number: 3,
  },*/
  /*{
    name: 'Home (4)',
    slug: '/index-4',
    Icon: TfiHome,
    number: 4,
  },*/
  {
    name: 'About',
    slug: '/about',
    Icon: SlUser,
  },
  /*{
    name: 'Services',
    slug: '/services',
    Icon: SlBriefcase,
  },*/
  {
    name: 'Articles',
    slug: '/blog',
    Icon: TfiPencilAlt,
  },
  {
    name: 'Projects',
    slug: '/projects',
    Icon: SlTrophy,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
  {
    name: 'Privacy Policy',
    slug: '/privacy',
    Icon: MdOutlinePrivacyTip,
  },
  
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/Kevinlin1923',
    Icon: IoLogoTwitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kevin._2423/',
    Icon: IoLogoInstagram,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevin-lin-274049222/',
    Icon: IoLogoLinkedin,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'RECIPIENT@EXAMPLE.com',
    sender: 'SENDER@EXAMPLE.com',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects', ],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: 'Kevin Lin',
  siteName: 'Kevin Lin',
  defaultTitle: 'Kevin Lin Personal Site',
  titleTemplate: 'Kevin Lin | %s',
  description: "Welcome to my portfolio website! I'm Kevin Lin, a Web & Information Systems major at New Jersey Institute of Technology. Explore my creative work and projects as I showcase my skills in web development.",
  email: 'lin.kevin.1923@gmail.com',
  locale: 'en_US',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}