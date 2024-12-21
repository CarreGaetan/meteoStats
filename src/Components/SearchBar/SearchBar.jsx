import './SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function SearchBar() {

    const [search, setSearch] = useState('')
    console.log(search)

    function handleSearch() {
        setSearch(search)
    }

    return (
        <div className="searchbar">
            <input 
                type="text" 
                placeholder='Entrez un lieu'
                onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => handleSearch()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} color='white' />
            </button>
        </div>
    )
}

export default SearchBar
