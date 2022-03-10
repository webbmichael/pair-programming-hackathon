import React, { Component } from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.scss'


export default class Header extends Component {
  render() {
    return (
        <div className='header'>
            <PersonOutlineIcon className='header__icon'/>
            <h4 className='header__logo'>logo</h4>
            <ForumIcon className='header__forum'/>
            

        </div>

    )}
}
