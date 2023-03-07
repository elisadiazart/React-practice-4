import { StyledButton } from "./styles"

const Button = ({text, color}) => {
    return <StyledButton color={color} >{text}</StyledButton>
}

export default Button