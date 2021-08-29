import React from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap';

import logo from '../assets/carrier.png'

import './Breadcrumbs.css';

function Breadcrumbs(props) {
    return (
        <div className="navigation">
            <img src={logo} alt="carrier logo" className="carrier-logo"/>
            <nav className="navbar">
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item className="breadcrumb-item" href="/">Groups</Breadcrumb.Item>
                    {props.location.pathname.includes("TheBreadGang") && <Breadcrumb.Item href="/Groups/TheBreadGang">
                        The Bread Gang
                    </Breadcrumb.Item>}
                    {props.location.pathname.includes("Posts") && <Breadcrumb.Item className="breadcrumb-item" href="/Groups/TheBreadGang/Posts">
                        Posts
                    </Breadcrumb.Item >}
                    {props.location.pathname.includes("Aug28") && <Breadcrumb.Item href="Groups/TheBreadGang/Posts/Aug28">Aug 28</Breadcrumb.Item>}
                    {props.location.pathname.includes("Aug29") && <Breadcrumb.Item href="Groups/TheBreadGang/Posts/Aug29">Aug 29</Breadcrumb.Item>}
                    {props.location.pathname.includes("Edit") && <Breadcrumb.Item href="Groups/TheBreadGang/Posts/Aug29/Edit">Edit</Breadcrumb.Item>}
                </Breadcrumb>
            </nav>
        </div>
    );
}

export default withRouter(Breadcrumbs);