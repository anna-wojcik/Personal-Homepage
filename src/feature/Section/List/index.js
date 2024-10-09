import { StyledList, Item } from "./styled";

const List = ({ listOfData }) => (
    <StyledList>
        {listOfData.map((content, id) => (
            <Item key={id}>{content}</Item>
        ))}
    </StyledList>
);

export default List;