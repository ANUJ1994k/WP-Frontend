const Sorting = ({ sortOrder, setSortOrder }) => (
    <div>
        <button onClick={() => setSortOrder('asc')}>Sort A-Z</button>
        <button onClick={() => setSortOrder('desc')}>Sort Z-A</button>
    </div>
);

export default Sorting;
