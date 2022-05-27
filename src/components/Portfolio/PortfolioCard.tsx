import { FC } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import { PortfolioItem as PortfolioItemProps } from "./portfolioData";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";

const StyledPortfolioCard = styled.div`
    padding-bottom: 2rem;
    background: rgba(234, 234, 234, 0.9);
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--black);

    &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
    }

    p {
        margin-bottom: 1.5rem;
    }
`

const StyledCardHeader = styled.div`
    img {
        width: 100%;
        margin-bottom: 1.8rem;
        height: 220px;
        object-fit: cover;
        border-top-left-radius: 1.2rem;
        border-top-right-radius: 1.2rem;
        cursor: pointer;
    }
`

const StyledCardBody = styled.div`
    padding: 0 1.8rem;
`

const StyledTitleContainer = styled.div`
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: space-between;

    .actions {
        display: flex;
        align-items: center;
        gap: 1rem;
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
        align-items: center;
        gap: 1.3rem;
        font-size: 1.4rem;
        opacity: 0.6;
        flex-wrap: wrap;
    }
`

const StyledAbstract = styled.p`
    letter-spacing: 0.12rem;
    margin-bottom: 2rem;

    a{
        color: var(--black);
        border-bottom: 1px solid var(--green);
        transition: color 0.25s;

        &:hover{
            color: var(--green);
        }
    }
`;

export const PortfolioCard: FC<PortfolioItemProps> = (props) => {
    const tags = props.tags.map(o => <li>{o}</li>);

    function openInNewTab(url: string) {
        if (window) window.open(url, '_blank');
    }

    return <ScrollAnimation animateIn="flipInX" style={{marginTop: "2rem"}}>
        <StyledPortfolioCard>
            <StyledCardHeader>
                <img alt="sample" src={props.images[0]} onClick={() => {
                    if (props.link) {
                        openInNewTab(props.link);
                    }
                }} />
            </StyledCardHeader>
            <StyledCardBody>
                <StyledTitleContainer>
                    <h3>{props.title}</h3>
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