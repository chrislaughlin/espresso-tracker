import React, {FunctionComponent} from 'react';
import EntrySection from "../common/EntrySection";
import styled from 'styled-components';

interface Props {
    onNoteAdded: Function
}

const StyledTagsContainer = styled.div`
    background-color: #ECE2DA;
    width: 90%;
    border-radius: 5px;
    min-height: 70px;
    padding: 10px;
`;

const StyledTag = styled.span`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 3px;
    margin-right: 5px;
`;

const StyledRemoveTag = styled.span`
  padding-left: 10px;
  padding-right: 5px;
`;

interface TagProps {
    text: string,
    onRemove: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const Tag: FunctionComponent<TagProps> = ({text, onRemove}) => {
    return (
        <StyledTag>
            <span>
                {text}
            </span>
            <StyledRemoveTag
                onClick={onRemove}
            >
                x
            </StyledRemoveTag>
        </StyledTag>
    )
};

const Notes: FunctionComponent<Props> = () => {
    const tags = [
        "3fe",
        "pact",
        "bitter"
    ];

    return (
        <EntrySection
            title="notes / tags :"
            additionalChildStyles={
                `
                flex-direction: column;
                align-items: center;
                `
            }
            subTitle={`separate tags with ","`}
        >
            <StyledTagsContainer>
                {tags.map(tag => {
                    return <Tag text={tag} onRemove={() => {}}/>
                })}
            </StyledTagsContainer>
        </EntrySection>
    );
};


export default Notes;

