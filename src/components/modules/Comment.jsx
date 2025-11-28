import React from "react";
import { Box, Typography } from "@mui/material";
import Glass from "../modules/Glass";

const Comment = ({ comment }) => {
  if (!comment) return null;

  return (
    <Glass>
      <Typography fontSize={50}>{comment}</Typography>
    </Glass>
  );
};

export default Comment;
