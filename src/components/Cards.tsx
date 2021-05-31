import { IHeroData } from "../interfaces/marvel";
import Card from "./Card";
import "./Cards.scss";

interface ICardsProps {
  heroes: Array<IHeroData>;
  handleHeroSelect(heroIndex: number): void;
}

const Cards = ({ heroes, handleHeroSelect }: ICardsProps) => {
  return (
    <div className="cards">
      {heroes.map((hero, heroIndex) => (
        <Card
          key={hero.id}
          hero={hero}
          heroIndex={heroIndex}
          handleHeroSelect={handleHeroSelect}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
