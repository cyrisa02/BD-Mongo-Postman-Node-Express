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
--------------------------------------
Mongo DB 

instaltion de mongoose

npm i mongoose

+ modif du index.js pour importer mongoose 

-----------------------------

création de user.js dans models 
voir le diagramme de classe , ne pas mettre d'Id car il est créé automatiquement par Mongo 

--------------------
dans le user.js de Routes créer le Create du CRUD 
+ création de son contrôleur dans controllers/user.js importer dans routes/user.js

-----------------------------------
créer dans models index.js 

puis importer dans index.js principal 

une fois le controller user paramétré aller dans postman

créer une nouvelle route avec +
puis POST 
http://localhost:3000/userCreate
une fois send , sur le terminal on a Moel {User}

puis dans le controller 
créer NewUser
const NewUser = await new User({
    firstName: "Jean",
    lastName: "Durant",
    dateOfBirth: new Date(),
  }).save();


mettre dans un try catch et remplacer My user par la variable NewUser 

controler sur postman 

------------------------------
aller dans le logiciel MongoDB compass,
renseigner l'URL avec le mot de passe et le user

dans myFirstDatatbase on voit la BD 


vérif dans postman avec GET et sur le premier chemin user

on voit toutes les créations, chaque send crée un user 

----------------------------------------------
sur le chemin POSt et create
dans postman, body / row format (text) mettre json

faire un copier coller et modifer les données, ça va crée une nouvelle entrée
on voit le résultat dans le terminal et pas encore dans MOngoCompas

on change le script dans controllers avec req.body.firstName etc...

et là on voit la création dans MongoCompas

vérif postman
PASSWORD


mettre tout dans le fichier Mongo + attention au password















