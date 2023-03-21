import ContentList from '@/components/Home/ContentList';
import Welcome from '@/components/Home/Welcome';
import { useLazyGetContentsQuery } from '@/store/apiCalls';
import { useAppSelector } from '@/store/hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const Home: NextPage = () => {
  // global state
  const searchInput = useAppSelector((state) => state.searchInput.value);
  const isFirstLoad = useAppSelector((state) => state.isFirstLoad.value);

  // fetching content data
  const [getContentData, { data, isLoading }] = useLazyGetContentsQuery();

  // call content data when search input not equal to empty string
  useEffect(() => {
    if (searchInput !== '') {
      getContentData({ value: searchInput, page: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

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
        <ContentList contentData={data} isLoading={isLoading} />
      </main>
    </>
  );
};

export default Home;
