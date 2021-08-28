import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import ResetPassword from '../components/login/ResetPassword'
import { useUrlSearchParams } from 'use-url-search-params';
import ChangePassword from '../components/login/ChangePassword';
import { verifyUniqueKey } from '../redux/auth/action';

import router from 'next/router';
import ErrorPage from '../components/others/ErrorPage';


export default function reset_password(props){

    const userKeyverify = useSelector(state => state);
    const dispatch = useDispatch();
    const [params, setParams] = useUrlSearchParams()

    useEffect(() => {
        dispatch(verifyUniqueKey())
    }, [])
    // console.log(birds)
    return (
        <React.StrictMode>
        <div style={{marginTop : "5rem"}}>
            {
                typeof params.uniqueKey != 'undefined' ?
                    userKeyverify.authUser.key == true ?
                        <ChangePassword />
                        : <ErrorPage />
                    : <ResetPassword /> }

        </div>
        </React.StrictMode>
    )
}