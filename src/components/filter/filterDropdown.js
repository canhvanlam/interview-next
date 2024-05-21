
import React from "react";
const SearchDropdown = ({
    placeholder='Search...', 
    onChange = () => {}, 
    value = '',
    submit
}) =>{
    return(
        <>
           <div className="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="ri-search-line"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown">
                    <div className="p-3">
                        <div className="mb-3 m-0">
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
                                <div className="input-group-append">
                                    <button className="btn btn-primary" onClick={submit}><i className="ri-search-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchDropdown;