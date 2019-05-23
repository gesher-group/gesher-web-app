import React from "react";
import routesData from "../../routes/routes-list.json";
import Button from '@material-ui/core/Button';


function RedButtonLarge(props) {
  return (
    <div className="red-button-large">
    	<Button variant="contained" color="secondary">
    		{props.buttonName}
      	</Button>
    </div>
  );
}

export default RedButtonLarge;