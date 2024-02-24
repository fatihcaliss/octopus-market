import { HeaderMegaMenu } from "@/components/HeaderMegaMenu/HeaderMegaMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <HeaderMegaMenu />
      {children}
    </div>
  );
}
