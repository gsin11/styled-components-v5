import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const LargeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
}

const Button = styled.button`
  color: white;
  background: ${(props) => props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;
  ${LargeStyles};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool,
};

export { Button };