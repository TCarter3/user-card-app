import React from "react";
import { Menu, } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { UserConsumer, } from "../providers/UserProvider";


const NavBar = () => (
    <UserConsumer>
        { user => (

            
            <Menu pointing inverted>
        <NavLink to="/" >
            <Menu.Item>
                HOME
            </Menu.Item>
        </NavLink>
        <NavLink to="/user" >
            <Menu.Item >
                { user.firstName } { user.lastName }
            </Menu.Item>
        </NavLink>


    </Menu>

            )}
    </UserConsumer>
);

export default NavBar;