interface FooterHeadingProps {
  children: React.ReactNode;
}

export default function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <h3 className="uppercase text-cyan-100 font-jetbrains-mono font-medium text-sm leading-140">
      // {children}
    </h3>
  );
}
