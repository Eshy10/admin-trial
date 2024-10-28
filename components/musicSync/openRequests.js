import React from "react";

import {
    Container,
    CardWrapper,
    CardBoxes,
    CardTitle,
    CardDetailContainer,
    TextWrapper,
    NotificationText,
    NotificationIcon,
    CollaborationInfo,
    RedText,
    TextSpan,
    LongTextContainer,
    LongText,
    CardTextSpan,
    MusicTagsContainer,
    MusicTags,
    Posttext,
    ButtonsWrapper,
    RequestButtonContainer,
    RequestButton,
} from "./requests.sttyles";
import TheLink from "@/components/TheLink";


const OpenRequests = () => {
    const requestsStats = [
        {
          title: "INSPIRING & POSITIVE BLUES/BLUESY SONGS",
          subtitle: "with Male or Female Vocals are needed by a Film/TV Music Publisher",
          date: "05/05/2023",
          submission: "2 New Submissions!",
          description: "Please submit top-notch Blues or Bluesy Songs brimming with inspiring and positive energy. Your submissions should have captivating melodies, well-crafted lyrics centered around the themes mentioned above, and emotional, well-performed vocals...",
          deadline: " May 30th, 2023,   09:00 AM",
        },
        {
          title: "INSPIRING & POSITIVE BLUES/BLUESY SONGS",
          subtitle: "with Male or Female Vocals are needed by a Film/TV Music Publisher",
          date: "05/05/2023",
          submission: "2 New Submissions!",
          description: "Please submit top-notch Blues or Bluesy Songs brimming with inspiring and positive energy. Your submissions should have captivating melodies, well-crafted lyrics centered around the themes mentioned above, and emotional, well-performed vocals...",
          deadline: " May 30th, 2023,   09:00 AM",
        },
         {
          title: "INSPIRING & POSITIVE BLUES/BLUESY SONGS",
          subtitle: "with Male or Female Vocals are needed by a Film/TV Music Publisher",
          date: "05/05/2023",
          submission: "2 New Submissions!",
          description: "Please submit top-notch Blues or Bluesy Songs brimming with inspiring and positive energy. Your submissions should have captivating melodies, well-crafted lyrics centered around the themes mentioned above, and emotional, well-performed vocals...",
          deadline: " May 30th, 2023,   09:00 AM",
        },
        {
          title: "INSPIRING & POSITIVE BLUES/BLUESY SONGS",
          subtitle: "with Male or Female Vocals are needed by a Film/TV Music Publisher",
          date: "05/05/2023",
          submission: "2 New Submissions!",
          description: "Please submit top-notch Blues or Bluesy Songs brimming with inspiring and positive energy. Your submissions should have captivating melodies, well-crafted lyrics centered around the themes mentioned above, and emotional, well-performed vocals...",
          deadline: " May 30th, 2023,   09:00 AM",
        },
        ]  
    return (
        <Container>
             <CardWrapper>
             {requestsStats.map(({ title, subtitle, date, submission, description, deadline }, idx) => (
                <CardBoxes key={idx}>
                <CardTitle><CardTextSpan>{title} </CardTextSpan>{subtitle}</CardTitle>
                <CardDetailContainer>
                    <CollaborationInfo><Posttext>Posted: </Posttext>{date}</CollaborationInfo>
                </CardDetailContainer>
                    <TextWrapper>
                        <NotificationText>{submission}</NotificationText>
                        <NotificationIcon />
                    </TextWrapper>
                <LongTextContainer>
                    <LongText>{description}</LongText>
                </LongTextContainer>
                <CardDetailContainer>
                    <RedText><TextSpan>Deadline: </TextSpan> {deadline}</RedText>
                </CardDetailContainer>
                <MusicTagsContainer>
                    <MusicTags>Pop</MusicTags>
                    <MusicTags>R&B</MusicTags>
                    <MusicTags>Soul</MusicTags>
                    <MusicTags>Soul</MusicTags>
                </MusicTagsContainer>
                <ButtonsWrapper>
                    <TheLink to="/editRequest">
                        <RequestButtonContainer $editwidth $requestborder $requestcolor>
                            <RequestButton $requestcolor>Edit Request</RequestButton>
                        </RequestButtonContainer>
                    </TheLink>
                    <TheLink to="/manageRequest">
                        <RequestButtonContainer $requestbutton $addbutton>
                            <RequestButton>View Request Details</RequestButton>
                        </RequestButtonContainer>
                    </TheLink>
                </ButtonsWrapper>
            </CardBoxes>
              ))}
            </CardWrapper>
        </Container>
    );
  };
  
  export default OpenRequests;