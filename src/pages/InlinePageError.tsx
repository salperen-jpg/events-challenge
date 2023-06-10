import { useRouteError } from "react-router-dom";

const InlinePageError = () => {
  const error = useRouteError();
  return <h3>something went wrong</h3>;
};
export default InlinePageError;
