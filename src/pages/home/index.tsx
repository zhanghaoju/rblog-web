import React, { useEffect, useState } from 'react';
import Category from '@/components/sidemenu/Category';
import LastUpdate from '@/components/sidemenu/LastUpdate';
import Social from '@/components/sidemenu/Social';
import User from '@/components/sidemenu/User';
import BackToTop from '@/components/top';
import Content from '@/components/content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import HotArticles from '@/components/sidemenu/HotArticles';
const Home = (props: any) => {
  // 文章列表
  const [list, setList] = useState([]);
  // 获取文章列表数据
  useEffect(() => {
    props.BlogActions.asyncArticleAllListAction(1, 1).then((res: any) => {
      // 获取文章
      let { data } = res.data;
      setList(data);
    });
  }, [props.BlogActions]);
  return (
    <>
      <article className="w-[calc(100%-320px)]">
        <Content />
      </article>
      <aside className="w-260">
        <User />
        <Social />
        <Category data={list} />
        <HotArticles data={list} />
        <BackToTop />
      </aside>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(Home);
