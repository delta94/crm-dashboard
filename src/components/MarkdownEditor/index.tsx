import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const MarkdownEditor = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');
  const { value, onChange } = props;

  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={onChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
};

export default MarkdownEditor;
