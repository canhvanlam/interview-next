'use client'
import React from "react";
import classNames from 'classnames';
const sortOptions = [
    {
        id: 1, 
        value:'Posting date',
        key: "createdAt"
    },
    {
        id: 2, 
        value:' Number of comments',
        key: "count"
    }
]
const SearchText  = ({
    placeholder='Search...', 
    onChange = () => {}, 
    value = '',
    submit,
    onChangeSort= () => {},
}) => {
    const [isActiveSort, setIsActiveSort] = React.useState(false)
    return (
        <>
           <div className="app-search d-none d-lg-block">
            <div className="position-relative">
                <div className="input-group">
                    <input
                            type="text" 
                            className="form-control" 
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    submit();
                                }
                            }}
                    />
                    <span className="ri-search-line"></span>
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={submit}><i className="ri-search-line"></i></button>
                    </div>
                </div>
            </div>
            </div>
            <div className="dropdown ms-3 pt-4 d-none d-lg-block">
                <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span>{'Sort by'}</span>
                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                </a>
                <ul className="dropdown-menu">
                {sortOptions.map((item, index) => {
                    return (
                        <li key={index}>
                        <a
                            onClick={() => {
                                onChangeSort(item);
                                setIsActiveSort(item.id)
                            }}
                            className={classNames('dropdown-item ', {
                            active: item.id == isActiveSort,
                            })}
                        >
                            {item.value}
                        </a>
                        </li>
                    );
                    })}
                </ul>
            </div>
        </>
    )
}
export default SearchText;