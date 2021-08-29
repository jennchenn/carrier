import React from "react";
import { Button } from "react-bootstrap";
import history from './history';


class Groups extends React.Component {

    render() {
        return (
            <div class="container-fluid" id="center-row">
                <div class="row">
                    <div class="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => history.push("/Groups/bread")}
                            children="GROUP1"
                        />
                    </div>
                    <div class="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => console.log("CLICKED")}
                            children="GROUP2"
                        />
                    </div>
                    <div class="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => console.log("CLICKED")}
                            children="GROUP3"
                        />
                    </div>
                </div>
            </div >
        )
    }
}
export default Groups;
