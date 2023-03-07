import Category from '@/components/sidemenu/Category';
import LastUpdate from '@/components/sidemenu/LastUpdate';
import Social from '@/components/sidemenu/Social';
import User from '@/components/sidemenu/User';
import BackToTop from '@/components/top';
import Content from '@/components/content';
import React from 'react';
const Home = () => {
  return (
    <>
      <article className="w-[calc(100%-320px)]">
        <Content />
      </article>
      <aside className="w-260">
        <User />
        <Social />
        <Category />
        <LastUpdate />
        <BackToTop />
      </aside>
    </>
  );
};

export default Home;
