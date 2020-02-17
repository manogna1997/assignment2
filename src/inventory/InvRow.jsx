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
                    {this.props.data.image != "" ? (
                        <a href={this.props.data.image} target="_blank">View
                        </a>
                    ) : ("N/A")}
                </td>
            </tr>
        );
    }
}
