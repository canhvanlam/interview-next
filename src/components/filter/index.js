'use client'
import React from "react";
const SearchText  = ({
    placeholder='Search...', 
    onChange = () => {}, 
    value = '',
    submit,
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
        </>
    )
}
export default SearchText;