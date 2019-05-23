import React from "react";
import routesData from "../../routes/routes-list.json";
import Button from '@material-ui/core/Button';

function RedButton(props) {
  return (
    <div className="red-button">
    	<Button variant="contained" color="secondary" size={props.size}>
    		{props.buttonName}
      	</Button>
    </div>
  );
}

export default RedButton;