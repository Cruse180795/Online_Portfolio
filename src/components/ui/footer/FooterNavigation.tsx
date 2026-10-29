import FooterNavLink from "./FooterNavLink";
import FooterSectionWrapper from "./FooterSectionWrapper";

const navigation = [
  { label: "About", sectionId: "about" },
  { label: "Projects", sectionId: "projects" },
  { label: "Education", sectionId: "education" },
  { label: "Contact me", sectionId: "contact" },
];

export default function FooterNavigation() {
  return (
    <FooterSectionWrapper title="Navigation" id="footer-navigation">
      <ul className="flex flex-col gap-3" aria-labelledby="footer-navigation">
        {navigation.map((data) => (
          <FooterNavLink sectionId={data.sectionId} label={data.label} key={data.sectionId} />
        ))}
      </ul>
    </FooterSectionWrapper>
  );
}
