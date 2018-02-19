import React from 'react'
import Media from './media';

function Playlist (data){
    return (
        <div className="row">
            {
                data.playlist.map((item ,index) =>{
                    return <Media {...item} key={index}/>
                 })
            }
        </div>
    )
}
/*
class Playlist extends Component {
    render() {
        const playlist1 = this.props.data.categories

        return (
            <div className="row">
                {
                   playlist1.map((lista, index) =>{

                       return <div className="row" key={index}>
                           <h5>{lista.title}</h5>
                           <h6>{lista.description}</h6>
                           {
                           lista.playlist.map((item, index) =>{
                               return <Media {...item} key={index}/>
                           })

                       } </div>

                   })
                }
            </div>
        )
    }
}
*/
export default Playlist;