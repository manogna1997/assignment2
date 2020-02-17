import React, { Component } from 'react';
import InvRow from './inventory/InvRow.jsx'
import Product from './inventory/Pojo.jsx'
import AddProduct from './inventory/AddProduct.jsx'

export default class Inventory extends Component {
    /**
     * 
     * @param {default init} props 
     */
    constructor(props) {
        super(props);
        this.state = { prod: [] };
        this.saveProduct = this.saveProduct.bind(this);
    }

    /**
     * 
     * @param {append to new state} p 
     */
    saveProduct(p) {
        this.setState({ prod: this.state.prod.concat(p) });
    }
    render() {
        return (
            <div>


                <div>
                    <h2>My Company Inventory</h2>
                </div>
                <div>
                    <h3>Showing all available products</h3>
                </div>
                <hr />
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.prod.map((p, i) => { return <InvRow key={i} keyId={i} data={p} /> })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div>
                        <h3>Add a new product to inventory</h3>
                    </div>
                    <hr />
                    <div >
                        <AddProduct saveProd={this.saveProduct} />
                    </div>
                </div>
            </div>
        );
    }
}

