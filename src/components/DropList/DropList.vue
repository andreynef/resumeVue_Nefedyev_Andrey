import React from "react";
import styles from './DropList.css';
import {useSelector} from "react-redux";
import {DropItems} from "./DropItems/DropItems";

export const DropList = () => {
  const droplistStateArr = useSelector(state => state.droplist);
  const listComponents = droplistStateArr.map((item, index) =>
    <DropItems key={index} item={item}/>)

  return (
    <ul className={styles.droplistContainer}>
      {listComponents}
    </ul>
  )
}
