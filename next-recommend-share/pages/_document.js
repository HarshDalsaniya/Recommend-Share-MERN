import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="zxx">
                <Head>
                <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
                <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
                <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
                <script src="https://kit.fontawesome.com/368022d8f5.js"></script>

                                    
                </Head>
                <body className="page-template page-template-template page-template-messages page-template-templatemessages-php page logged-in">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;