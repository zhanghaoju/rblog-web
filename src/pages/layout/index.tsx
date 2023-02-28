import { lazy, Suspense } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('@/pages/home'));
const Category = lazy(() => import('@/pages/category'));
const Tags = lazy(() => import('@/pages/tags'));
const TimeLine = lazy(() => import('@/pages/timeline'));
const About = lazy(() => import('@/pages/about'));
const Message = lazy(() => import('@/pages/message'));
import NavBar from '@/components/header';
import NotFound from '../404';
import Footer from '@/components/footer';
const LayoutIndex = (props: any) => {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Suspense fallback={<></>}>
            <Switch>
              <Route path="/rblog/home" component={Home}></Route>
              <Route path="/rblog/category" component={Category}></Route>
              <Route path="/rblog/tags" component={Tags}></Route>
              <Route path="/rblog/timeline" component={TimeLine}></Route>
              <Route path="/rblog/message" component={Message}></Route>
              <Route path="/rblog/about" component={About}></Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default LayoutIndex;
