import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import ResetPassword from '../components/login/ResetPassword'
import { useUrlSearchParams } from 'use-url-search-params';
import { ChangePassword } from '../components/login/ChangePassword';
import { verifyUniqueKey } from '../redux/auth/action';

import router from 'next/router';
import ErrorPage from '../components/others/ErrorPage';


export const reset_password = (props) => {

    const userKeyverify = useSelector(state => state);
    const dispatch = useDispatch();
    const [params, setParams] = useUrlSearchParams()

    useEffect(() => {
        dispatch(verifyUniqueKey())
    }, [])
    // console.log(birds)
    return (
        <div style={{marginTop : "5rem"}}>
            {
                typeof params.uniqueKey != 'undefined' ?
                    userKeyverify.authUser.key == true ?
                        <ChangePassword />
                        : <ErrorPage />
                    : <ResetPassword /> }

        </div>
    )
}

const mapStateToProps = (authUser) => {
    const { loding, key, error } = authUser
    return { loding, key, error };
}
const mapDispatchToProps = {
    verifyUniqueKeyAction: verifyUniqueKey
}

export default connect(mapStateToProps, mapDispatchToProps)(reset_password)
