import React from 'react'

const Search =  props => (

    <form action="">
        <div className="row">
            <div className="input-field col s6">
                <input placeholder="Luis Fonsi" id="search-media" name="search" type="text" className="validate"/>

                <label for="search-media">Busca tu video  <i className="material-icons">search</i></label>
            </div>
        </div>
    </form>

)

export default Search