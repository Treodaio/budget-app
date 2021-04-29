import React, { Fragment } from 'react';
import GlobalStyles from './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation, Wrapper } from 'components';
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
              <button>PL</button>
              <button>EN</button>
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
