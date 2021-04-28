import React from 'react';
import GlobalStyles from './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation, Wrapper } from 'components';
import theme from 'utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
