

import React, { Fragment, useState } from 'react'

export default function SearchFieldComponent({ searchHandler }) {

    const [searchQuery, setSearchQuery] = useState("")
    const [searchType, setSearchType] = useState(null)

    const handleQueryChange = event => setSearchQuery(event.target.value)
    const handleTypeChange = event => setSearchType(event.target.value)

    const handleSearch = () => {
        searchHandler({ query: searchQuery, type: searchType })
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            //   console.log('do validate');
            handleSearch()
        }

    }

    const handleKeyUp = () => {

        if (searchQuery.length <= 0) {
            handleSearch()
        }
    }

    return (

        <Fragment>
            <div className="input-group search-field">
                <span className=" w-100 form-icon-wrapper">
                    <span className="form-icon  form-icon--right" onClick={handleSearch}>
                        <i className="fa fa-search form-icon__item"></i>
                    </span>
                    <input type="text" onen value={searchQuery} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} className="form-control" type="search" placeholder="Type to search…" onChange={handleQueryChange} />
                </span>
            </div>
        </Fragment >

    )
}
