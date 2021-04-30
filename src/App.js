import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GlobalStyles from './index.css';
import { ThemeProvider } from 'styled-components';

import { Navigation, Wrapper, Button } from 'components';
import theme from 'utils/theme';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicatior.css';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Navigation items={[
          {
            content: 'HomePage',
            to: '/',
          },
          {
            content: 'Budget',
            to: '/budget',
          }
        ]}
          RightElement={(
            <div>
              <Button variant="regular" onClick={() => { }}>PL</Button>
              <Button variant="regular" onClick={() => { }}>EN</Button>
            </div>
          )}

        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              HomePage
            </Route>
            <Route path="/budget">
              Budget page
        </Route>
          </Switch>
        </Wrapper>
      </Router>
    </Fragment>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
