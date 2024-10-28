import React, { useState, useEffect, useRef } from "react";
import {
    Wrapper,
    MainBody,
    CloseButton,
    Heading,
    SearchField,
    ButtonContainer,
    OptionContainer,
    SearchContainer,
    Option,
    PictureContainer,
    DisplayPicture,
    Name,
    Email,
    Contact,
    ContactField,
    Remove
} from './addChatModal.styles'
import { Button } from "../messages.styles";

const contactData = [
    {
        name: 'Alice Doe',
        email: 'Alice.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Bob Doe',
        email: 'Bob.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Charlie Doe',
        email: 'Charlie.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'David Doe',
        email: 'David.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Eva Doe',
        email: 'Eva.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Frank Doe',
        email: 'Frank.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Grace Doe',
        email: 'Grace.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Henry Doe',
        email: 'Henry.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Ivy Doe',
        email: 'Ivy.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Jack Doe',
        email: 'Jack.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Karen Doe',
        email: 'Karen.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Leo Doe',
        email: 'Leo.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Mia Doe',
        email: 'Mia.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Nathan Doe',
        email: 'Nathan.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Olivia Doe',
        email: 'Olivia.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Paul Doe',
        email: 'Paul.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Quinn Doe',
        email: 'Quinn.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Rachel Doe',
        email: 'Rachel.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Sam Doe',
        email: 'Sam.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Tina Doe',
        email: 'Tina.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Ulysses Doe',
        email: 'Ulysses.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Victoria Doe',
        email: 'Victoria.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Walter Doe',
        email: 'Walter.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Xena Doe',
        email: 'Xena.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Yasmine Doe',
        email: 'Yasmine.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    },
    {
        name: 'Zac Doe',
        email: 'Zac.Doe@gmail.com',
        displayPicture: '/static/img7.jpeg'
    }
]

const AddChat = ({ closeModal, addNewChat }) => {
    const [filter, setFilter] = useState('')
    const [results, setResults] = useState([])
    const [selected, setSelected] = useState(-1)
    const [contact, setContact] = useState(null)

    const optionContainerRef = useRef(null);
    useEffect(() => {
        const filterResults = contactData.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        setResults(filterResults)
        if (filter.length === 0) {
            setSelected(-1)
            setContact(null)
        }
    }, [filter])

    useEffect(() => {
        setSelected(0)
    }, [results])

    const handleOptionClick = (id) => {
        if (selected === id) {
            setContact(results[id])
        }
        setSelected(id)
    }

    const handleClearContent = () => {
        setContact(null)
        setFilter('')
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelected((prevSelected) => Math.max(prevSelected - 1, 0));
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelected((prevSelected) => Math.min(prevSelected + 1, results.length - 1));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selected !== -1) {
                    handleOptionClick(selected);
                }
            }
        };

        // Scroll the selected option into view
        const selectedOption = document.getElementById(`option-${selected}`);
        if (selectedOption) {
            selectedOption.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [results, selected]);


    return (
        <Wrapper onClick={closeModal}>
            <MainBody onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal} />
                <Heading>Add Chat</Heading>
                <SearchContainer>
                    {
                        (contact)
                            ?
                            <ContactField onClick={handleClearContent} >
                                <Contact>
                                    {contact.email}
                                    <Remove />
                                </Contact>
                            </ContactField>
                            :
                            <SearchField
                                type='text'
                                placeholder='Type or search name'
                                onChange={(e) => setFilter(e.target.value)}
                                value={filter}
                            />
                    }
                    {
                        filter.length >= 1
                        &&
                        !contact
                        && (
                            <OptionContainer ref={optionContainerRef} tabIndex="0">
                                {
                                    results.length > 0
                                        ? (
                                            results.map((option, index) => (
                                                <Option
                                                    key={index}
                                                    $selected={index === selected}
                                                    onClick={() => handleOptionClick(index)}
                                                    id={`option-${index}`}
                                                >
                                                    <PictureContainer>
                                                        <DisplayPicture src={option.displayPicture} name={option.name} />
                                                    </PictureContainer>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <Name>{option.name}</Name>
                                                        <Email>{option.email}</Email>
                                                    </div>
                                                </Option>
                                            ))
                                        )
                                        :
                                        <Name>No User Found</Name>
                                }
                            </OptionContainer>
                        )
                    }
                </SearchContainer>
                <ButtonContainer>
                    <Button type='Secondary' onClick={closeModal}>CANCEL</Button>
                    {
                        (contact)
                            ?
                            <Button type='Primary' onClick={() => addNewChat(contact)}>START CHAT</Button>
                            :
                            <Button disabled type='Disabled'>START CHAT</Button>
                    }
                </ButtonContainer>
            </MainBody>
        </Wrapper>
    )
}

export default AddChat;