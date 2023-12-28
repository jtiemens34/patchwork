import Image from "next/image";
import buttonIcon from "@/data/images/button.png";
import EmptyTile from "./empty-tile";
import FilledTile from "./filled-tile";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { Hourglass } from "lucide-react";

interface TileProps {
  tileData: {
    buttonCost: number,
    timeValue: number,
    income: number,
    shape: number[][]
  }
}

const TileComponent = (props: TileProps) => {
  const { buttonCost, timeValue, income, shape } = props.tileData;
  return ( 
    <div>
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <div>
            {shape.map((line) => (
              <div className="max-h-[40px]">
                {line.map((tile) => (
                  tile == 0 ? <EmptyTile /> : <FilledTile />
                ))}
              </div>
            ))}
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          sideOffset={5}
        >
          <div>
            <p>
              <Image 
                src={buttonIcon}
                alt=""
                width={25}
                height={25}
                className="inline mr-1"
              />
              Cost: {buttonCost}
            </p>
            <p>
              <Image 
                src={buttonIcon}
                alt=""
                width={25}
                height={25}
                className="inline mr-1"
              />
              Income: {income}</p>
            <p>
              <Hourglass className="inline" />
              :{timeValue}
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
 
export default TileComponent;