import { Container } from '@/components/container';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/hero';

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Lorem Lorem Lorem <br /> Lorem Lorem
        </HeroTitle>
        <HeroSubtitle>
          Lorem Lorem Lorem <br /> Lorem Lorem
        </HeroSubtitle>
        <img src="/img/hero.PNG" alt="hero image" />
      </Hero>
    </Container>
  );
}
