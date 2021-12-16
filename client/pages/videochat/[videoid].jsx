import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout, Menu, Breadcrumb } from 'antd';
import Transcribe from '../../components/videochat/transcribe';
import VideoMeet from '../../components/videochat/videomeet';
import styles from '../../styles/Home.module.css'
import {AppContext } from '../../components/context/AppProvider.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router'

const { Header, Content, Footer } = Layout;

export default function VideoChat() {
   
  return (
    <div>
      <Head>
        <title>Salazar Video Chat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main role="main" className='main'>
        <VideoMeet meetString={useRouter().query.videoid}/>
        <Transcribe/>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
