import React from 'react'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const queryDb = getFirestore();
        const querycollection = collection(queryDb, 'productos');
        if(id){
        const Filterquery = query(querycollection, where('categoryId', '==', id));
        getDocs(Filterquery).then((res) => setItem(res.docs.map((p)=> ({id: p.id, ...p.data()}))));
        }else{
            getDocs(querycollection).then((res)=> setItem(res.docs.map((p)=> ({id: p.id, ...p.data()}))));
        }

    }, [id]) 
    return (
        <div className="container">
            <div className='row'>
                <ItemList item={item}/>
            </div>

        </div> 
    )
}

export default ItemListContainer;