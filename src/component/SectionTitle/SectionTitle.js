
import React from 'react';
import classes from './SectionTitle.module.css';

function SectionTitle({sectionTitle}) {
    return (
        <h3 className={classes.sectionTitle}> {sectionTitle} </h3>
    );
}

export default SectionTitle;