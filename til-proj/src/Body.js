import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './Body.css';

function Body() {
  const testData = [
    {
      title: '가나다라마!',
      content: '바사아자차카타파하~',
    },
    {
      title: '타이틀이다~',
      content: '내용~',
    },
  ];
  const EDITOR_MODE = {
    EDIT: 'edit',
    PREVIEW: 'preview',
  };
  const [editorValue, setEditorValue] = useState('**Hello world!!**');
  const [editorMode, setEditorMode] = useState(EDITOR_MODE.EDIT);
  const [dummyData, setDummyData] = useState(testData);
  const handleSave = () => {
    setDummyData([...dummyData, ...[{ title: 'new', content: editorValue }]]);
  };
  const handleListItemClick = (content) => {
    setEditorValue(content);
  };
  return (
    <div className="body">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="menu-select">
          <div className="editor-container">
            <MDEditor
              value={editorValue}
              onChange={setEditorValue}
              preview={editorMode}
              height={600}
            />
          </div>
          <div className="editor-menu">
            <div
              className="editor-menu-button"
              onClick={() => {
                setEditorMode(EDITOR_MODE.EDIT);
              }}
            >
              edit
            </div>
            <div
              className="editor-menu-button"
              onClick={() => {
                setEditorMode(EDITOR_MODE.PREVIEW);
              }}
            >
              preview
            </div>
            <div className="editor-menu-button" onClick={handleSave}>
              save
            </div>
          </div>
        </div>
        <div className="menu-select">
          {dummyData &&
            dummyData.map((data) => {
              return (
                <div
                  className="list-item"
                  onClick={() => {
                    handleListItemClick(data.content);
                  }}
                >
                  {data.title}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Body;
