import {
  Logo,
  NavMenu,
  NavMenuItem,
  NavbarTwoColumns,
  Section,
} from "astro-boilerplate-components";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="assets/images/logo-timsitu.png"
              className="w-20 mr-5"
              alt="Logo Tim Situ"
              loading="lazy"
            />
          }
          name=""
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
