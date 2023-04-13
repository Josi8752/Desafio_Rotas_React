

import './styles.css';



type Props ={
    text: string;
}
export default function  DescriptionPage({text}: Props) {
    return (
       
        <div className='text container'>
           <h1> {text}</h1>
        </div>
    
    );
}