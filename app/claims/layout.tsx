import { EditorialByline } from "@/components/EditorialByline";

export default function ClaimsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EditorialByline />
    </>
  );
}
