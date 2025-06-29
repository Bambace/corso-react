import { Outlet } from 'react-router';
import './NotAvailProducts.css';

export default function NotAvailProducts() {

    return(
        <>
            <h2>PRODOTTI NON DISPONIBILI! 😿</h2>
       
         <Outlet/>
        </>
    );
}