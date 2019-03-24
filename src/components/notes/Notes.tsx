import React, {FunctionComponent, useRef, useState, useEffect } from 'react';
import EntrySection from "../common/EntrySection";
import styled from 'styled-components';

interface Props {
    tags: Array<string>,
    onTagsChanged: Function
}

const StyledTagsContainer = styled.div`
    background-color: #ECE2DA;
    width: 90%;
    border-radius: 5px;
    min-height: 70px;
    padding: 10px;
`;

const StyledTag = styled.span`
    display: inline-block;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 3px;
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
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
    text-decoration: underline;
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

const Notes: FunctionComponent<Props> = ({
    tags,
    onTagsChanged
}) => {
    const [tagText, setTagText] = useState<string>('');
    const tagInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (tagText.includes(',')) {
            onTagsChanged(
                tags.concat(tagText.replace(',', ''))
            );
            setTagText('');
        }
    }, [tagText]);

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
                {tags.map((tag, index) => {
                    return <Tag
                        key={index}
                        text={tag}
                        onRemove={() => {
                            onTagsChanged([
                                ...tags.slice(0, index),
                                ...tags.slice(index + 1)
                            ]);
                        }}
                    />
                })}
                <StyledTagInput
                    ref={tagInputRef as any}
                    onChange={(evt) => setTagText(evt.target.value)}
                    value={tagText}
                    onKeyUp={evt => {
                        if (evt.key == 'Enter') {
                            onTagsChanged(
                                tags.concat(tagText.replace(',', ''))
                            );
                            setTagText('');
                        }
                    }}
                />
            </StyledTagsContainer>
        </EntrySection>
    );
};


export default Notes;

