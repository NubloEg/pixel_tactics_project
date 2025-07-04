import MainPageLayout from "@/app/shared/ui/MainPageLayout/MainPageLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainPageLayout>{children}</MainPageLayout>;
}
