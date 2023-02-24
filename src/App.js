import React from "react";
import './App.css'
import dataSource from "./data/dataSource";
import TreeView from "react-treeview";

import "react-treeview/react-treeview.css";



const App = () => {
  return (
    <div className="MainDiv">
      <div class="container">
        {dataSource.map((node, i) => {
          const type = node.type;

          const label = <span className="node">{type}</span>;

          return (
            <TreeView
              key={type + "|" + i}
              nodeLabel={label}
              defaultCollapsed={true}
              className ="nodeValue"
            >
              {node.files.map((files) => {
                const label2 = <span className="node">{files.name}</span>;

                return (
                  <TreeView nodeLabel={label2} key={files.name} className ="nodeValue"></TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </div>
    </div>
  );
};

export default App;
