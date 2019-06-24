import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Tour.scss'

// id, city, img, name, info

class Tour extends Component {
    state = {
        showInfo : false
    }
    render() {
        const {city, img, name, info, id} = this.props.tourData
        return (
        <div className="col-md-3">
            <div className="card bg-light my-5">
                <div className="img-container">
                    <img src={img} alt="imagem do card" className="card-img-top img-fluid"/>
                    <FontAwesomeIcon onClick={() => this.props.onDelete(id)} icon='times-circle' size='2x' className='timescircle'/>
                </div>
                <div className="card-header">
                    <h3 className='card-title text-capitalize mb-3'>{city}</h3>
                    <h5 className='card-subtitle text-capitalize'>{name}</h5>
                    <h5 className='card-info mt-3 ml-0 text-right'> 
                        Info
                        <FontAwesomeIcon onClick={() => this.setState({showInfo : !this.state.showInfo})} icon='caret-square-down' size='1x' className='arrowdown ml-2'/> 
                    </h5>
                        {this.state.showInfo && <p>{info}</p>}
                </div>
            </div>
        </div>
        );
    }
}

export default Tour;