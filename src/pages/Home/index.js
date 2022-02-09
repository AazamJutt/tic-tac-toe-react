import { Alert } from "bootstrap";
import { Fireworks } from "fireworks/lib/react";
import React, { useEffect, useState } from "react";
import Cell from "../../components/Cell";
import styles from "./style.module.css";

export default function Home() {
  const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState("X");
  const [won, setwon] = useState(false);
  const [clear, setClear] = useState(false);

  let fxProps = {
    count: 4,
    interval: 600,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i+1) * (window.innerWidth / 4) - (i) * 50,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };
  function clearAll() {
    setTurn('X');
    setwon(false);
    setGrid([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setClear(true);
  }
  useEffect(() => {
    let winner = checkWin();
    if (winner === 1 || winner === 2) {
      setwon(true);
    }
  }, [turn]);

  function checkWin() {
    if (
      (grid[0] == 1 && grid[1] == 1 && grid[2] == 1) ||
      (grid[0] == 1 && grid[3] == 1 && grid[6] == 1) ||
      (grid[1] == 1 && grid[4] == 1 && grid[7] == 1) ||
      (grid[2] == 1 && grid[5] == 1 && grid[8] == 1) ||
      (grid[0] == 1 && grid[4] == 1 && grid[8] == 1) ||
      (grid[2] == 1 && grid[4] == 1 && grid[6] == 1)
    ) {
      return 1;
    }
    if (
      (grid[0] == 2 && grid[1] == 2 && grid[2] == 2) ||
      (grid[0] == 2 && grid[3] == 2 && grid[6] == 2) ||
      (grid[1] == 2 && grid[4] == 2 && grid[7] == 2) ||
      (grid[2] == 2 && grid[5] == 2 && grid[8] == 2) ||
      (grid[0] == 2 && grid[4] == 2 && grid[8] == 2) ||
      (grid[2] == 2 && grid[4] == 2 && grid[6] == 2)
    ) {
      return 2;
    }
  }
  function handleTurn(index) {
    var temp = [...grid];
    if (turn === "X") {
      setTurn("O");
      temp[index] = 1;
      setGrid(temp);
    } else {
      setTurn("X");
      temp[index] = 2;
      setGrid(temp);
    }
    console.log(temp);
  }
  return (
    <div
      className={
        styles.Main +
        " d-flex flex-column justify-content-center align-items-center text-center"
      }
    >
      {won && (
        <>
          <Fireworks {...fxProps} />
          <h1>{`Player ${checkWin()} won!!`}</h1>
        </>
      )}
      <div className={styles.Container + " justify-content-center"}>
        <div>
          <Cell
            turn={turn}
            index={0}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
          <Cell
            turn={turn}
            index={1}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
          <Cell
            turn={turn}
            index={2}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
        </div>
        <div>
          <Cell
            turn={turn}
            index={3}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
          <Cell
            turn={turn}
            index={4}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
          <Cell
            turn={turn}
            index={5}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
        </div>
        <div>
          <Cell
            turn={turn}
            index={6}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
          <Cell
            turn={turn}
            index={7}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
          <Cell
            turn={turn}
            index={8}
            clear={clear}
            setClear={setClear}
            handleTurn={handleTurn}
          />
        </div>
      </div>
      <div className="btn btn-danger btn-lg m-3" onClick={clearAll}>
        Reset
      </div>
    </div>
  );
}
