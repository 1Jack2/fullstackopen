const Filter = ({filterKey, handleFilterChange}) => (
    <div>
        filter shown with <input value={filterKey} onChange={handleFilterChange} />
    </div>
)

export default Filter
