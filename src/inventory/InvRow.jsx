import React, { Component } from "react";

export default class InvRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.keyId + 1}</td>
                <td>{this.props.data.prodName}</td>
                <td>{this.props.data.price}</td>
                <td>{this.props.data.cat}</td>
                <td>
                    <a href={this.props.data.image} target="_blank">
                        <img src={this.props.data.image} />
                    </a>
                    {/* <img src={this.props.data.image} /> */}
                </td>
            </tr>
        );
    }
}
