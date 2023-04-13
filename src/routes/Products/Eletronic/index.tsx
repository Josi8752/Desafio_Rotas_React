


import { Link } from "react-router-dom";
import { getEletronic } from "../../../Data/data-Eletronic";



export default function Eletronic() {

    const eletronics = getEletronic();

    return (

        <main>
            <div>
                {eletronics.map((eletronic) => (
                    <Link

                        to={`/eletronics/${eletronic.nameEletronic}`}
                        key={eletronic.nameEletronic}
                    >
                        {eletronic.nameEletronic}
                    </Link>
                ))}
            </div>

        </main>

    );

}