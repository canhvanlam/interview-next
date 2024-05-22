'use client'
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import React from "react";
import ROUTES from '../../constants/routes'
import LoadingOverlay from 'react-loading-overlay-nextgen';
import {AuthApi} from '../../apis/identity/auth'
import { ToastContainer, toast } from "react-toastify";
import {useDispatch, useSelector} from 'react-redux';
import queryString from 'query-string';
import {userLoggedIn} from '../../redux/actions/user.actions';
import { useRouter } from 'next/navigation'
import { useMutation} from "@tanstack/react-query";
import cookies from 'js-cookie';
const Login  = () => {
    const [viewPassword, setViewPassword] = React.useState(false);
    const [formData, setFormData] = React.useState({email:'', password:''});
    const [validated, setValidated] = React.useState(false);
    const [isDisabled, setisDisabled] = React.useState(true)
    const navigate = useRouter();
    const dispatch = useDispatch();
    const statusLoading = useSelector((state) => state.global.status);
    const onChangeInput = (event) => {
        let target = event.target;
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            submitForm()
        }
        setValidated(true);
      };
    const mutationLogin = useMutation({
        mutationFn: AuthApi.login
    });
    const submitForm =  async () => {
        mutationLogin.mutate(
            queryString.stringify(formData),
            {
                onSuccess : async(data) => {
                    if(data?.length > 0) {
                        dispatch(userLoggedIn(data[0]));
                        toast.success("Login up success.", {
                            autoClose: 2000,
                            position: "top-center",
                        });
                        navigate.push('/');
                    }
                    else {
                        toast.error("Email or password is incorrect.", {
                            autoClose: 2000,
                            position: "top-center",
                        });
                    }
                },
                onError: (error) => {
                    toast.error("Login fail.", {
                        autoClose: 2000,
                        position: "top-center",
                    });
                }
            }
        )
    }
    return (
        <LoadingOverlay active={statusLoading} spinner>
            <div className="wrapper-page">
                <div className="container-fluid p-0">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center mt-4">
                                <div className="mb-3">
                                    <img src="/images/logo.webp" height="30" className="logo-dark mx-auto" alt="logo" />
                                </div>
                            </div>
                            <h4 className="text-muted text-center font-size-18"><b>Welcome back!</b></h4>
                            <div className="p-3">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group as={Col} md="12" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email" 
                                        type="email" 
                                        value={formData.email}
                                        placeholder="Your email" 
                                        required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                        onChange={onChangeInput}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Enter a valid email address
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3 position-relative">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        name='password'
                                        value={formData.password}
                                        type={viewPassword ? "text" : "password"} 
                                        placeholder="Your password" required 
                                        onChange={onChangeInput}
                                        />
                                    <div className='eye-icon' onClick={() => setViewPassword(!viewPassword)}>
                                        <i className= {viewPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                    </div>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter password
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="form-group mb-3 text-center row mt-3 pt-1">
                                    <div className="col-12">
                                        <button
                                        className="btn btn-info w-100 waves-effect waves-light text-white" type="submit" >Log In</button>
                                    </div>
                                </div>
                            </Form>
                            <div className="form-group mb-3 text-center row mt-3 pt-1">
                                <div className="col-12">
                                    <div className="text-muted">
                                        Don’t have an account? 
                                        <span className='custom-text-sign'>
                                            <Link href={ROUTES.SIGNUP}>
                                                Sign Up
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <ToastContainer />
        </LoadingOverlay>
    )
}

export default Login;