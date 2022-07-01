import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StarsArea, Star } from './styled';

function Stars({ rate }) {
  return (
    <StarsArea>
      {rate > 0
        ? (
          <>
            <Star
              fill={(Math.round(rate) >= 2) ? true : undefined}
            >
              <FontAwesomeIcon icon={faStar} />
            </Star>
            <Star
              fill={(Math.round(rate) >= 4) ? true : undefined}
            >
              <FontAwesomeIcon icon={faStar} />
            </Star>
            <Star
              fill={(Math.round(rate) >= 6) ? true : undefined}
            >
              <FontAwesomeIcon icon={faStar} />
            </Star>
            <Star
              fill={(Math.round(rate) >= 8) ? true : undefined}
            >
              <FontAwesomeIcon icon={faStar} />
            </Star>
            <Star
              fill={(Math.round(rate) >= 10) ? true : undefined}
            >
              <FontAwesomeIcon icon={faStar} />
            </Star>
          </>
        )
        : <p>Não disponível</p>}

    </StarsArea>
  );
}
Stars.propTypes = {
  rate: propTypes.number.isRequired,
};
export default Stars;
