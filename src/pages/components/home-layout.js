import React from 'react'
import './home-layout.js.css'

function HomeLayout(props) {
    return(
        <section>
            {props.children}
        </section>

    )
}

export default HomeLayout