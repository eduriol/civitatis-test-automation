# language: es
Característica: Buscador de ciudades
Para encontrar mi destino fácilmente
Como un visitante normal
Quiero buscar ciudades en la página

Escenario: Resultados no encontrados para Mordor
    Dado que estamos en la url "https://www.civitatis.com"
    Cuando buscamos el destino "Mordor"
    Entonces la web muestra en resultados "No hemos encontrado resultados"

Escenario: Resultados no encontrados para Oz
    Dado que estamos en la url "https://www.civitatis.com"
    Cuando buscamos el destino "Oz"
    Entonces la web muestra en resultados "No hemos encontrado resultados"