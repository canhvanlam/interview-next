'use client'
import React from 'react'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {userLoggedIn, userLoggedOut} from '../../redux/actions/user.actions';
import {useDispatch, useSelector} from 'react-redux';
import { AuthApi } from '../../apis/identity/auth';
import Filter from '../filter'
import FilterDropdown from '../filter/filterDropdown'
const Header = ({
    onChange,
    value,
    submit,
    onChangeSort,
}) => {
    const user = useSelector((state) => state.auth.user);
    const authToken = useSelector((state) => state.auth.authToken);
    const dispatch = useDispatch();
    const navigate = useRouter();
    console.log("authToken", authToken);
    React.useEffect(() => {
        const getUser =  async () => {
            await AuthApi.getUser(authToken).then((res) => {
                
                if(res){
                    dispatch(userLoggedIn(res));
                }
            });
        } 
        getUser();
      }, []);
    const handleLogOut = () => {
        dispatch(userLoggedOut());
        navigate.push('/login');
    }
    return (
        <>
            <div id="layout-wrapper">
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                <Link href={"/"}>
                                <div className="logo logo-dark">
                                    <span>
                                        <img src="/images/logo.webp" alt="logo-sm" height="22" />
                                    </span>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex">
                            {/*  */}
                            <Filter 
                                value={value}
                                onChange={onChange}
                                submit={submit}
                                onChangeSort={onChangeSort}
                            />
                            
                        </div>
                        <div className="d-flex">
                            <FilterDropdown 
                                value={value}
                                onChange={onChange}
                                submit={submit}
                            />
                            <div className="dropdown d-inline-block user-dropdown">
                                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="rounded-circle header-profile-user" src="/images/avatar-2.jpg"
                                        alt="" /> 
                                    <span className="d-none d-sm-inline-block ms-1">{user?.fullName}</span>
                                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a onClick={handleLogOut} className="dropdown-item text-danger"><i className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</a>
                                </div>
                            </div>            
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;