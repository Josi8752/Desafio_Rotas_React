import { Link } from 'react-router-dom';
import './styles.css';
type Props = {
    title: string;
}

export default function TitleMainPages({ title }: Props) {

    return (
        <Link to='/home'><h1 className='container title-pages-main'>{title}</h1></Link> 

    );
}