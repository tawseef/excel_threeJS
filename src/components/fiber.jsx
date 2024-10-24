import React, { useContext, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { DataContext } from "./context";

export default function Fiber() {
    const [plotPoint, setPlotPoint] = useState([]);
    
    const data = useContext(DataContext);

    const getNodeCoordinates = (nodeNumber) => {
    const nodes = data.excelData[0].B;
    const node = nodes.find((n) => n.Node === nodeNumber);
        return node ? [node.X, node.Y, node.Z] : [0, 0, 0];
    }

    useEffect(() => {
        if (data.excelData.length > 0) {
          const members = data.excelData[0].A;
          const points = [];
          
          members.forEach((item) => {
            const startNode = item["Start Node"];
            const endNode = item["End Node"];
    
            const startPoint = getNodeCoordinates(startNode);
            const endPoint = getNodeCoordinates(endNode);
    
            points.push(startPoint, endPoint);
            
          });
    
          setPlotPoint(points);           
        }
      }, [data.excelData]); 
    

  

  return (
    <>{
        data.excelData.length > 0 ? 
        
        <Canvas camera={{ position: [170, 50, 170] }} style={{ height: "70vh", width: "80vw" }}>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 5]} intensity={1} />
    
          {/* Line component rendering */}
          <Line
            points={plotPoint} 
            color="#000000" 
            lineWidth={3} 
            segments 
          />
        </Canvas>
        
        : false 
    }</>
  );
}
