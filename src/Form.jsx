import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Add() {
  return (
    <div>
      <form action="/action_page.php">
        <label for="fname">First name:</label>
        <br />
        <div className="TextField">
          <TextField type="text" id="fname" name="fname" value="John" />
        </div>
        <br />
        <label for="lname">Last name:</label>
        <br />
        <div className="TextField">
          <TextField type="text" id="lname" name="lname" value="Doe" />
        </div>
        <br />
        <br />
        {/* <input type="submit" value="Submit" /> */}
        <Button variant="outlined" color="secondary">
          Submit
        </Button>
        {/* você pode alternar a cor entre algumas opções,
         essa foi a que mais se destaca.
         Podemos reaproveitar */}
      </form>
    </div>
  );
}
