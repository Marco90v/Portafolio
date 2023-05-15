import { createContext, useState } from "react";

type a = {
  data:null | project,
  setData:any
}

const DetailsModal = createContext<a>({data:null, setData:null});

function MyContext({children}:any) {
  const [data, setData] = useState<null|project>(null);

    return(
      <DetailsModal.Provider value={{data, setData}}>
        {children}
      </DetailsModal.Provider>
    );
}
export default MyContext;
export { MyContext, DetailsModal };