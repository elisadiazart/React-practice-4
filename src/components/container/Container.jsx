import Title from "../title/Title";
import Text from "../text/Text";
import Button from "../button/Button";
import IconoContainer from "../iconContainer/IconoContainer";
import { StyledContainer } from "./styles";

const Container = ({title, text, button, icon, color, colorButton}) => {
	return <StyledContainer color={color}>
	<IconoContainer icon={icon}/>
	<Title text={title}/>
    <Text text={text}/>
    <Button text={button} color={colorButton}/>
	</StyledContainer>
};

export default Container