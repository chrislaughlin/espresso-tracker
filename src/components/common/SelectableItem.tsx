import styled from 'styled-components';

interface StyledSelectableItemProps {
    selected:boolean,
    width?:string
}

const StyledSelectableItem = styled.div`
    width: ${props => props.width || '45%;'}
    height: 20px;
    border: 3px solid ${(props: StyledSelectableItemProps) => props.selected ? '#1A3344;' : '#782e264f;'};
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export default StyledSelectableItem;

