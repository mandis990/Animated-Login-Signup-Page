import React, { Component }   from 'react';
import text from '../images/text.jpg'

  export class Text extends Component{
    render(){
        return(
            <div className="Text">
                <img src={text} alt="png"/> 
            </div>
        )
    }
}  
