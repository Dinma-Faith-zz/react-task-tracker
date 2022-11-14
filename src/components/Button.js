import PropTypes from 'prop-types';

const Button = ({ color, text }) => (
  <div>
    <button style={{ backgroundColor: color }} className="btn" type="submit">{text}</button>
  </div>
);

Button.defaultProps = {
  text: '',
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
