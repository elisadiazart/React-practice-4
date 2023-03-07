import { cardsInfo } from "../../constants/cards-info";
import Container from "../container/Container";
import { StyledCards } from "./styles";

const Cards = () => {
	return <StyledCards>
		{
			cardsInfo.map(card=>
			<Container key={card.id}{...card}/>
			)
		}
    </StyledCards> 
};

export default Cards