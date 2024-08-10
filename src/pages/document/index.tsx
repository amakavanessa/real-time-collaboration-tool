import { useParams } from "react-router-dom";
import useWindowSize from "../../hooks/use-window-size";
import useDocument from "../../hooks/use-document";
import { useContext, useEffect, useRef } from "react";
import DocumentHeader from "../../components/organisms/document-header";
import { DocumentContext } from "../../contexts/document-context";
import DocumentEditor from "../../components/organisms/document-editor";

const Document = () => {
  const { heightStr, widthStr } = useWindowSize();
  const { id: documentId } = useParams();
  const documentHeaderRef = useRef<null | HTMLDivElement>(null);
  const { loading, document } = useDocument(parseInt(documentId as string));
  const { setDocument } = useContext(DocumentContext);

  const documentViewerHeight = `calc(${heightStr} - ${documentHeaderRef.current?.clientHeight}px)`;

  useEffect(() => {
    if (document !== null) setDocument(document);
  }, [document]);

  return (
    <div
      style={{ height: heightStr }}
      className="w-full h-full bg-gray flex flex-col"
    >
      {loading ? (
        <>loading...</>
      ) : (
        <>
          <DocumentHeader documentHeaderRef={documentHeaderRef} />
          <div
            style={{ height: documentViewerHeight }}
            className="w-full flex flexcol justify-start items-center overflow-hidden"
          >
            <div
              style={{ width: widthStr }}
              className="h-full w-full overflow-auto space-y-4 flex flex-col items-center p-4"
            >
              <DocumentEditor />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Document;
