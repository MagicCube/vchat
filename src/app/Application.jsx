import { hashHistory, Route, Router } from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { deepOrange400, deepOrange500, deepOrange700 } from 'material-ui/styles/colors';

import membership from "../security/membership";
import MainPage from "../page/MainPage.jsx";
import SignInPage from "../page/SignInPage.jsx";
import NotFoundPage from "../page/NotFoundPage.jsx";

export default class Application extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    getTheme()
    {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: deepOrange500,
                primary2Color: deepOrange700,
                primary3Color: deepOrange400
            }
        });
        return muiTheme;
    }

    render()
    {
        return (
            <MuiThemeProvider muiTheme={this.getTheme()}>
                <Router history={hashHistory}>
                    <Route path="/" component={MainPage} onEnter={this.requireAuth.bind(this)} />
                    <Route path="/sign-in" component={SignInPage} />
                    <Route path="*" component={NotFoundPage} />
                </Router>
            </MuiThemeProvider>);
    }

    requireAuth(nextState, replace)
    {
        if (!membership.loggedIn())
        {
            replace("/sign-in");
        }
    }
}
