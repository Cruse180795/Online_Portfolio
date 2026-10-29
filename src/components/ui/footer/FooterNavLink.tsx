interface FooterNavLinkProps {
  sectionId: string;
  label: string;
}

export default function FooterNavLink({ sectionId, label }: FooterNavLinkProps) {
  return (
    <li>
      <a
        href={`#${sectionId}`}
        className="text-sm font-jetbrains-mono leading-140 uppercase text-neutral-200 transition-colors duration-300 ease-in-out hover:text-white"
      >
        {label}
      </a>
    </li>
  );
}
