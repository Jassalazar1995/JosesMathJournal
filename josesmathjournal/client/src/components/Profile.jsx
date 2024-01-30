import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setProfile } from '../../userSlice';
import axios from 'axios'

const Profile = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.user.profile)
    useEffect(()=> {
        try {
            
        } catch (error) {
            
        }
    },[dispatch])

    return(
    <>
    
    </>
    )
}