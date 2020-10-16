import React from 'react';
import style from './SidebarTitle.module.css'

function SidebarTitle({title}) {
    return <h3 className={style.sidebarTitle}> {title} </h3>
}

export default SidebarTitle;