import Header from '@components/header/Header';
import Footer from '@components/footer/footer';
import { ReactNode } from 'react';
import Styles from '@components/layout/Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode
    pageTitle: string
}
export default function index(props: LayoutProps) {
    const { children, pageTitle } = props
    return (
        <>
            <Head>
                <title>Belajar Nextjs | {pageTitle}</title>
                <meta name="description" content="Website NextJS Basic" />
            </Head>
            <div className={Styles.container}>
                <Header />
                <div className={Styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}
