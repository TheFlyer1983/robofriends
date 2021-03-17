import React from 'react';
import Card from './Card';
import { Robots } from '../types/types'

const CardList = ({ robots }: {robots: Robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
      })}
    </div>
  );
};

export default CardList;
