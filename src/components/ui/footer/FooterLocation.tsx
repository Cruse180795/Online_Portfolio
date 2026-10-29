import FooterSectionWrapper from "./FooterSectionWrapper";

export default function FooterLocation() {
  return (
    <FooterSectionWrapper title="Location">
      <div className="flex flex-col gap-3">
        <p className="text-sm leading-140 font-jetbrains-mono">Based in Newcastle upon Tyne</p>
        <p className="text-sm leading-140 font-jetbrains-mono">United Kingdom</p>
      </div>
    </FooterSectionWrapper>
  );
}
