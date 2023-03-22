import InfoContent from '@/components/SingleContent/InfoContent';
import SinopsisContent from '@/components/SingleContent/SinopsisContent';
import { SingleContent } from '@/types';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

interface Props {
  singleContentData: SingleContent;
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

// function server side Render
export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<Props> | any> => {
  const { id } = context.params as IParams;
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=1'
  );

  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}&plot=full`
    );
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();

    return {
      props: {
        singleContentData: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

const SingleContent: NextPage<Props> = ({ singleContentData }) => {
  return (
    <>
      <Head>
        <title>
          {singleContentData
            ? `FELIX | ${singleContentData.Title}`
            : 'Loading ...'}
        </title>
        <meta
          name="description"
          content={
            singleContentData
              ? singleContentData.Plot.slice(0, 100)
              : `FELIX merupakan situs penyedia layanan streaming film dan serial tv
            gratis. Sama seperti penyedia film dan serial tv lainnya seperti
            Netflix, Disney+, HBO, Apple TV+, Amazon Prime Video, dan lainnya.`
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <InfoContent singleContentData={singleContentData} />
        <SinopsisContent singleContentData={singleContentData} />
      </main>
    </>
  );
};

export default SingleContent;
