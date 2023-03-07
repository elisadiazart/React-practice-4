import Icon from "../icon/Icon"
import { StyledIconContainer } from "./styles"

const IconContainer = ({icon}) => {
    return <StyledIconContainer>
    <Icon icon = {icon}/>
    </StyledIconContainer>
}

export default IconContainer