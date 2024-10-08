import stl from '../css/SearchCom.module.css'
import FilterIcon from './FilterIcon';
import SearchIcon from './SearchIcon';
const SearchCom = () => {
    return (
        <>
            <div className={stl.searchBarContainer}>
                <div className={stl.searchInnerContainer}>
                    <input type="text" className="searchInput" placeholder="Search" />
                    <button><SearchIcon /></button>
                </div>
                {/* <div className={stl.filterBtn}>
                    <FilterIcon />

                    Filter
                </div> */}


            </div>
        </>
    )
}

export default SearchCom;