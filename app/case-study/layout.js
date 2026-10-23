import BackToTop from "../components/BackToTop";

export default function CaseStudyLayout({ children }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  );
}
