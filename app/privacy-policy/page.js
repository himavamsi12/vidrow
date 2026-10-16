import LegalPage from "../components/LegalPage";
import { PRIVACY } from "../data/legal";

export const metadata = {
  title: "Privacy Policy | Vidrow",
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={PRIVACY} />;
}
