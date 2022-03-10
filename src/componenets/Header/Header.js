import React, { Component } from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ForumIcon from '@mui/icons-material/Forum';
import NightlifeTwoToneIcon from '@mui/icons-material/NightlifeTwoTone';
import './Header.scss'


export default class Header extends Component {
  render() {
    return (
        <div className='header'>
            <PersonOutlineIcon className='header__icon'/>
            <NightlifeTwoToneIcon/>
            <ForumIcon className='header__forum'/>
            

        </div>

    )}
}
