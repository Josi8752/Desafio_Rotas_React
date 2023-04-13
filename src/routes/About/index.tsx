import { Outlet } from "react-router-dom";
import AboutWe from "../../components/AboutWe";
import { Link } from "react-router-dom";

export default function About() {

    return (
        <>
        <AboutWe />
           
            <Outlet />
        </>
    );
}