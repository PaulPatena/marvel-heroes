import { useEffect, useState } from "react";
import { getMarvelHeroes } from "./api/index";
import { ICharactersData } from "./interfaces/marvel";
import "./App.scss";
import Cards from "./components/Cards";
import InfoBar from "./components/InfoBar";
import HeroSearch from "./components/HeroSearch";
import Modal from "./components/Modal";

function App() {
  const [statusMessage, setStatusMessage] = useState("Loading");
  const [heroes, setHeroes] = useState<ICharactersData | undefined>(undefined);
  const [filterText, setFilterText] = useState<string>("");
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getMarvelHeroes().then((data) => {
      if (data.code === 200) {
        setStatusMessage("Loaded");
        setHeroes(data);
      } else {
        setStatusMessage("Something went wrong, retry later");
      }
    });
  }, []);

  const getFilteredHeroes = () => {
    if (heroes) {
      return heroes.data.results.filter((hero) => {
        const path = hero.thumbnail.path;
        const heroName = hero.name;

        let valid =
          path.indexOf("image_not_available") === -1 &&
          path.indexOf("4c002e0305708") === -1;

        if (filterText.trim()) {
          valid =
            valid &&
            heroName.toLowerCase().includes(filterText.trim().toLowerCase());
        }
        return valid;
      });
    } else {
      return [];
    }
  };

  const onFilterUpdate = (filterText: string) => {
    setFilterText(filterText);
  };

  const handleHeroSelect = (heroIndex: number) => {
    setSelectedHero(heroIndex);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {heroes === undefined ? (
        <InfoBar message={statusMessage}></InfoBar>
      ) : (
        <>
          {selectedHero !== null && showModal && (
            <Modal
              hero={getFilteredHeroes()[selectedHero]}
              handleHideModal={handleHideModal}
            ></Modal>
          )}
          <HeroSearch
            filterText={filterText}
            onFilterUpdate={onFilterUpdate}
          ></HeroSearch>
          <Cards
            heroes={getFilteredHeroes()}
            handleHeroSelect={handleHeroSelect}
          />
        </>
      )}
    </div>
  );
}

export default App;
