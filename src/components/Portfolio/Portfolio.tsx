import { Container } from "./styles";
import { PortfolioCard } from "./PortfolioCard";
import portfolioDataItems from "./portfolioData";

export function Portfolio(){
  const items = portfolioDataItems.map(o => <PortfolioCard {...o} />);

  return(
    <Container id="portfolio">
      <h2>My portfolio</h2>
      <p className="desc">{items.length} projects</p>
      <div className="projects">
        {items}
      </div>
    </Container>
  );
}