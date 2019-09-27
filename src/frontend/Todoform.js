import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

 class Todoform extends Component {
     constructor(props){
        super(props);
        
        this.state = {
            todofield: '',
            currentItem: {
                item: '',
                keys: ''
            }
    }

        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        
     }

     changeHandler = function(event){

            this.setState({
                [event.target.name]: event.target.value,
                currentItem: {item: event.target.value, keys: Date.now()}
            
            })
     }

     clickHandler = function(){                                  
            this.props.callbackfromparent(this.state.currentItem);
    }

    render() {

        
        return (
            <div>
                    <form>
                        <div className="form-group">
                            <div className="input-group pb-2">
                                <input type="text" className="form-control" name="todofield" value={this.state.todofield} onChange={this.changeHandler} />  
                            </div>
                            <div className="input-group-btn">
                                   <Button onClick={this.clickHandler} className="btn btn-primary">Submit</Button> 
                            </div>

                            
                        </div>
                        
                    </form>                
            </div>
        )
    }
}

export default Todoform;