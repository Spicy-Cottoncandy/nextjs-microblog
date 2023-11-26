import Head from 'next/head'
import Link from "next/link";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '@/components/Layout';
import utilsStyles from "../styles/utils.module.css";
import { getPostsData } from '@/lib/post';

const inter = Inter({ subsets: ['latin'] })

//SSG
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

//SSR
//今回は使用しない。動的に変化するものをレンダリングしたい場合は、この関数でデータ取得してpropsに設定する。
// export async function getServerSideProps(context){
//   return {
//     props: {
//       //ここに取得したデータを設定
//     }
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
          <p>私はNext.jsエンジニアです。好きなフレームワークはNext.jsです。</p>
        </section>

        <section className={utilsStyles.headingMd}>
          <h2>📝エンジニアのBlog</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`posts/${id}`}>
                  <img src={`${thumbnail}`} alt="" className={styles.thumbnailImage} />
                </Link>
                <Link legacyBehavior href={`posts/${id}`}>
                  <a className={utilsStyles.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilsStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>


      </Layout>
    </div>
  )
}
