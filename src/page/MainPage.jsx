import membership from "../security/membership";
import Page from "./Page.jsx";

export default class MainPage extends Page
{
    static contextTypes = {
        user: React.PropTypes.object
    }

    renderBody()
    {
        return (<h1>{membership.user.name}</h1>);
    }
}
