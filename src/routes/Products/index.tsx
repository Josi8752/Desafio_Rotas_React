
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import NavProducts from "../../components/Nav-products";



export default function Products() {

    return (
        <>
            <main>
                <NavProducts />

                <Outlet />
            </main>
        </>
    );

}