import React from 'react';
import CardFront from './CardFront';

export default {
  component: CardFront,
  title: 'CardFront',
};

const Template = (args) => <CardFront {...args} />;

export const Default = Template.bind({});
Default.args = {
  player: { 
    "이름" : "김민석",
    "영어 이름" : "KIM MIN SEOK",
    "등번호" : 12
  }
}