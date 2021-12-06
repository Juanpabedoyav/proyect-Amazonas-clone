import React from 'react'
import { ContainerHome } from '../styles/Home.Style'
import { useEffect } from 'react';
import { getData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
const state = useSelector(state => state.getData)
 const dispatch = useDispatch()

useEffect(() => {

dispatch(getData())
}, [])






    return (
        <ContainerHome>


        </ContainerHome>
    )


}



  

export default Home
