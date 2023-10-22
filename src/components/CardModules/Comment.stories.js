import React from 'react';
import Comment from './Comment';

export default {
  component: Comment,
  title: 'Comment',
  argTypes: {
    
  }
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
    comment: "<div>\"notmptmptmp<br>tmptmptmp\"</div>",
};