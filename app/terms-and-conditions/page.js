import LegalPage from "../components/LegalPage";
import { TERMS } from "../data/legal";

export const metadata = {
  title: "Terms and Conditions | Vidrow",
  description:
    "The terms and conditions for using the Vidrow website.",
};

export default function TermsPage() {
  return <LegalPage doc={TERMS} />;
}
