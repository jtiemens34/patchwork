"use client";

import TileComponent from "@/components/Tile";
import { Button } from "@/components/ui/button";
import tiles from "@/data/tiles.json";
import { useState } from "react";

export default function Home() {
  const [tile, setTile] = useState(tiles[0]);
  const newTile = () => {
    var randomTile = Math.floor(Math.random() * tiles.length);
    setTile(tiles[randomTile]);
  };
  return (
    <>
      <TileComponent 
        tileData={tile}
      />
      <Button onClick={newTile}>
        Generate new tile
      </Button>
    </>
  );
}