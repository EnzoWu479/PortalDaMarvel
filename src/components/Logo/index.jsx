import React from 'react';
import propTypes from 'prop-types';
import Text from './styled';

function Logo({ Size }) {
  return (
    <Text
      href="/"
      style={{
        fontSize: `${Size}px`,
      }}
    >
      MARVEL
    </Text>
  );
}
Logo.propTypes = {
  Size: propTypes.number.isRequired,
};
export default Logo;
