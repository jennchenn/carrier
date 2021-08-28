import React from "react";
import { Link, withRouter } from "react-router-dom";

function Breadcrumbs(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${props.location.pathname === "/" ? "Groups" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/">
                                    Groups
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/Groups/Group" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/Groups/Group">
                                    / Group
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/Groups/Group/IssueMaker" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/Groups/Group/IssueMaker">
                                    / IssueMaker
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Breadcrumbs);