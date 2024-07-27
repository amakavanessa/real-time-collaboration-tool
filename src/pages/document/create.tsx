import DocumentCreateHeader from "../../components/organisms/document-create-header/document-create-header";
import useAuth from "../../hooks/use-auth";

import useDocuments from "../../hooks/use-documents";
import useWindowSize from "../../hooks/use-window-size";

const Create = () => {
  const { heightStr } = useWindowSize();
  const { userId } = useAuth();
  const { documents, loading, setDocuments } = useDocuments();

  const recentDocuments =
    documents === null
      ? []
      : documents.filter((document) => document.userId === userId);

  const sharedDocuments =
    documents === null
      ? []
      : documents.filter((document) => document.userId !== userId);

  return (
    <div style={{ height: heightStr }}>
      <DocumentCreateHeader />
    </div>
  );
};

export default Create;
