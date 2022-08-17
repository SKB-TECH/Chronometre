import { React,useContext,createContext,useState} from 'react';

const ContextMinite = createContext();

export const Miniteris=((children)=>{
    const [statut,setStatut]=useState(25)
    
    return<ContextMinite.Provider value={{statut,setStatut}}/>
                {children}
            
            <ContextMinite.Provider/>
}
)