La apliación será un clon de spotify

SCAFFOLDING

Para ello tendremos que usar:
    -Auth (sección de autentificación)
        -Al registrarse entrará al Home
    -Home
        -rutas potegidas, para que solo pueda entrar las personas con sesion iniciada




Carpetas:
    -core:
        recursos o clases que no se neceita importar en un modulo
    -modulos:
        contendrá los modulos que vamos a usar
            -Auth: cada modulo tendrá una estructura
                -routes
                -servicios
                -pipes
            -
            -
            -
    -shared:
        recursos que se pueden compartir

Cada modulo tendrá su ruta


---------LAZYLOAD--------- CARGA PEREZOSA---
Cargar los modules de manera automatica

Para mantener el tamaño de la aplcacion más pequeña, por tanto en el AppRoutingModule colocaremos un modulo y no un componente.
Si un usuario anónimo entre en la aplicación le vamos a cargar el modulo de autenticación.
Cuando termine el login in se le carga el siguiente modulo, a ese ciclo se le llama carga perezosa.

