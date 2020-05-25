import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types'

const Modal =(props)=> {
        const {isOpened, header, closeButton, text, actions, closeModal} = props;

        return isOpened ? (
            <div className='modal'>

                <div className='modal-main'>
                    <div className='modal-header'>
                        <div className='header-text'>{header}</div>
                        <div className='close-btn' onClick={closeModal}>{closeButton}</div>
                    </div>
                    <div className='modal-body'>{text}</div>
                    <div className='modal-footer'>
                        {actions}
                    </div>
                </div>
                <div className='modal-backdrop' onClick={closeModal}>
                </div>
            </div>
        ) : null;
    }


Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired ,
    header: PropTypes.string,
    closeButton: PropTypes.any,
    text: PropTypes.string.isRequired,
    actions: PropTypes.array,
    closeModal: PropTypes.func.isRequired
};
export default Modal;