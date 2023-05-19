import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "./TextEditor.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    isSaveActive: false,
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

 

  render() {
    const { editorState, isSaveActive } = this.state;
 

    return (
      <div className="mainEditorcontainer">
        
          <div className="editorContainer">
            <div style={{ border: "1px solid black", borderRadius: "4px" }}>
                        <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
            
          </div>
    
      </div>
    );
  }
}