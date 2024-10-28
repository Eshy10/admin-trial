import React, { useState } from 'react';
import {
    TagsWrapper,
    TagsInfoContainer,
    TagsDescription,
    TagContainer,
    GenreTag,
} from "./itemSelector.styles";

export default function ItemSelector() {

    const genres = ['#Pop', '#Rock', '#Hip-hop', '#R&B', '#Jazz', '#Blues', '#Classical', '#Electronic', '#Dance', '#Reggae', '#Punk', '#Metal', '#Alternative', '#Folk', '#Funk', '#Soul', '#Gospel', '#Indie', '#Ska', '#Techno', '#House', '#Dubstep', '#Latin', '#Slasa', '#World', '#Ambient',  '#Trap', '#Others'];

    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreToggle = (genre) => {
        if (selectedGenres.includes(genre)) {
        setSelectedGenres(selectedGenres.filter((selected) => selected !== genre));
        } else {
        setSelectedGenres([...selectedGenres, genre]);
        }
    };
    return (
        <TagsInfoContainer>
                <TagsDescription>Select Genre</TagsDescription>
                <TagsWrapper>
                {genres.map((genre, index) => {
                    if (index % 6 === 0) {
                        return (
                        <TagContainer key={index}>
                            {genres.slice(index, index + 6).map((rowGenre) => (
                            <GenreTag
                                key={rowGenre}
                                tagsbg={selectedGenres.includes(rowGenre)}
                                tagscolor={selectedGenres.includes(rowGenre)}
                                onClick={() => handleGenreToggle(rowGenre)}
                            >
                                {rowGenre}
                            </GenreTag>
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