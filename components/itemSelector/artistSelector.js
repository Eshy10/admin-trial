import React, { useState } from 'react';
import {
    TagsWrapper,
    TagsInfoContainer,
    TagsDescription,
    TagContainer,
    ArtistTag,
} from "./artistSelector.styles";

export default function ArtistSelector() {

    const artists = ['#Singer', '#Songwriter', '##Producer', '#Rapper', '#DJ', '#Mixing Engineer', '#Musician', '#Master Engineer', '#Brand', '#Other'];

    const [selectedArtists, setSelectedArtists] = useState([]);

    const handleArtistToggle = (artist) => {
        if (selectedArtists.includes(artist)) {
            setSelectedArtists(selectedArtists.filter((selected) => selected !== artist));
        } else {
            if (selectedArtists.length < 3) {
                setSelectedArtists([...selectedArtists, artist]);
              } else {
                alert('You can only select a maximum of 3 artists.');
              }
        }
    };
    return (
        <TagsInfoContainer>
                <TagsDescription>Select Artist Tags (Maximum of 3)</TagsDescription>
                <TagsWrapper>
                {artists.map((artist, index) => {
                    if (index % 5 === 0) {
                        return (
                        <TagContainer key={index}>
                            {artists.slice(index, index + 5).map((rowArtist) => (
                            <ArtistTag
                                key={rowArtist}
                                tagsbg={selectedArtists.includes(rowArtist)}
                                tagscolor={selectedArtists.includes(rowArtist)}
                                onClick={() => handleArtistToggle(rowArtist)}
                            >
                                {rowArtist}
                            </ArtistTag>
                            ))}
                        </TagContainer>
                        );
                    }
                    return null;
                })}
                </TagsWrapper>
        </TagsInfoContainer>
    )
}