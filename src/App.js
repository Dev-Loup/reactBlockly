import './customBlocks/custom_Blocks';
import React from 'react';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';
import './App.css';

const App = () => {
  const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = [
    {
      name: 'Information',
      colour: '#5C81A6',
      blocks: [
        {
          type: 'startBlock'
        },
        {
          type: 'rawStartBlock'
        }
      ]
    },
    {
      name: 'Moves',
      colour: '#5CA65C',
      blocks: [
        {
          type: 'moves'
        },
      ]
    },
  ]
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById('generated-xml').innerText = newXml;

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code;
  }

  return (
    <>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
        workspaceDidChange={workspaceDidChange}
      />
      <pre id="generated-xml" />
      <textarea id="code" style={{ height: "200px", width: "400px" }} />
    </>
  )
}

export default App;