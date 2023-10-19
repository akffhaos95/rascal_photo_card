import React from 'react';
import CardBack from './CardBack';

export default {
  component: CardBack,
  title: 'CardBack',
  argTypes: {
    
  }
};

const Template = (args) => <CardBack {...args} />;

export const Default = Template.bind({});