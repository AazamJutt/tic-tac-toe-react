import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Cell(props) {
  const [localState, setlocalState] = useState('');
  const [marked, setMarked] = useState(false);
  function handleChange(e) {
    if (marked===false) {
      props.turn==='X' ? setlocalState('x-lg'):setlocalState('circle');
      props.handleTurn(props.index);
      setMarked(true);
    }
  }
  function getColor() {
    if (localState === 'x-lg') return "info";
    else if (localState === 'circle') return "success";
    else return "warning";
  }
  useEffect(() => {
    setlocalState('');
    setMarked(false);
    props.setClear(false);
  }, [props.clear,true])
  
  return (
    <div
      className={
        styles.Cell+` btn btn-${getColor()} border border-dark rounded-0  p-0 m-0`
      }
    >
      <div
        className={`p-5 fs-4 h-100 p-0 m-0`}
        onClick={(e) => handleChange(e)}
      ><i className={`bi bi-${localState} fs-2`}></i></div>
    </div>
  );
}
