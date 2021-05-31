import "./HeroSearch.scss"
interface IHeroSearchProps {
  filterText: string,
  onFilterUpdate(filterText: string): void 
}

const HeroSearch = ({filterText, onFilterUpdate}:IHeroSearchProps) => {
  const handleFilterUpdate = (e: React.ChangeEvent<any>) =>
  onFilterUpdate(e.target.value);

  return (
    <div className="search">
      <form>
        <label htmlFor="filter-heroes" className="search-label">
          Search for you hero?
        </label>
        <br />
        <input
          id="filter-heroes"
          className="search-label"
          type="text"
          value={filterText}
          onChange={handleFilterUpdate}
        />
      </form>
    </div>
  );
};

 export default HeroSearch;
 