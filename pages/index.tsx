import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';
import { useTranslation } from 'react-i18next';
import { getDefaultLang, updateDefaultLang } from '../utils/locales';
import { useContext } from 'react';
import AppContext from '../utils/AppContext';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const { t } = useTranslation();
  const { isDark, toggleDark } = useContext(AppContext);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {t('test')} | {getDefaultLang()}
          <button
            onClick={() => {
              updateDefaultLang('ar');
            }}
          >
            AR
          </button>
          <button
            onClick={() => {
              updateDefaultLang('fr');
            }}
          >
            FR
          </button>
          <button
            onClick={() => {
              updateDefaultLang('en');
            }}
          >
            EN
          </button>
          <button
            className="m-10"
            onClick={() => {
              toggleDark();
            }}
          >
            {isDark ? 'light' : 'dark'}
          </button>
          {/* <Intro /> */}
          {heroPost && <HeroPost title={heroPost.title} coverImage={heroPost.coverImage} date={heroPost.date} author={heroPost.author} slug={heroPost.slug} excerpt={heroPost.excerpt} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
