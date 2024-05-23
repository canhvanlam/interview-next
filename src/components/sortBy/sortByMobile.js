import React from "react";
import classNames from 'classnames';
const SortByMobile =({
    onChange = () => {}, 
    data = [], 
    isMobile = false
}) => {
    const [isActiveSort, setIsActiveSort] = React.useState(false)
    return(
        <>
            {data?.length > 0 && (
                <>
                    <div className="dropdown d-inline-block d-lg-none ">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-filter-3-fill"></i>
                        </button>
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

export default SortByMobile;