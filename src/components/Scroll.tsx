import React from 'react';
import { Props } from '../types/types'

const Scroll = (props: Props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '700px'}}>
      {props.children}
    </div>
  )
};

export default Scroll;
