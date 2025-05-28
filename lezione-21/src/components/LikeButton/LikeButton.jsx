import { useContext } from 'react';
import './LikeButton.css';
import { LikeContext } from '../../context/Context';

export default function LikeButton({}) {
const data = useContext(LikeContext)
    return(
        <>
           <button>💗 ({data})</button>
        </>
    );
} 