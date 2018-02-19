import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/containers/categories'
import Releated from '../components/releated-layout'
import ModalContainer from '../../widgets/container/modal-container'
import Modal from '../../widgets/components/modal'
import HandlerError from '../../error/containers/handler-error'
class Home extends Component{


    componentDidMount() {
        $('#modal1').modal()
    }

    render(){

        return (
            <HandlerError>
                <HomeLayout>
                    <div className="row">
                        <Releated/>
                        <Categories categories={this.props.data.categories}/>
                    </div>
                    <ModalContainer>
                        <Modal>
                        </Modal>
                    </ModalContainer>
                </HomeLayout>
            </HandlerError>
        )
    }

}

export default Home