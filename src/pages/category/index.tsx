import React from 'react';
import LastUpdate from '@/components/sidemenu/LastUpdate';
import Social from '@/components/sidemenu/Social';
import User from '@/components/sidemenu/User';
import BackToTop from '@/components/top';
import Content from '@/components/content';
import CategoryDetail from '@/components/sidemenu/Category';
import HotArticles from '@/components/sidemenu/HotArticles';
const Category = () => {
  return (
    <>
      <article className="w-[calc(100%-320px)]">
        <Content />
      </article>
      <aside className="w-260">
        <CategoryDetail />
        <HotArticles />
        <LastUpdate />
        <BackToTop />
      </aside>
    </>
  );
};

export default Category;
