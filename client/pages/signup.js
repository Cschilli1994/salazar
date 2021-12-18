import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import SignUpForm from '../components/homepage/SignUpForm'

import { useApp } from '../components/context/AppProvider.js';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, initReactI18next } from "react-i18next";
import Router from 'next/router';
import axios from 'axios';
import port from '../../back/port';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    }
  }
}

export default function Home() {
  const { t } = useTranslation();
  const { user } = useApp();

  axios.get(`https://35.84.224.138:${port}/auth`, { params: { uid: user.uid } }).then((response) => {
    if (!response.data) {
      return Router.push('/user');
    }
  });
  return (
    <div className="sign-up">
      <Head>
        <title>{t('home:Sign_Up')}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <SignUpForm value={user} />
        <Link href='/'>

          <a>
            {t('home:go_landing')}
          </a>

        </Link>

      </main>
    </div>
  )
}