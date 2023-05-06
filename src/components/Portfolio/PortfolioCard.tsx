import { FC, useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import { PortfolioItem as PortfolioItemProps } from "./portfolioData";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import { ImageViewer } from "../ImageViewer/ImageViewer";

const StyledPortfolioCard = styled.div`
    padding-bottom: 2rem;
    background: rgba(52, 52, 52);
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--black);

    &:hover{
        transform: translateY(-5px);
    }

    p {
        margin-bottom: 1.5rem;
        color: var(--text);
    }
`

const StyledCardBody = styled.div`
    padding: 0 1.8rem;
`

const StyledTitleContainer = styled.div`
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: space-between;
    color: var(--green);

    .actions {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: red;
    }

    a > img {
        width: 2.6rem;
    }
`

const StyledCardFooter = styled.div`
    margin-top: auto;
    padding: 0 1.8rem;

    ul {
        display: flex;
        color: var(--tag);
        align-items: center;
        gap: 1.3rem;
        font-size: 1.5rem;
        flex-wrap: wrap;
        background: #292929;
        margin-left: -12px;
        margin-right: -12px;
        margin-bottom: -14px;
        padding: 12px;
        border-radius: 8px;
    }
`

const StyledAbstract = styled.p`
    letter-spacing: 0.12rem;
    margin-bottom: 2rem;

    a{
        color: var(--link);
        border-bottom: 1px solid var(--green);
        transition: color 0.25s;

        &:hover{
            color: var(--green);
        }
    }
`;

export const PortfolioCard: FC<PortfolioItemProps> = (props) => {
    const [hovered, setHovered] = useState(false);
  
    const tags = props.tags.map(o => <li key={o}>{o}</li>);

    return <ScrollAnimation animateIn="slideInUp" duration={0.65} style={{marginTop: "2rem"}}>
        <StyledPortfolioCard className="card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <ImageViewer images={props.images} isHovered={hovered} />
            
            <StyledCardBody>
                <StyledTitleContainer>
                    <h3>{props.title} ({props.year})</h3>
                    
                    <div className="actions">
                        {
                            props.githubSource &&
                            <a href={props.githubSource} target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="GitHub" />
                            </a>
                        }

                        {
                            props.link && <a href={props.link} target="_blank" rel="noreferrer">
                                <img src={externalLinkIcon} alt="Website" />
                            </a>
                        }
                    </div>
                </StyledTitleContainer>
                
                <StyledAbstract dangerouslySetInnerHTML={{
                    __html: props.abstract
                }} />
            </StyledCardBody>
            <StyledCardFooter>
                  <ul>
                      {tags}
                  </ul>
              </StyledCardFooter>
        </StyledPortfolioCard>
    </ScrollAnimation>;
}