
import PropTpyes from 'prop-types';

export const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <button className="btn">
                Add
            </button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.PropTpyes = {
    title: PropTpyes.string.isRequired,
}

//CSS
//const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black',
//}

export default Header
