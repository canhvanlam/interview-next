import React from "react";
import classNames from 'classnames';
const SortBy =({
    onChange = () => {}, 
    data = [], 
}) => {
    const [isActiveSort, setIsActiveSort] = React.useState(false)
    return(
        <>
            {data?.length > 0 && (
                <>
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
                            {data?.map((item, index) => {
                                return (
                                    <li key={index}>
                                    <a
                                        onClick={() => {
                                            onChange(item);
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
            )}
        </>
    )
    
}

export default SortBy;