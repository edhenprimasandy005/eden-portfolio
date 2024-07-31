import dynamic from "next/dynamic";
import Preview from "@/components/preview";

export const metadata = {
  title:
    "Preview || Bostami - Tailwind CSS  Personal Portfolio React Nextjs Template",
};
const PreviewPage = () => {
  return (
    <>
      {/* End Head for Seo */}

      <Preview />
      {/* End preview page */}
    </>
  );
};

export default dynamic(() => Promise.resolve(PreviewPage), { ssr: false });
