import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import {
  Container, SelectBox, Icon, OptionBox, Choosen,
} from './styled';

function Select({ selected, setSelected }) {
  const [opened, setOpened] = useState(false);

  return (
    <Container onClick={() => setOpened(!opened)} onMouseLeave={() => setOpened(false)}>
      <SelectBox opened={opened}>
        <Choosen>
          {selected && !opened ? selected : 'Filtrar por'}
        </Choosen>

        <OptionBox active={opened} onClick={() => (setSelected('Lançamento'))}>
          Lançamento
        </OptionBox>
        <OptionBox active={opened} onClick={() => (setSelected('A-Z'))}>
          A-Z
        </OptionBox>
      </SelectBox>

      <Icon opened={opened}>
        <FontAwesomeIcon icon={faChevronDown} />
      </Icon>
    </Container>
  );
}
Select.propTypes = {
  selected: propTypes.string,
  setSelected: propTypes.func.isRequired,
};
Select.defaultProps = {
  selected: null,
};
export default Select;
