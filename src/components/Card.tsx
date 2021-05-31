import "./Card.scss";
import { useRef, memo } from "react";
import {IHeroData} from "../interfaces/marvel"

interface ICardProps {
  hero: IHeroData,
  heroIndex: number,
  handleHeroSelect(heroIndex: number): void;
}

const Card = memo(({ hero, heroIndex, handleHeroSelect }: ICardProps) => {
  const cardRef = useRef<HTMLInputElement>(null);

  const thumbnailUrl = hero.thumbnail.path.startsWith("http:")
    ? `${hero.thumbnail.path.replace("http://", "https://")}.${hero.thumbnail.extension}`
    : `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

  return (
    <div
      className="hero-card"
      tabIndex={0}
      ref={cardRef}
      onMouseEnter={() => cardRef?.current?.focus()}
      onMouseLeave={() => cardRef?.current?.blur()}
      onClick={()=>handleHeroSelect(heroIndex)}
    >
      <div className="hero-thumbnail-wrapper">
        <img className="hero-thumbnail" src={thumbnailUrl} alt={hero.name} />
      </div>
      <div className="bar-separator"></div>
      <div className="hero-name-wrapper">
        <div className="hero-name">{hero.name}</div>
      </div>
    </div>
  );
});

export default Card;
