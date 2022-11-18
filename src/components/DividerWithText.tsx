import React from "react";

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     alignItems: "center"
//   },
//   border: {
//     borderBottom: "2px solid lightgray",
//     width: "100%"
//   },
//   content: {
//     paddingTop: theme.spacing(0.5),
//     paddingBottom: theme.spacing(0.5),
//     paddingRight: theme.spacing(2),
//     paddingLeft: theme.spacing(2),
//     fontWeight: 500,
//     fontSize: 22,
//     color: "lightgray"
//   }
// }));

const DividerWithText = ({ children }:any) => {
//  const classes = useStyles();
 return (
  <div >
    <div  />
    <span >{children}</span>
    <div  />
  </div>
 );
};
export default DividerWithText;