import EmptyTile from "./empty-tile";
import FilledTile from "./filled-tile";


const TileComponent = (props: {
  tileData: {
    buttonCost: number,
    timeValue: number,
    income: number,
    shape: number[][]
  }
}) => {
  const { buttonCost, timeValue, income, shape } = props.tileData;
  return ( 
    <div>
      <p><span>Button Cost:</span> {buttonCost}</p>
      <p><span>Time Value:</span> {timeValue}</p>
      <p><span>Income:</span> {income}</p>
      <div>
        {shape.map((line) => (
          <div>
            {line.map((tile) => (
              tile == 0 ? <EmptyTile /> : <FilledTile />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default TileComponent;