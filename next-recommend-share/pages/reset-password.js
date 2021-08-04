import React from 'react'
import { connect } from 'react-redux'
import ResetPassword from '../components/login/ResetPassword'
import { useUrlSearchParams } from 'use-url-search-params';
import { ChangePassword } from '../components/login/ChangePassword';

export const reset_password = (props) => {
    const [params, setParams] = useUrlSearchParams()

    console.log(typeof params == "uniqueKey")

    return (
        <div> 
        {typeof params.uniqueKey != 'undefined' ?    
            <ChangePassword />                
            :  <ResetPassword />
        }     
        
      
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(reset_password)
