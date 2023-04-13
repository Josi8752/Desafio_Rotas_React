

import { NavLink, useParams } from "react-router-dom";
import { getComputer } from "../../../Data/data-Computer";
import { Link } from "react-router-dom";
import './styles.css';
import { getEletronic } from "../../../Data/data-Eletronic";
export default function Computer() {
    const computers = getComputer();
    return (

        <main className="container-items-products">
            <div className="computers-items container">

                {computers.map((computer) => (
                    <Link to={`/products/${computer.name}`} key={computer.name}>
                        <div className="mb20">
                            {computer.name}
                        </div>

                    </Link>
                ))}

                
            </div>

        </main>
    );

}