import './Products.css';
import {Link, Outlet} from 'react-router'

export default function Products() {

    return(
        <>
            <h2>PRODOTTI</h2>


            <ul>
                <li>
                    <Link to='onsale'>IN OFFERTA</Link>
                </li>

                <li>
                    <Link to='notavailable'>NON DISPONIBILI</Link>
                </li>
            </ul>

            <Outlet/>
        </>
    );
}