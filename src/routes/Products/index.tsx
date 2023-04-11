
import { Outlet } from "react-router-dom";
import NavProducts from "../../components/Nav-products";
import { getComputer } from "../../Data/data";
import { Link } from "react-router-dom";
import Computer from "./Computer";


export default function Products() {

    const computer = getComputer();
    return (

        <main>
         <NavProducts/>
         <Computer/>
        </main>
    );

}