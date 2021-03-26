import React from 'react';
import girl from '../images/girl.jpg'

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                <img src={girl} alt="png"/> </div>
                    <div className="form">
                        <div className="form-group">
                            {/* <label htmlFor="username"></label> */}
                            <input type="email" name="Institute Email Id" placeholder="Institute Email Id"/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="password" name="Password" placeholder="Password"/>
                        </div>
                    </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
        
        
        )}
}