import React from 'react';
import Comment from './Comment';
import CardTemplate from './CardTemplate';

export default {
  component: Comment,
  title: 'Comment',
  argTypes: {
    
  }
};

const Template = (args) => <CardTemplate><Comment {...args} /></CardTemplate>;

export const Default = Template.bind({});
Default.args = {
    comment: `매 순간 진심을 쏟아 팀 분위기에 불을 지피는 
    낭만파 선수가 팀에 입단하였습니다. 
    이 선수와 함께라면 겨울에도 
    라스칼의 열기는 꺼지지 않을 것 입니다. 
    영차!`,
    icon: "FaCheck",
    commentStyle: `[{"fontFamily": "Nanum Myeongjo", "fontSize": "11px"}, 
    {"marginTop": "5px", "fontFamily": "Nanum Myeongjo", "fontSize": "12px"},
    {"marginTop": "10px", "fontFamily": "Black And White Picture", "fontSize": "13px"},
    {"marginTop": "0px", "fontFamily": "Black And White Picture", "fontSize": "13px", "textAlign": "right"},
    {"marginTop": "5px", "fontFamily": "Black And White Picture", "fontSize": "30px", "textAlign": "right"}]`    
};