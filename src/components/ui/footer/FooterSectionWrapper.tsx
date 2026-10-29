import FooterHeading from "./FooterHeading";

interface FooterSectionWrapperProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function FooterSectionWrapper({ title, children, id }: FooterSectionWrapperProps) {
  return (
    <div className="flex flex-col gap-4">
      <FooterHeading id={id}>{title}</FooterHeading>
      {children}
    </div>
  );
}
