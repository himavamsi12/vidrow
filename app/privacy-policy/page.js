import LegalPage from "../components/LegalPage";
import { PRIVACY } from "../data/legal";

export const metadata = {
  title: "Privacy Policy | Vidrow",
  description:
    "How Vidrow collects, uses and protects the information you share with us through this website.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={PRIVACY} />;
}
