import { useContext } from "react";
import { EditorContext } from "../../../contexts/editor-context";
import { Editor } from "draft-js";
import "./draftEditor.css";

const DocumentEditor = () => {
  const {
    editorState,
    editorRef,
    handleEditorChange,
    focusEditor,
    styleMap,
    myBlockStyleFn,
  } = useContext(EditorContext);

  return (
    <div
      style={{ height: "1100px", width: "850px" }}
      className="bg-white shadow-md flex-shrink-0 cursor-text p-12"
      onClick={focusEditor}
    >
      <Editor
        ref={editorRef}
        editorState={editorState}
        onChange={handleEditorChange}
        customStyleMap={styleMap}
        blockStyleFn={myBlockStyleFn}
      />
    </div>
  );
};
export default DocumentEditor;
