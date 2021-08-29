import React from "react";
import { Button } from "react-bootstrap";


class Groups extends React.Component {

    render() {
        return (
            <div class="container-fluid" id="center-row">
                <div class="row">
                    <div class="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => window.location.href = "http://localhost:3000/Groups/TheBreadGang/Posts"}
                            children="THE BREAD GANG"
                        />
                    </div>
                    <div class="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => console.log("CLICKED")}
                            children="THE BEES"
                        />
                    </div>
                    <div class="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => console.log("CLICKED")}
                            children="MY FAVS"
                        />
                    </div>
                </div>
            </div >
        )
    }
}
export default Groups;
