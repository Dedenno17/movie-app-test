import ContentList from '@/components/Home/ContentList';
import Pagination from '@/components/Home/Pagination';
import PaginationMobile from '@/components/Home/PaginationMobile';
import Welcome from '@/components/Home/Welcome';
import { useLazyGetContentsQuery } from '@/store/apiCalls';
import { useAppSelector } from '@/store/hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const amountOfPage = 10;

const Home: NextPage = () => {
  // global state
  const searchInput = useAppSelector((state) => state.searchInput.value);
  const isFirstLoad = useAppSelector((state) => state.isFirstLoad.value);

  // state that check if page was clicked
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // state of current page
  const [curPage, setCurPage] = useState<number>(1);

  // state of range page
  const [rangePage, setRangePage] = useState<number[]>([]);

  // state to save search value
  const [savedSearchInput, setSavedSearchInput] = useState<string>('');

  // fetch content data function
  const [getContentData, { data, isLoading }] = useLazyGetContentsQuery();

  // fetch content data when search input changing & not equal to empty string
  useEffect(() => {
    if (searchInput !== '') {
      setSavedSearchInput(searchInput);
      setCurPage(1);
      setIsClicked(false);
      getContentData({ value: searchInput, page: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  // it'll fetch the same content with different page when page changing
  useEffect(() => {
    if (isClicked) {
      getContentData({ value: savedSearchInput, page: curPage });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curPage]);

  // set Range page
  useEffect(() => {
    // set Range page with results from totalresults divided by 10 & set it to rangePage
    if (searchInput !== '' && data && !isClicked) {
      const rangePageArray = [];
      const range = Math.floor(data.totalResults / amountOfPage);
      for (let i = 1; i <= range; i++) {
        rangePageArray.push(i);
      }

      setRangePage(rangePageArray.slice(0, amountOfPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, data]);

  //  move to the next page function
  const nextPage = () => {
    // if curPage is equal to last index of range page then attache it by 10 and set it
    if (curPage === rangePage[rangePage.length - 1] && data) {
      // calculate range page from total results and amountOfPage
      const range = Math.floor(data.totalResults / amountOfPage);
      const newRange = range - rangePage[rangePage.length - 1];
      const newRangePage: number[] = [];

      // check if newRange gt amountOfPage
      if (newRange > amountOfPage) {
        for (let i = 1; i <= newRange; i++) {
          newRangePage.push(rangePage[rangePage.length - 1] + i);
        }
        setRangePage(newRangePage.slice(0, amountOfPage));
        setCurPage(newRangePage[0]);
        return;
      } else if (newRange < amountOfPage) {
        for (let i = 1; i <= newRange; i++) {
          newRangePage.push(rangePage[rangePage.length - 1] + i);
        }
        setRangePage(newRangePage);
        setCurPage(newRangePage[0]);
        return;
      }
    }

    setCurPage(curPage + 1);
    setIsClicked(true);
  };

  //  move to the prev page function
  const prevPage = () => {
    // if currPage is equal to the first index of range page but not equal to 1
    if (curPage === rangePage[0] && curPage !== 1) {
      const newRangePage: number[] = [];
      for (let i = 0; i < amountOfPage; i++) {
        newRangePage.push(rangePage[0] + i - amountOfPage);
      }

      setRangePage(newRangePage);
      setCurPage(newRangePage[newRangePage.length - 1]);
      return;
    }

    setCurPage(curPage - 1);
    setIsClicked(true);
  };

  // move to a specific page function
  const moveTo = (arg: number) => {
    setCurPage(arg);
    setIsClicked(true);
  };

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

        {/* Pagination when screen large */}
        {data && data.Response === 'True' && (
          <Pagination
            curPage={curPage}
            rangePage={rangePage}
            prevPage={prevPage}
            nextPage={nextPage}
            moveTo={moveTo}
            contentData={data}
          />
        )}

        {/* Pagination when screen small & mid */}
        {data && data.Response === 'True' && (
          <PaginationMobile
            curPage={curPage}
            prevPage={prevPage}
            nextPage={nextPage}
            contentData={data}
          />
        )}
      </main>
    </>
  );
};

export default Home;
