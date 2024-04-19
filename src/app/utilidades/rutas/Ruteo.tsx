import {Route, Routes} from "react-router-dom";
import {Inicio} from "../../componentes/contenedor/Inicio";
import {Noencontrado} from "../../componentes/contenedor/Noencontrado";

import {PeliculaAdmin} from "../../componentes/peliculas/PeliculaAdmin";
import {PeliculaCrear} from "../../componentes/peliculas/PeliculaCrear";
import {PeliculaListar} from "../../componentes/peliculas/PeliculaListar";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>}/>

            <Route path="/pelcre" element={<PeliculaCrear/>}/>
            <Route path="/pelAdm" element={<PeliculaAdmin/>}/>
            <Route path="/pellist" element={<PeliculaListar/>}/>

            <Route path="*" element={<Noencontrado/>}/>
        </Routes>
    );
}
