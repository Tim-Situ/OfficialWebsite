import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Welcome to <GradientText>Tim Situ</GradientText> Official Website 👋
        </>
      }
      description={
        <>
          The Situ Team is a group of students from{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://telkomuniversity.ac.id"
          >
            Telkom University
          </a>{" "}
          who took part in the Competition. Initially the Situ Team was created
          for class assignment groups only.
        </>
      }
      avatar={
        <img
          className="h-72 w-72"
          src="/assets/images/hero-sdlc.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
