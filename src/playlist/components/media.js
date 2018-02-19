import  React, {Component} from 'react';
import {Play} from '../../icons/components/icons'
import  PropTypes from 'prop-types';

class Media extends Component{


    render(){
        const styles = {
            titleMedia:{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 15
            },
            playButton:{
                lineHeight: "48px"
            }
        }
        return(
            <div className="col s6 m4 l2">
                <div className="card">
                    <div className="card-image">
                        <img
                            src={this.props.cover}
                            alt=""
                            width={250}
                            height={150}/>
                        <a className="btn-floating halfway-fab waves-effect waves-light red center-align modal-trigger"
                           style={styles.playButton} href="#modal1"><Play size={20} color={'white'} title={"Escucha la rola"}/></a>
                        <p className="card-title" style={styles.titleMedia}>{this.props.title}</p>
                    </div>
                    <div className="card-action">
                        <p>{this.props.author}</p>
                    </div>

                </div>
            </div>


        )
    }



}

// Media.propTypes ={
//     src: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     autor: PropTypes.oneOf(['Carlos gonzalez'])
// }


export default Media;