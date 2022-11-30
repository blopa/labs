import { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Typography, Button } from '@mui/material';

// Styles
import styles from '../styles/Home.module.css';

// Utils
import { getClients, getClientsTotal } from '../utility/api';

// Components
import ClientsList from '../components/ClientsList';
import DebounceInput from '../components/DebounceInput';

const getInitialProps = async () => {
    const clients = await getClients(2);
    const clientsTotal = await getClientsTotal();

    return { clients, clientsTotal };
};

function Home({ clients: ssrClients, clientsTotal }) {
    const [clients, setClients] = useState(ssrClients);
    const [filteredClients, setFilteredClients] = useState(ssrClients);

    const loadMoreClients = useCallback(() => {
        getClients()
            .then((clients) => setClients(clients))
            .catch(console.error);
    }, []);

    useEffect(() => {
        setFilteredClients(clients);
    }, [clients]);

    const handleOnSearch = useCallback(
        (event) => {
            const filteredClients = clients.filter((client) => {
                return Object.values(client).some((value) => {
                    return value
                        ?.toLowerCase()
                        .includes(event.target.value.toLowerCase());
                });
            });

            setFilteredClients(filteredClients);
        },
        [clients]
    );

    return (
        <div className={styles.container}>
            <Head>
                <title>My Simple App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Typography variant="h1" className={styles.title}>
                    My Clients
                </Typography>
                <DebounceInput onSearch={handleOnSearch} />
                <ClientsList clients={filteredClients} />
                {clients.length < clientsTotal && (
                    <Button variant="outlined" onClick={loadMoreClients}>
                        Load More
                    </Button>
                )}
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}

Home.getInitialProps = getInitialProps;

export default Home;
