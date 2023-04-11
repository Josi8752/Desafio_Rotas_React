

import './styles.css';



type Props ={
    text: string;
}
export default function  DescriptionPage({text}: Props) {
    return (
       
        <div className='text container'>
            {text}
        </div>
    
    );
}