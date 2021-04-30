import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { InlineButton, RegularButton } from './Button.css';


function Button({ variant, children, ...props }) {
  const { to } = props;

  const ButtonType = useMemo(() => {
    switch (variant) {
      case 'inline':
        return InlineButton;
      case 'regular':
        return RegularButton;
      default:
        return RegularButton;
    }
  }, [variant]);

  const buttonType = useMemo(() => (
    <Fragment>
      <ButtonType {...props}>
        {children}
      </ButtonType>
    </Fragment>
  ), [props, children]);

  return to ? (
    <Link to={to}>
      {buttonType}
    </Link>
  ) : (
    <>
      { buttonType}
    </>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'inline',
    'regular'
  ]),

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.elementType,
  ]),
  to: PropTypes.string,
}
export default Button;