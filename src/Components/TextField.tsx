import React from "react"
import { useState, useRef } from 'react'

//object for Props
interface Person {
    firstName: string;
    lastName: string;
}
//establishing prop type to pass into the functional component
// ?: === optional
interface Props {
    text: string;
    ok?: boolean;
    int?: number;
    obj?: Person
}

export const TextField: React.FC<Props> = () => {
    //setting the state type as number or null
    const [count, setCount] = useState<number | null>(1)
    const inputRef = useRef<HTMLInputElement>(null)


    return(
        <div>
            <input ref={inputRef}/>
        </div>
    )
}