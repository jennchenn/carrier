import React from "react";
import { Link, withRouter } from "react-router-dom";

function Breadcrumbs(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item  ${props.location.pathname === "/" ? "Groups" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/">
                                    Groups
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${props.location.pathname === "/Groups/Group" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/Groups/Group">
                                    / Group
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${props.location.pathname === "/Groups/Group/Posts" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/Groups/Group/Posts">
                                    / Posts
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${props.location.pathname === "/Groups/Group/IssueMaker" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/Groups/Group/Posts/IssueMaker">
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