import { Link } from 'react-router-dom';
import TitleMainPages from '../../components/TitleMainPages';

export default function NotFound() {


    return (

        <div>

            <Link to='/home'><TitleMainPages title='Não encontrado' /></Link>

        </div>

    );
}