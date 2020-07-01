import React, { useState } from "react";
import {IconBell, PersonalizedBell,ClosedBell} from './IconBell'
/**
 * @description:
 * This component is used as a simple demonstration of useState to create a morphing button.
 */



const btnActiveStyle = {

  // border: "none",
  // textDecoration: "none",
  // fontSize: "16px"
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  // color
  backgroundColor: "#e3e3e3",
  color: "#5f5f5f",
  
  // Font
  fontFamily: "inherit",
  fontSize: "0.9rem",
  textAlign: "center",
  justifyContent: "center",
  letterSpacing: "0.007px",
  lineHeight: "normal",
  textDecoration: "none",
  
  // Sizing
  height: "36px",
  minWidth: "71.96px",
  width: "120.5px",

  // Box Model
  // boxSizing: "border-box",
  padding: "10px 16px 10px 16px",
  border: "1px solid transparent",
  borderRadius: "0",
  textTransform: "uppercase",
};


const defaultStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  // color
  backgroundColor: "#CC0000",
  color: "#ffffff",
  
  // Font
  fontFamily: "inherit",
  fontSize: "0.9rem",
  justifyContent: "center",
  letterSpacing: "0.007px",
  lineHeight: "normal",
  
  // Sizing
  height: "36px",
  minWidth: "71.96px",
  width: "120.5px",

  // Box Model
  // boxSizing: "border-box",
  border: "1px solid transparent",
  borderRadius: "0",
  padding: "10px 16px 10px 16px",
  textTransform: "uppercase",
};

const subscribedBTNgroup = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};











export default function ToggleBTN() {
  const [isToggled, setToggled] = useState(false);
  
  const toggleTrueFalse = () => setToggled(!isToggled);
  console.log(isToggled)

  if (!isToggled) {
    return (
      <div style={subscribedBTNgroup}>
      <button style={defaultStyle} onClick={toggleTrueFalse}>
        <h3>Subscribe</h3>
      </button>
      {/* Unsubscribed  */}
      <IconBell type={isToggled} ></IconBell>
    </div>
    );
  }
  return (
    <>
    <div style={subscribedBTNgroup}>
      <button style={btnActiveStyle} onClick={toggleTrueFalse}>
        <h3>Subscribed</h3>
      </button>
      <IconBell type={isToggled} ></IconBell>
      {/* <PersonalizedBell></PersonalizedBell> */}
    </div>
    </>
  )
}