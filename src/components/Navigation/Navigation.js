import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import { Container, List, NavigationWrapper } from './Navigation.css';


const Navigation = ({ items = [], RightElement }) => {
  return (
    <Container>
      <NavigationWrapper>
        <List>
          {
            items.map(item => (
              <li key={item.to}>
                <Button to={item.to}>{item.content}</Button>
              </li>
            ))
          }
        </List>
        {RightElement}
      </NavigationWrapper>
    </Container>
  );
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Navigation;
