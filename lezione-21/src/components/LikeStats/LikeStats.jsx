import { useContext } from 'react';
import './LikeStats.css';
import { LikeContext } from '../../context/Context';

export default function LikeStats() {
const data= useContext(LikeContext)
    return(
        <>
            <h3>like totali: {data}</h3>
        </>
    );
} 