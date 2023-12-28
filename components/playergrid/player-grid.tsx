import Player1Board from "@/data/images/player1bg.png";
import Player2Board from "@/data/images/player2bg.png";
import Image from "next/image";
import { useState } from "react";
import EmptyTile from "../tile/empty-tile";
import FilledTile from "../tile/filled-tile";

interface PlayerGridProps{
  playerNumber: number
}

const PlayerGrid = (props: PlayerGridProps) => {
  const emptyGridData = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const [gridData, setGridData] = useState(emptyGridData);
  
  const boardImage = props.playerNumber == 1 ? Player1Board : Player2Board;
  return ( 
    <div className="relative">
      <Image
        src={boardImage}
        alt=""
        width={450}
        height={450}
        className="absolute top-0 left-0"
      />
      <div className="absolute left-0 top-0">
        {gridData.map((line) => (
          <div className="max-h-[50px]">
            {line.map((tile) => (
              tile === 0 ? <EmptyTile /> : <FilledTile />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default PlayerGrid;