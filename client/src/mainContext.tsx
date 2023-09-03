import React, { createContext, useState, useEffect } from 'react'

export type MainContextType = {
    character: {
        name: string;
        imageName: string;
    },
    setCharacter: React.Dispatch<React.SetStateAction<{
        name: string;
        imageName: string;
    }>>
}

const MainContext = createContext<MainContextType>({character: {name: '', imageName: ''}, setCharacter: ()=>{}})

export function MainProvider(props: {children: any}){
    const [character, setCharacter] = useState<{name: string, imageName: string}>({name: '', imageName: ''}); 

    return (
        <MainContext.Provider 
            value={{character, setCharacter}}
        >
            {props.children} 
        </MainContext.Provider>
    )
}

export default MainContext; 

