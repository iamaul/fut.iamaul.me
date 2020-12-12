import Head from 'next/head';
import { NextSeo } from 'next-seo';

const Header = () => {
    return (
        <>
            <Head>
                <title>fut.iamaul.me</title>
            </Head>
            <NextSeo
                title="fut.iamaul.me"
                canonical="https://fut.iamaul.me"
                description="Find players for your FIFA Ultimate Team!"
            />
        </>
    )
}

export default Header;
