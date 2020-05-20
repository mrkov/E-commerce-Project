import React, { Component } from 'react'

import MenuItem from '../menu-item/MenuItem'
import directoryData from './directory.data'

import './directory.styles.scss'

export default class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sections: directoryData
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => {
                  return <MenuItem
                        key={id}
                        size={size}
                        imageUrl={imageUrl} 
                        title={title}
                        linkUrl={linkUrl}
                    />
                })}
            </div>
        )
    }
}

