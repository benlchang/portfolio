import '../styles/colors-and-fonts.scss';

export default function Footer() {
    return (
        <div className='footer' style={{
            width: '100vw', 
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px 0',
            color: '$primary'
        }}>
            © Copyright Benjamin Chang 2024
        </div>
    )
}