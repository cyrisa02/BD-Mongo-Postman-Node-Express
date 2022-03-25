Initialisation

npm init -y 

-> création d'un package.json

- création du index.js 
console.log("Hello World2");

vérif ds le terminal node index.js

-> pour que ca se lance automatiquement

npx nodemon index.js

-> installation du serveur express 
npm i express 

- une fois index.js saisi, on va vérifier l'api avec postman teste les routes htpp 

- mettre GET ou POST dans postman
entrer la route 

http://localhost:3000/test     voir index.js 

Send

--------------------------------------

création d'un dossier routes ,  un dossier controllers pour des projets important un dossier services (pour les controllers) 

création d'un dossier models 

---------------------
dans routes, controllers et models  créer des fichiers  user.js


app.get("/test", async (req, res) => {
    res.json("Hello World");
});

est équivalent à userRoute

--------------------------
une fois user.js de routes et index.js modifiés vérifier la route dasn postman 

mettre http://localhost:3000/user 

------------------
créer user.js dans controller 

async (req, res) => {
        res.json("My user");   est équivalent à userGet    








