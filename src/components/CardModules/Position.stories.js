import React from 'react';
import Position from './Position';

export default {
  component: Position,
  title: 'Position',
  argTypes: {
    position: { // position 변수를 커스터마이즈
        control: {
          type: 'select', // select 박스를 사용하여 다양한 값을 선택할 수 있도록 합니다.
          options: ['P', 'LF', 'CF', 'RF'], // 포지션 옵션을 정의합니다.
        },
      },
    },
};

const Template = (args) => <Position {...args} />;

export const Default = Template.bind({});
Default.args = {
    position: 'no',
};

export const Pitcher = Template.bind({});
Pitcher.args = {
    position: 'P',
};

export const LeftField = Template.bind({});
LeftField.args = {
    position: 'LF',
};

export const CenterField = Template.bind({});
CenterField.args = {
    position: 'CF',
};
