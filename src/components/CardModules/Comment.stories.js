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
    comment: `"포수 포지션 경쟁 끝에 새로운 집을 짓기로 한 비버마스터
    아이쿠, 이미 1루에 자리잡으려는 세력들이 있군요.
    탄탄한 집을 짓는 비버들과 외야에서 쫒겨나 흉폭한 비버까지...
    비버마스터 혁진권은 이번에야말로🌲
    🌴자신의 베이스캠프를 완성할 수 있을까요?"`,
    icon: "GiBeaver",
    commentStyle: `[{"fontFamily": "Dongle", "fontSize": "17px"}, 
    {"fontFamily": "Dongle", "fontSize": "18px"},
    {"fontFamily": "Dongle", "fontSize": "15px"},
    {"fontFamily": "Dongle", "fontSize": "19px"},
    {"fontFamily": "Dongle", "fontSize": "19px", "textAlign": "right"}]`
};