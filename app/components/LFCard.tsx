import '../styles/style.scss';
import Image, {StaticImageData} from 'next/image';
import React from 'react';

export interface lfProps {
    name: string;
    imgPath: StaticImageData;
}

export interface lfPropsList {
    items: lfProps[];
}

// FUTURE WORK: come back and make this more customizable?
const LFCard: React.FC<lfPropsList> = ({items}) => {
    const listItems = items.map(item => 
        <div style={{display: 'flex', flexDirection: 'column', padding: '0'}}>
            <Image key={item.name} src={item.imgPath} className = 'lfCard' alt={item.name}/>
            <p style={{margin: '0', textAlign: 'center'}}>{item.name}</p>
        </div>);
    return (
        <div className='langsandframeworks'>
            {listItems}
        </div>
    )
}

export default LFCard;