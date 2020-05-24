import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'


function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signIn'>
                        SIGN IN
                    </Link>
                }
            </div>
        </div>
    )
}

//od connecta dobija root-reducer kao argument, koji sadrzi sve reducer-e
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header)