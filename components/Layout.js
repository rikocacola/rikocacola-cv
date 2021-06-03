import Header from './Header/Header'
import Footer from './Footer/Footer'

import Head from 'next/head'

const Layout = ({children}) => {
    const meta_title = 'Riko Chair | Frontend Developer'
    return (
        <>
            <Head>
                <meta name="description" content='Riko Chair Nugroho' />
                <meta name="title" content={meta_title} />
                <title>{meta_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
