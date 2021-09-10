import React , { useEffect,useState }  from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import { UserCard } from '../../../../../components/TradePeople/TradepeopleView'
import Link from "next/link"
import { UserAction } from '../../../../../redux/auth/action'


export const activity = (props) => {
    const { query } = useRouter();   
    
    const Id = query.id
    console.log(Id)
    const dispatch = useDispatch();
    const reState = useSelector(state => state);
    const { error , userData } = reState.authUser;
    const [user_profileData, setUser_profileData] = useState([]); 
      
    useEffect(() => {
        dispatch(UserAction(Id))
        setUser_profileData(typeof userData != 'undefined' ? userData : null)   

    }, [setUser_profileData,userData.length != 0])
    
    return (
        <>
            <section className="content login-body font" style={ { marginTop: "5rem" } }>
                <Container>
                    <p className="h2 font">
                    <i class="fa fa-chevron-circle-left font" aria-hidden="true"></i>
                        <Link href={ `/secure/customers/${Id}` } className="back black">
                            Back to Profile
                        </Link>
                    </p>                   
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
                    </div>

                    <div className="contained shallow mob-not-shallow font">
                        { query.type == "recommendations" ?
                            <>
                                <h2>Positive Recommendations Received</h2>
                                <div className="box white">
                                    <div className="contained shallow tcenter">
                                        <p className="shallow">
                                            <strong>{user_profileData.name}</strong> has not left any{ " " }
                                            <span className="text-green">positive recommendations</span>.
                                        </p>
                                    </div>
                                </div>
                            </>
                            : <>
                                <h2>Positive Recommendations Received</h2>
                                <div className="box white">
                                    <div className="contained shallow tcenter">
                                        <p className="shallow">
                                            <strong>{user_profileData.name}</strong> has not left any{ " " }
                                            <span className="text-red">negative recommendations</span>.
                                        </p>
                                    </div>
                                </div>
                            </> }


                    </div>
                </Container>

            </section>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(activity)
