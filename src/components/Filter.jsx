// eslint-disable-next-line react/prop-types
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todos(a)</option>
            <option value="Completed">Completos(a)</option>
            <option value="Incomplete">Incompletos(a)</option>
          </select>
        </div>
        <div>
          <p>Prioridade:</p>
          <button onClick={() => setSort('Asc')}>Acs</button>
          <button onClick={() => setSort('Desc')}>Desc</button>
        </div>
      </div>
    </div>
  );
};
export default Filter;
