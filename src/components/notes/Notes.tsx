import React, {FunctionComponent, useRef } from 'react';
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

const StyledTagInput = styled.input`
    background: transparent;
    border: none;
    font-size: 15px;
    color: #9a8275;
    :focus {
      border: none;
      outline-width: 0;
    }
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
    const tagInputRef = useRef<HTMLInputElement>(null);
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
            <StyledTagsContainer
                onClick={() => tagInputRef && tagInputRef.current && tagInputRef.current.focus()}
            >
                {tags.map(tag => {
                    return <Tag text={tag} onRemove={() => {}}/>
                })}
                <StyledTagInput
                    ref={tagInputRef as any}
                />
            </StyledTagsContainer>
        </EntrySection>
    );
};


export default Notes;

