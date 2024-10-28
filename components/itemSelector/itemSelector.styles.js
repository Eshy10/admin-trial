import styled from 'styled-components';


const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TagsInfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    width: 100%;
`;

const TagsDescription = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; 
    letter-spacing: 0.24px;
    padding-top: 1.2rem;
`;

const TagContainer = styled.div`
   display: flex;
   align-items: center;
   padding-bottom: 0.8rem;
   @media screen and (max-width: 26.5625em){
          flex-wrap: wrap;
          padding-bottom: 0.1rem;
          width: 97%;
    }
     @media screen and (max-width: 20em){
         width: 100%;
     }
`;

const GenreTag = styled.span`
    margin-right: 1.3rem;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; 
    letter-spacing: 0.24px;
    border-radius: 10000px;
    background-color: ${(props) => (props.tagsbg ? "#36D7FF" : "#F2F2F2")}; 
    color: ${(props) => (props.tagscolor ? "#ffffff" : "#AAACA6")}; 
    padding: 5px 10px;
    cursor: pointer;
     @media screen and (max-width: 26.5625em){
        margin-bottom: 0.5rem;
     }
`;

export {
    TagsWrapper,
    TagsInfoContainer,
    TagsDescription,
    TagContainer,
    GenreTag,
}