import { Container } from "./styles";
import { PortfolioItem } from "./PortfolioItem";
import portfolioDataItems from "./portfolioData";

export function Portfolio(){
  const items = portfolioDataItems.map(o => <PortfolioItem {...o} />);

  return(
    <Container id="portfolio">
      <h2>My portfolio</h2>
      <div className="projects">
        {items}
      </div>
    </Container>
  );
}