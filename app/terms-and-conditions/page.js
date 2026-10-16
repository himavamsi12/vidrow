import LegalPage from "../components/LegalPage";
import { TERMS } from "../data/legal";

export const metadata = {
  title: "Terms and Conditions | Vidrow",
};

export default function TermsPage() {
  return <LegalPage doc={TERMS} />;
}
