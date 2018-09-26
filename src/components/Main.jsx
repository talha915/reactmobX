import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {store} from '../stores/BirdStore'

// export interface IProps{
//     bird:any
// }

// @inject((store:any) =>({
//     bird:store.bird
// }))
@inject('BirdStore')
@observer
class Main extends Component {
    constructor(props) {
        super(props)
        this.state= {
            toDo: ""
        }
    }

    sendData=()=>{
        // const {addBird} = this.props.bird;
        // addBird(this.state.toDo)
        this.props.BirdStore.addBird(this.state.toDo);
        console.log("Submit");
    }

    deleteData=(i)=>{
        // const {deleteBird} = this.props.bird;
        // deleteBird(i)
        this.props.BirdStore.deleteBird(i);
        console.log("Delete", i);
    }

    render() {
        //const {birds, getBirds} = this.props.bird;
        const {BirdStore} = this.props;
        const birdsArray = BirdStore.birds.map((bird, i)=>{
            return(
                <ul key={Math.random()}>
                    <li>
                        {bird} <button onClick={(e)=>this.deleteData(i)}>X</button>
                    </li>
                </ul>
            );
        });

        return(
            <div>
                We have {BirdStore.getBirds} items

                <input
                    type={"text"}
                    placeholder={"Enter Birds"}
                    onChange={e=>this.setState({toDo: e.target.value})}
                />

                <button onClick={this.sendData}>
                    Submit
                </button>
                {birdsArray}
            </div>
        );
    }
}

export default Main;