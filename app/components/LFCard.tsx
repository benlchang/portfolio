import '../styles/style.scss';

const langsandframeworks = [
    {name: 'Python', imgPath: 'python3.jpg'}, 
    {name: 'Javascript', imgPath: 'js.jpg'},
    {name: 'Typescript', imgPath: 'ts.jpg'},
    {name: 'HTML', imgPath: 'HTML.jpg'},
    {name: 'CSS', imgPath: 'CSS.jpg'},
    {name: 'Java', imgPath: 'java.jpg'},
    {name: 'SQL', imgPath: 'sql.jpg'},
    {name: 'React', imgPath: 'react.jpg'},
    {name: 'Next.js', imgPath: 'nextjs.jpg'}
]

const LFCard = () => {
    const listItems = langsandframeworks.map(item => 
        <div key={item.name} className = {`${item.name} card`}>
            <img src={`../images/langsandframeworks/${item.imgPath}`}/>
        </div>);
    return (
        <div className='langsandframeworks'>
            {listItems}
        </div>
    )
}

export default LFCard;