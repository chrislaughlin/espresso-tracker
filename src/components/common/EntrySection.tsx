import React, {FunctionComponent, ReactChildren, ReactNode} from 'react';
import styled from 'styled-components';
import StyledEntryLabel from "./EntryLabel";

const StyledEntrySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

interface StyledEntrySectionSectionProps {
    additionalChildStyles?: string
}

const StyledEntrySectionSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    color: #782e264f;
    ${(props:StyledEntrySectionSectionProps) => props.additionalChildStyles || ''}
`;

interface Props {
    icon: ReactNode,
    title: string,
    children: ReactNode,
    additionalChildStyles?: string
}

const EntrySection: FunctionComponent<Props> = ({icon, title, children, additionalChildStyles}) => {
    return (
        <StyledEntrySection>
            {icon}
            <StyledEntryLabel>
                {title}
            </StyledEntryLabel>
            <StyledEntrySectionSection
                additionalChildStyles={additionalChildStyles}
            >
                {children}
            </StyledEntrySectionSection>
        </StyledEntrySection>
    );
};


export default EntrySection;

