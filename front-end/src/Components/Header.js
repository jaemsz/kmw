import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Strength & Conditioning'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
