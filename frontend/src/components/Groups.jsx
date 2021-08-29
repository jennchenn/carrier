import React from "react";
import { Button } from "react-bootstrap";


class Groups extends React.Component {

    render() {
        return (
            <div className="container-fluid" id="center-row">
                <div className="row">
                    <div className="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => window.location.href = "/Groups/TheBreadGang/Posts"}
                            children="THE BREAD GANG"
                        />
                    </div>
                    <div className="col-md-4">
                        <Button
                            id="group-button"
                            style={{ height: '200px', width: '200px' }}
                            onClick={() => console.log("CLICKED")}
                            children="THE BEES"
                        />
                    </div>
                    <div className="col-md-4">
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
