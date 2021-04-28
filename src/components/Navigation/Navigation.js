import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper } from 'components';
import { Container, List } from './Navigation.css';


const Navigation = ({ items = [], RightElement }) => {
  return (
    <Container>
      <Wrapper>
        <List>
          {
            items.map(item => (
              <li key={item.to}>
                <Link to={item.to}>{item.content}</Link>
              </li>
            ))
          }
        </List>
        {RightElement}
      </Wrapper>
    </Container>
  );
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Navigation;
