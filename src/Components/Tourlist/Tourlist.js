import React, {Component} from 'react';
import Tour from '../Tour/Tour'
import {tourData } from '../../tourData'

class Tourlist extends Component {
    state = {  
        tourData
    }
    // id, city, img, name, info

    handleDelete = (key) => {
        console.log(key)
        const tourData = this.state.tourData.filter((e) => e.id !== key )
        this.setState({tourData : tourData})
    }


    render() {
        return (
        <section id='tourlist'>
            <div className="row p-2">
                {this.state.tourData.map((tourData) => 
                <Tour tourData={tourData}
                    key={tourData.id}
                    onDelete={this.handleDelete}
                />)} 
            </div>
        </section>
        );
    }
}

export default Tourlist;