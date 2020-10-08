import React, { Fragment } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


export default function KebabMenuComponent({ menuItems }) {
    return (

        <Fragment>

            <Dropdown className="kebab-menu">
                <Dropdown.Toggle variant="" >
                    <img src="/assets/images/kebab-menu.png" alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        (menuItems) ? menuItems.map((item, i) => <Dropdown.Item key={i} onClick={item.action}>{item.label}</Dropdown.Item>) : ""
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Fragment>
    )
}
