import { Helmet } from "react-helmet-async";
import { IDynamicTitle } from "../../interface/dynamicTitle";

const DynamicTitle: React.FC<IDynamicTitle> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default DynamicTitle;
