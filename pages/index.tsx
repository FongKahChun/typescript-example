import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import { useState } from 'react';

import Pinkbutton from "../components/pinkbuttoncomponent";
import ReactPlayer from 'react-player';

const inter = Inter({ subsets: ['latin'] })

let name:string

const MyPage: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {    
    setValue(newValue);
    name=newValue
  };

  const handleClick = () => {
    alert('Hi '+name+'!');
  };

  return (
    <><div>
      <h1>记事本</h1>
      
      <p>事情：</p>
      <Textbox label="事情:" value={value} onChange={handleChange} />
      
      <Button onClick={handleClick} text="Submit" />

      <div className='player-wrapper'>
      <video controls>
        <source src="C:\danielchan\typescript-example\pages\kahpuipui.mp4" type="video/mp4" />
      </video>
    </div>

      <Pinkbutton 
        border="none"
        color="red"
        height = "200px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius = "50%"
        width = "200px"
        // eslint-disable-next-line react/no-children-prop
        children = "I'm a pink circle!"
      />
    </div>
    <Head>
        <title>Chan Zhi Yu App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head><main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/1.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={200}
                height={200}
                priority />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/1.png"
            alt="Next.js Logo"
            width={300}
            height={300}
            priority />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main></>
  );
}
export default MyPage;