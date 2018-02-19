import React from 'react'

function Modal(props) {

    console.log(this)
    return(

        <div>
            <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4></h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Modal