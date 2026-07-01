import { ClaimBreadcrumbs } from "@/components/ClaimBreadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";

export default function ClaimsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClaimBreadcrumbs />
      {children}
      <EditorialByline />
    </>
  );
}
