import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Blog Name";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <header className={styles.header}>
                {/* {
                    home ? (
                        <>
                            <img src="/images/profile.png" alt="" className={`${utilsStyles.borderCircle} ${styles.headerImage}`} />
                            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <img src="/images/profile.png" alt="" className={`${utilsStyles.borderCircle}`} />
                            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                        </>
                    )
                } */}
                {/* コードが短くできるのでこちらに変更 */}
                <img src="/images/profile.png" alt="" className={`${utilsStyles.borderCircle} ${home && styles.headerImage}`} />
                <h1 className={utilsStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
            {
                !home && (
                    <div>
                        <Link legacyBehavior href="/">← ホームへ戻る</Link>
                    </div>
                )
            }
        </div>
    );
}

export default Layout;
