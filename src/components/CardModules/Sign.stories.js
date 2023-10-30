import React from 'react';
import Sign from './Sign';
import CardTemplate from './CardTemplate';

export default {
  component: Sign,
  title: 'Sign',
  argTypes: {
    
  }
};

const Template = (args) => <CardTemplate><Sign {...args} /></CardTemplate>;

export const Default = Template.bind({});
Default.args = {
    sign: `「누군 놀고먹고 있는 줄 아십니까? 
    저도 일 중이라고요」
    (딸깍)` , 
    signStyle: `[{"fontSize":"10px", "textAlign":"left"},
      {"fontSize":"10px"},
      {"fontSize":"10px", "textAlign":"right"},
      {"fontSize":"17px"},
      {"fontSize":"10px"}]`    
};