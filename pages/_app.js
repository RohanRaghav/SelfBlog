import { useState, useEffect } from 'react';
import '../styles/global.css';
import Head from 'next/head';
import NavBar from './Components/NavBar';
import '../styles/navBar.css';
import Loading from './Components/Loading';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating a delay for demonstration purposes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Head>
                <title>Rohan_Raghav</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {loading ? (
                <Loading />
            ) : (
                <main>
                    <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                        crossOrigin="anonymous"
                    ></script>
                    <NavBar />
                    <Component {...pageProps} />
                </main>
            )}
        </div>
    );
}

export default MyApp;
