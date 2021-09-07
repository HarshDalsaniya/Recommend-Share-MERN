import React , { useEffect,useState }  from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Link from "next/link"
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import { UserCard } from '../../../../components/TradePeople/TradepeopleView'
import { UserAction } from '../../../../redux/auth/action'


export const customerProfile = (props) => {
    const { query } = useRouter();   
    const Id = query.id
    const dispatch = useDispatch();
    const reState = useSelector(state => state);
    const { error , userData } = reState.authUser;
    const [user_profileData, setUser_profileData] = useState([]); 
      
    useEffect(() => {
        dispatch(UserAction(Id))
        setUser_profileData(typeof userData != 'undefined' ? userData : null)   

    }, [setUser_profileData,userData.length != 0])
    


    return (
      <section className="content login-body" style={{marginTop:"5rem"}}>
          <Container>
             <h2>Customer Profile</h2>
                <div className="contained shallow">
                    <div className="box white">
                        <UserCard 
                            title={`${user_profileData.name}`}
                            title_href={'/secure/'}
                            details={ [
                                {
                                    option : 'Telephone:',
                                    value : user_profileData.telephone,
                                }, {
                                    option : 'Email Address : ',
                                    value :  user_profileData.email,
                                }, {
                                     option :'Post Code :',
                                     value : user_profileData.address_postcode,
                                }, {
                                    option : 'Date Joined: ',
                                    value : typeof user_profileData.established != 'undefined' && null ? user_profileData.established.slice(0, 4) : '',
                                }

                            ] }
                            IconOption = {[                              
                                {
                                    title:'Identify confirmed:',
                                    value:user_profileData.verified
                                }
                            ]}
                            
                        />     
                        

                    </div>
                    <div className="recieved-box">
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <h3 className="recieved-heading">Recieved</h3>
                                <div className="row">
                                    <div className="col-md-6 text-center mb-3 mb-md-0 text-md-start">
                                        <Link href={`/secure/customers/${Id}/activity?type=recommendations`}>
                                        <a>
                                            <div className="recieved-number-1">0</div>
                                            <div className="recieved-text">Positive Recommendation</div>
                                        </a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 text-center text-md-start">
                                        <Link href={`/secure/customers/${Id}/activity?type=warnings`}>
                                        <a>
                                            <div className="recieved-number-2">0</div>
                                            <div className="recieved-text">Negative Recommendation</div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="recieved-heading">Given</h3>
                                <div className="row">
                                    <div className="col-md-6 text-center mb-3 mb-md-0 text-md-start">
                                        <Link href={`/secure/customers/${Id}/activity/given?type=recommendations`}>
                                        <a>
                                            <div className="recieved-number-1">0</div>
                                            <div className="recieved-text">Positive Recommendation</div>
                                        </a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 text-center text-md-start">
                                        <Link href={`/secure/customers/${Id}/activity/given?type=warnings`}>
                                        <a>
                                            <div className="recieved-number-2">0</div>
                                            <div className="recieved-text">Negative Recommendation</div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
          </Container>

      </section>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(customerProfile)
