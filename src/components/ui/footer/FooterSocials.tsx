import FooterSocialLink from "./FooterSocialLink";
import FooterSectionWrapper from "./FooterSectionWrapper";

const socials = [
  { href: "https://github.com/Cruse180795", label: "github" },
  { href: "https://www.frontendmentor.io/profile/Cruse180795", label: "frontend mentor" },
  { href: "https://x.com/Cruse180795", label: "x" },
];

export default function FooterSocials() {
  return (
    <FooterSectionWrapper title="Socials" id="footer-socials">
      <ul className="flex flex-col gap-3" aria-labelledby="footer-socials">
        {socials.map((social) => (
          <FooterSocialLink key={social.href} href={social.href} label={social.label} />
        ))}
      </ul>
    </FooterSectionWrapper>
  );
}
