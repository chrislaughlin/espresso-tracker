import React, {FunctionComponent, ReactChildren, ReactNode} from 'react';
import styled from 'styled-components';
import StyledEntryLabel from "./EntryLabel";

const StyledEntrySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const StyledEntrySectionSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
`;

interface Props {
    icon: ReactNode,
    title: string,
    children: ReactNode
}

const EntrySection: FunctionComponent<Props> = ({icon, title, children}) => {
    return (
        <StyledEntrySection>
            {icon}
            <StyledEntryLabel>
                {title}
            </StyledEntryLabel>
            <StyledEntrySectionSection>
                {children}
            </StyledEntrySectionSection>
        </StyledEntrySection>
    );
};


export default EntrySection;

