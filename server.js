import express from 'express';

const app = express();

const PORT = 3000; // cuidao con numero de puerto
//por si otro compañero tiene pillado este mismo numero 
//al trabajar en github, 


// login
app.get("/", function(req, res) {
    res.send("Hello Login");
});

/* 
Agregar los cambios (ya realizado):

bash
git add .
Confirmar los cambios:

bash
git commit -m "Actualización de server.js"
Subir los cambios al repositorio remoto:

bash
git push origin login
Por lo que veo, parece que no has hecho el commit antes de intentar hacer el push. Intenta ejecutar estos comandos y verifica si los cambios en server.js se reflejan en GitHub.

Aquí está el orden completo de los comandos:

bash
git add .
git commit -m "Actualización de server.js"
git push 
*/









// algo 
app.get("/", function(req, res) {
    res.send("Hello World");
});

app.listen(PORT, function() {
    console.log(`Server is running on PORT ${PORT}`);
});