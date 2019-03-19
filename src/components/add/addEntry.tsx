import React, { FunctionComponent, MouseEvent} from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
    addNewEntry: (e: MouseEvent<HTMLElement>) => void;
}

const StyledAddEntryContainer = styled.div`
    margin-bottom: 20px;
`;

const StyledAddEntry = styled.div`
    background-color: #ede4d8;
    border-radius: 68px;
    margin: 0 auto;
`;

const AddEntry: FunctionComponent<Props> = ({ addNewEntry }) => {
    return (
        <StyledAddEntryContainer>
            <StyledAddEntry
                onClick={addNewEntry}
            >
                <FaPlus
                    size="70px"
                    color="#9A8275"
                />
            </StyledAddEntry>
        </StyledAddEntryContainer>
    );
};


export default AddEntry;

