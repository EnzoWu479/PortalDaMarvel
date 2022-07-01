import React from 'react';
import { Load, Blink } from './styled';
import Logo from '../Logo';

function Loading() {
  return (
    <Load>
      <Blink>
        <Logo Size={70} />
      </Blink>
    </Load>
  );
}
export default Loading;
