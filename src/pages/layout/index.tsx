import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('@/pages/home'));
const Category = lazy(() => import('@/pages/category'));
const Tags = lazy(() => import('@/pages/tags'));
const TimeLine = lazy(() => import('@/pages/timeline'));
const About = lazy(() => import('@/pages/about'));
const Message = lazy(() => import('@/pages/message'));
const Friendly = lazy(() => import('@/pages/friendly'));
const Essay = lazy(() => import('@/pages/essay'));
const ArticleDetail = lazy(() => import('@/components/content/ArticleDetail'));
import NavBar from '@/components/header';
import NotFound from '../404';
import Footer from '@/components/footer';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const LayoutIndex = (props: any) => {
  NProgress.start();
  NProgress.done();
  return (
    <div style={{ backgroundColor: '#ecedef' }}>
      <NavBar></NavBar>
      <main
        className="flex justify-between w-1200 pt-20 mx-auto bg-indigo-400 change-color"
        style={{ backgroundColor: '#ecedef' }}
      >
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/rblog/home" component={Home}></Route>
            <Route path="/rblog/article/detail/:id" component={ArticleDetail}></Route>
            <Route path="/rblog/category" component={Category}></Route>
            <Route path="/rblog/tags" component={Tags}></Route>
            <Route path="/rblog/timeline" component={TimeLine}></Route>
            <Route path="/rblog/essay" component={Essay}></Route>
            <Route path="/rblog/message" component={Message}></Route>
            <Route path="/rblog/friendly" component={Friendly}></Route>
            <Route path="/rblog/about" component={About}></Route>
            <Route path="*" component={Home}></Route>
          </Switch>
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default LayoutIndex;
