import React from 'react'
import PlayList from '../../playlist/components/playlist'

function Category(props) {
    return(
        <div className="media">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            {
                    <PlayList playlist={props.playlist}/>

            }
        </div>
    )
}

export default Category