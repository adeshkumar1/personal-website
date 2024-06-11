// components/CodeMirrorEditor.tsx

import React, { useRef, useEffect, useCallback } from 'react';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';
import { basicSetup } from 'codemirror';
import { ViewUpdate } from '@codemirror/view';

interface CodeMirrorEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeMirrorEditor: React.FC<CodeMirrorEditorProps> = React.memo(({ value, onChange }) => {
  const editorRef = useRef<ReactCodeMirrorRef>(null);

  useEffect(() => {
    if (editorRef.current?.view) {
      editorRef.current.view.dispatch({
        changes: { from: 0, to: editorRef.current.view.state.doc.length, insert: value },
      });
    }
  }, [value]);

  const handleEditorChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    onChange(value);
  }, [onChange]);

  return (
    <CodeMirror
      ref={editorRef}
      value={value}
      height="400px"
      theme={oneDark}
      extensions={[basicSetup, cpp()]}
      onChange={handleEditorChange}
    />
  );
});

CodeMirrorEditor.displayName = 'CodeMirrorEditor';

export default CodeMirrorEditor;
