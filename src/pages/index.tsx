import Welcome from '@/components/Home/Welcome';
import { useAppSelector } from '@/store/hooks';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const isFirstLoad = useAppSelector((state) => state.isFirstLoad.value);

  return (
    <>
      <Head>
        <title>FELIX</title>
        <meta
          name="description"
          content="FELIX merupakan situs penyedia layanan streaming film dan serial tv
            gratis. Sama seperti penyedia film dan serial tv lainnya seperti
            Netflix, Disney+, HBO, Apple TV+, Amazon Prime Video, dan lainnya."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Welcome isVisible={isFirstLoad} />
      </main>
    </>
  );
};

export default Home;
