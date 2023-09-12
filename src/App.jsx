import { useState, useRef } from 'react'
import './App.css'
import Editor from '@monaco-editor/react'

const files = {
  "script.py": {
    name: 'script.py',
    langage: "python",
    value: "Here is some python text"
  },
  "index.html": {
    name: 'index.html',
    langage: "html",
    value: "<div>123</div>"
  },
}

function App() {
  const [fileName, setFileName] = useState("script.py");
  const editorRef = useRef(null)
  const file = files[fileName];

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    alert(editorRef.current.getValue())
  }

  return (
    <div>
      <button onClick={() => setFileName("index.html")} >index.html</button>
      <button onClick={() => setFileName("script.py")} >script.py</button>
      <button onClick={() => getEditorValue()} >Get editor value</button>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.langage}
        defaultValue={file.value}
        onMount={handleEditorDidMount}
      />
    </div>
  )
}

export default App
