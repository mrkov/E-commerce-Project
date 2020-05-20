import React, { Component } from 'react'
import SHOP_DATA from './2.2 shop.data.js'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.js'

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: SHOP_DATA
        }
    }

    componentDidMount(){
        console.log(this.state.collections)
    }
    
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                <h1>SHOP PAGE COLLECTIONS</h1>
                {collections.map(({id, ...otherCollectionProps}) => 
                    <CollectionPreview key={id} {...otherCollectionProps} />
                )}
            </div>
        )
    }
}
