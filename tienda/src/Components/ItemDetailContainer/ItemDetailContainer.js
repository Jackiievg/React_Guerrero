import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'productos', id);
    
        getDoc(queryDoc)
            .then((doc) => {
                if (doc.exists()) {
                    setItem({ id: doc.id, ...doc.data() });
                } else {
                    console.log('No existe el documento');
                }
            })
            .catch((error) => {
                console.log('Error obteniendo el documento:', error);
            });
    }, [id]);

    return (
        <div>
            <ItemDetail item={item}/>

        </div>
    )
}

export default ItemDetailContainer;