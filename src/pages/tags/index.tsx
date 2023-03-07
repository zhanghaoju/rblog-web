import React from 'react';
import LastUpdate from '@/components/sidemenu/LastUpdate';
import Social from '@/components/sidemenu/Social';
import User from '@/components/sidemenu/User';
import BackToTop from '@/components/top';
import Content from '@/components/content';
import TagsDetail from '@/components/sidemenu/Tags';
import HotArticles from '@/components/sidemenu/HotArticles';
const Tags = () => {
  return (
    <>
      <article className="w-[calc(100%-320px)]">
        <Content />
      </article>
      <aside className="w-260">
        <TagsDetail />

        <BackToTop />
      </aside>
    </>
  );
};

export default Tags;
