import { RaisedButton, TextField } from "material-ui";

import Page from "./Page.jsx";

export default class MainPage extends Page
{
    renderBody()
    {
        return (<form className="sign-in-form">
            <TextField
              floatingLabelText="Nick name"
              hintText="Your most favourite name goes here"
              fullWidth={true}
            />
            <TextField
              type="password"
              floatingLabelText="Password"
              hintText="Any password is accepted"
              fullWidth={true}
            />
            <RaisedButton label="Sign in" primary={true} fullWidth={true} style={{ marginTop: 25, height: 50 }}/>
        </form>);
    }
}
