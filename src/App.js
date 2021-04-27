import React from 'react';
import GlobalStyles from './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation } from 'components';
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
        ]} />
        <Switch>
          <Route exact path="/">
            HomePage
        </Route>
          <Route path="/budget">
            Budget page
        </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
