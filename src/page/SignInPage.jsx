import { hashHistory } from "react-router";
import { RaisedButton, TextField } from "material-ui";

import membership from "../security/membership";
import Page from "./Page.jsx";

export default class MainPage extends Page
{
    renderBody()
    {
        return (<form className="sign-in-form">
            <TextField
              ref="userName"
              floatingLabelText="Nick name"
              hintText="Your most favourite name goes here"
              fullWidth={true}
            />
            <TextField
              ref="password"
              type="password"
              floatingLabelText="Password"
              hintText="Any password is accepted"
              fullWidth={true}
            />
            <RaisedButton
                label="Sign in"
                primary={true}
                fullWidth={true}
                style={{ marginTop: 25, height: 50 }}
                onClick={this._signInButton_onClick.bind(this)}/>
        </form>);
    }

    async _signInButton_onClick(e)
    {
        const userName = this.refs.userName.getValue().trim();
        if (userName)
        {
            const result = await membership.login(userName);
            if (result)
            {
                hashHistory.push("/");
            }
        }
    }
}
