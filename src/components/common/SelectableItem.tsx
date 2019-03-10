import styled from 'styled-components';

interface StyledSelectableItemProps {
    selected:boolean,
    width?:string
}

interface SelectedColorProps {
    selected: boolean
}

const getSelectedColor = (props: SelectedColorProps):string => props.selected ? '#FFF;' : '#782e264f;';

const StyledSelectableItem = styled.div`
    width: ${(props:StyledSelectableItemProps) => props.width || '45%;'}
    height: 20px;
    border: 3px solid ${getSelectedColor};
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    color: ${getSelectedColor};
`;

export default StyledSelectableItem;

