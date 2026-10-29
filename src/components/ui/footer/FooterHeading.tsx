interface FooterHeadingProps {
  children: React.ReactNode;
  id?: string;
}

export default function FooterHeading({ children, id }: FooterHeadingProps) {
  return (
    <h3 className="uppercase text-cyan-100 font-jetbrains-mono font-medium text-sm leading-140" id={id}>
      <span aria-hidden="true">// </span>
      {children}
    </h3>
  );
}
