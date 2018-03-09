import React, { Component } from 'react';
import AceEditor from 'react-ace';
import './index.css';
import CustomJsonMode from './customJsonMode';
import 'brace/theme/github';

const some_text = `{
  "time": "now",
  "some_key": "<text annotation>",
  "some_int": 123,
  "some_float": 3.14,
  "accuracy1": "< should not be highlighted",
  "accuracy2": "should not be highlighted >"
}`;

export default class App extends Component {
  componentDidMount() {
    const customMode = new CustomJsonMode();
    this.refs.aceEditor.editor.getSession().setMode(customMode);
  }

  render() {
    return (
      <div className="App">
        <h1>Simple JSON Editor</h1>
        <AceEditor
          ref="aceEditor"
          className="ace-editor"
          mode="json"
          theme="github"
          height="400px"
          width="500px"
          value={some_text}
          wrapEnabled={true}
          tabSize={2}
          editorProps={{
            $blockScrolling: true
          }}
        />
      </div>
    );
  }
}
