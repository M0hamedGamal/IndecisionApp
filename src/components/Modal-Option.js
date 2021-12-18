import React from "react";
import Modal from 'react-modal';

const ModalOption = (props) => (
    <Modal
        className='modal'
        isOpen={!!props.selectedOption}
        onRequestClose={props.handelClearSelectedOption}
        closeTimeoutMS={200}
        contentLabel="Example Modal"
        ariaHideApp={false}
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handelClearSelectedOption}>Okay</button>
    </Modal>
)

export default ModalOption