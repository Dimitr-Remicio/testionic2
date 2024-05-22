import React, { ReactElement } from "react";
import "./ExploreContainer.css";
import { ReactNode } from "react";

// const ExploreContainer: React.FC<ContainerProps> = ({children}) => {
//   return (
//     <div id="container">
//       {children}
//     </div>
//   );
// };

// export default ExploreContainer;

interface ContainerProps {
  // name: string;
  children: React.ReactElement;
}

// type Props = {
//   children: React.ReactElement,
// };

const ExploreContainer: React.FC<ContainerProps> = ({ children }) => (
  <div>
    {/* <h1>{title}</h1> */}
    {children}
  </div>
);

export default ExploreContainer;
