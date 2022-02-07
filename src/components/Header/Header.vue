import React from "react";
import styles from './header.css';
import {Photo} from "./Photo/Photo";
import JobSought from "./JobSought/JobSought";
import Contacts from "./Contacts/Contacts";

const Header = () => {
    return (
        <header className={styles.header}>
            <Photo/>
            <div className={styles.headerInner}>
                <JobSought/>
                <Contacts/>
            </div>
        </header>
    )
}

export default Header;