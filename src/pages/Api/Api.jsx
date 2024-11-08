import React, { useEffect, useState } from 'react';

const Api = () => {
    const [cat, setCat] = useState();

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then((resp) => resp.json())
            .then((data) => {
                setCat(data);
            })
            .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);

    return (
        <div>
            {cat && cat.fact}
        </div>
    );
}

export default Api;
