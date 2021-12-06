import React from 'react'
import { ContainerHome } from '../styles/Home.Style'
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from 'react';
import { db } from '../firebase/firebase';

const Home = () => {

const getData = async ()=>{

    const docRef = collection( db, "productos");
    const getData = await getDocs(docRef);
    console.log(getData)
}

useEffect(() => {
    getData();
}, [])


    return (
        <ContainerHome>
            home
        </ContainerHome>
    )
}

export default Home
