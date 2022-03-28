Pour allumer le serveur sur le terminal 

dans index.js mettre le code chien pour la BD!!!
npx nodemon index.js  mettre la fonction terminal divisé

postman : icone en favori 

mongoDB icone en favori
double clique sur récent
myFirstDatabase



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

----------------------------------
Fonction Delete / POST

routes
controller
on a besoin de cibler la suppression donc on va utiliser le Id + un if de vérif si l'Id existe 
test de la route dans postman 
aller dans le body / raw /json

faire un copier coller de l'id d'un des exemple qu'on a créé (aller sur le chemein GET/user)

-----------------------------------
Fonction Update / POST

routes
controllers
on a besoin de cibler la suppression donc on va utiliser le Id + un if de vérif si l'Id existe 
test de la route dans postman 
aller dans le body / raw /json
utiliser le toModify  comme ceci 

{
    "_id": "623dc18efb714ea6f9d6fd25",
    "toModify": {
        "lastName": "Champ à modifier"
    }
}

---------------------------------------

Gestion de l'authentification token /salt / hash
dans l'entité User on a ID/firstName/ lastName / dateOfBirth / token / salt / hash 

créer un dossier utils 
puis un fichier encryptPassword

installer des bundle de crypto

npm i crypto-js uid2 

faire le fichier encryptPassword
puis dans controllers 

on appelle encryptPassword puis on modifie userCreate 
vérif si il ya un password avec un if 

vérif dans postman sur le chemin userCreate 

{
    "firstName": "DUDU",
    "lastName": "Dudu",
    "dateOfBirth": "2022-03-25T13:20:14.259Z",
    "password" : "motdepasse"

}


------------------------------

Login


--------------------------
Gestion des rôles

les rôles doivent passer sur toutes les routes donc on a besoin d'un middleware
3 paramètres: req, res et next

qd je lance sur postman un send sur le chemin GEt USER, SUR LE TERMINAL apparait 'i'm the middleware 

c'est le token qui va donner les autorisations aux différents users (sportifs= customer, coach,  manager, )
donc verif du token, pas de token, pas de user

ensuite on peut mettre les autoirsation par role ex: dans create , update et delete
if(req.role !== "manager"){
      return res.json("Unauthorized");
    }

-------------------------------
Création de customer et coach
-> création de deux modèles

type : mongoose.Schema.Types.ObjectId, ref: "User"}  donne le ralation entre la table user et la table customer pour récupérer les infos de user

importer customer dans index models

puis faire les routes tout vcomme user
postman POST customerCreate

dans MongoDB création des deux tables customers et users














ACHTUNG PASSWORD


mettre ce fichier readme  dans le fichier. ods  Mongo 















