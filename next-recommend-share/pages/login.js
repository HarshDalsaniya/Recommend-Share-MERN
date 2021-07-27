import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar/NavBar'
import Login from '../components/login/Login'



export default function Home() {
    return (
        <>
            <div>
                <NavBar />
                <Login />

            </div>
        </>
    )
}
