
import React, { Fragment, useState } from "react"

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function ModalComponent({ size, heading, show, children, handleClose }) {

    return (<Modal size={size} show={show} onHide={handleClose.action} animation={true}>
        <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>)


}
