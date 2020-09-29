import React, { Component } from "react";
const Increment = React.forwardRef((props, input) => (
    <div>
        <input 
        type="text" 
        ref={ input } 
        placeholder="enter task"/>
        <input 
        type="submit" 
        value="Add" />
    </div>
))

export default Increment;