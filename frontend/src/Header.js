import react from "react";

export default function Header({ children }){
    // para obter apenas a propriedade children => Header({ children } e no h1 usa-se <h1>{children}</h1> 
    return (
        <header>
            {/* injetar js dentro do html usa-se {} */}
            {/* children retorna todo conteúdo 
            <h1>{props.children}</h1>    */}
            <h1>{children}</h1>              
        </header>
    )
}