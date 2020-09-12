import React from 'react';
import Popup from "reactjs-popup";
import './logo.css';

interface LogoProps {
    text: string,
    logo: string,
    posx: number,
    posy: number,
    bg: string,
}

class Logo extends React.Component<LogoProps> {
    render() {
        return (
            <div>
                <Popup
                    trigger={
                        <div className="button" style={{
                            position: "absolute", left: `${this.props.posx}%`,
                            top: `${this.props.posy}%`, width: "20%"
                        }}><h2>{this.props.text}</h2>
                            <img src={this.props.logo} alt={this.props.text} width="40%" height="40%"/></div>}
                    modal
                    nested
                >
                    {(close: any) => (
                        <div className="modal" style={{background: this.props.bg}}>
                            <button className="modal-close" onClick={close}>
                                &times;
                            </button>
                            <div className="modal-header"> {this.props.text} </div>
                            <div className="modal-content">
                                {this.props.children}
                            </div>

                        </div>
                    )}
                </Popup>
            </div>);
    }
}

export default Logo;