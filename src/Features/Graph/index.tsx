import React from "react";
import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from "reactflow";

import CustomNode from "./CustomNode";
import input from "./../../input.json";
import "reactflow/dist/style.css";
const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Person",
      name: "Tom A.",
      age: 15,
      url: "http://example.com/foo",
    },
    position: { x: 250, y: 5 },
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  {
    id: "4",
    type: "custom",
    data: { label: "Node 4" },
    position: { x: 400, y: 200 },
  },
];

const initialEdges: Edge[] = [
  // { id: "e1-2", source: "1", target: "2", animated: true },
  // { id: "e1-3", source: "1", target: "3" },
];

const nodeTypes = {
  custom: CustomNode,
};

const Graph = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      onClick={() => console.log(initialNodes)}
    >
      {/* <Background 
      // style={{ display: "none" }} 
      /> */}
      {/* <MiniMap />
      <Controls /> */}
    </ReactFlow>
  );
};

export default Graph;
