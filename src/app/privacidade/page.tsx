import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/Privacy/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Leia a nossa política de privacidade para entender como protegemos os seus dados pessoais.",
  alternates: { canonical: "/privacidade" },
};

const PrivacyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Política de Privacidade"
        description="Informações sobre como tratamos seus dados pessoais e cookies"
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPage;
