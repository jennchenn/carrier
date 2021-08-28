import React from "react";
import { Button } from "react-bootstrap";
import history from './history';


class Groups extends React.Component {

    render() {
        return (
            <div>
                <Button
                    style={{ height: '100px', width: '100px' }}
                    onClick={() => history.push('/Group/Groups')}
                    children="GROUP1"
                />
                <Button
                    onClick={() => console.log("CLICKED")}
                    children="GROUP2"
                />
                <Button
                    onClick={() => console.log("CLICKED")}
                    children="GROUP3"
                />
            </div>
        )
    }
}
export default Groups;