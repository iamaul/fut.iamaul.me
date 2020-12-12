import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                <meta name="application-name" content={'fut.iamaul.me'} />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta name="apple-mobile-web-app-title" content={'fut.iamaul.me'} />
                <meta name="description" content={'Find any players on FIFA Ultimate Team'} />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;