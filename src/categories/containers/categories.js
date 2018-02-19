import React from 'react'
import Category from './Category'
import  './categories.css'
import Search from '../../widgets/container/search'

function Categories(props) {
    return(
        <div className="col l10 media">
            <Search/>
            {

                props.categories.map((item, index)=>{
                   return (

                       <Category key={index} {...item}/>

                   )
                })
        }
        </div>


    )
}

export default Categories