import { FC } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { StyledPortfolioItem } from "./styles";
import { PortfolioItem as PortfolioItemProps } from "./portfolioData";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"

export const PortfolioItem: FC<PortfolioItemProps> = (props) => {
    const tags = props.tags.map(o => <li>{o}</li>);

    return <ScrollAnimation animateIn="flipInX">
        <StyledPortfolioItem>
            <header>
                <div className="project-links">
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
                <div className="project-images">
                    <img alt="sample" src={props.images[0]} />
                </div>
            </header>
            <div className="body">
                <h3>{props.title}</h3>
                <p dangerouslySetInnerHTML={{
                    __html: props.abstract
                }}></p>
            </div>
            {
                tags && <footer>
                    <ul className="tech-list">
                        {tags}
                    </ul>
                </footer>
            }
        </StyledPortfolioItem>
    </ScrollAnimation>
};