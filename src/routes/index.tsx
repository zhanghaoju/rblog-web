import { lazy, Suspense } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import LayoutIndex from '@/pages/layout';
const NotFound = lazy(() => import('@/pages/404'));
const Routes = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <HashRouter>
          <Switch>
            <Route path="/" render={() => <LayoutIndex />}></Route>
            <Redirect to="/rblog/home" from="/" exact />
          </Switch>
        </HashRouter>
      </Suspense>
    </div>
  );
};

export default Routes;
