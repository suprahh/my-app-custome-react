import React from 'react'

function Icon(props){
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} fill={props.color} viewBox="0 0 32 32">
            <title>{props.title}</title>
            {props.children}
        </svg>
    )
}

export default Icon