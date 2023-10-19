import React from 'react';
import PlayerBox from './PlayerBox';

export default {
  component: PlayerBox,
  title: 'PlayerBox',
  argTypes: {
    
  }
};

const Template = (args) => <PlayerBox {...args} />;

export const Default = Template.bind({});