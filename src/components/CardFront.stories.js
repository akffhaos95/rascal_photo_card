import React from 'react';
import CardFront from './CardFront';

export default {
  component: CardFront,
  title: 'CardFront',
//   argTypes: {
//     number: { control: 'number' },
//     name: { control: 'name' } 
//   }
};

const Template = (args) => <CardFront {...args} />;

export const Default = Template.bind({});
Default.args = {
    number: 5,
    name: "김민석"   
}