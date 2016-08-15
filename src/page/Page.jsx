import { AppBar } from "material-ui";

export default class Page extends React.Component
{
    render()
    {
        return <div className="page">
            {this.renderHeader()}
            {this.renderBody()}
            {this.renderFooter()}
        </div>;
    }

    renderHeader()
    {
        return <AppBar title="VChat"/>;
    }

    renderBody()
    {
        return <main/>;
    }

    renderFooter()
    {
        return undefined;
    }
}
