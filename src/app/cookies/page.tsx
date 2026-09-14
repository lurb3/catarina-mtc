import Breadcrumb from "@/components/Common/Breadcrumb";
import CookiesPolicy from "@/components/Cookies/CookiesPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Catarina Abreu",
  description: "Informações sobre como utilizamos cookies neste website.",
};

const CookiesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Política de Cookies"
        description="Como utilizamos cookies para melhorar a sua experiência"
      />
      <CookiesPolicy />
    </>
  );
};

export default CookiesPage;
