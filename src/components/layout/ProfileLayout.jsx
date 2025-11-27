import React from "react";
import ScoreProgress from "../modules/ScoreProgress";
import Glass from "../modules/Glass";

const ProfileLayout = ({ stat }) => {

    if (!stat) return null;
    
   const styles = {
    container: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '31px 0px',
        gap: '5px',
        width: '100%',  // Glass의 950px에 맞춤
        height: 'auto', // 자동 높이
    },
    item: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 10px",
      background: "rgba(255,255,255,0.02)",
      borderRadius: 8,
      boxSizing: "border-box",
      minWidth: 120,
      alignItems: "stretch",
    },
    label: {
      color: "#ffffff",
      opacity: 0.9,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 0.4,
    },
    progressWrap: {
      display: "flex",
      alignItems: "center",
      height: 36,
    },
  };
  
  return (
    <Glass>
      
    </Glass>
  );
};

export default ProfileLayout;