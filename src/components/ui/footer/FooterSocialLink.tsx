interface FooterSocialLinkProps {
  href: string;
  label: string;
}

export default function FooterSocialLink({ href, label }: FooterSocialLinkProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-jetbrains-mono leading-140 uppercase text-neutral-200 transition-colors duration-300 ease-in-out hover:text-white"
      >
        {label}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    </li>
  );
}
