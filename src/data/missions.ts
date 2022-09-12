import Mission from "@/vo/Mission";

const missions:Mission[] = 

[
    {
        "id": "1",
        "status": "IDLE",
        "type": "Le frigo",
        "title": "Le frigo",
        "desc": "Sais tu qu’en rangeant correctement les aliments dans ton frigo tu améliores le goût, leur durée de vie et tu minimises la consommation d’énergie ?",
        "quizz": [     
            {
                "type": "ORDER_GRID",
                "question": "Range dans le frigo les aliments au bon endroit, du plus bas vers le plus haut",
                "successMessage": "Bravo, le rangement des aliments dans le frigo n’a plus de secret pour toi. Partage ces informations avec tes amis et ta famille",
                "failMessage": "Ce n’est pas la bonne réponse. Tu y étais presque mais tu sais à présent que le rangement a son importance pour la bonne conservation des aliments et éviter de les jeter",
                "nextQuestionButtonLabel": "Mission suivante",
                "status": "UNDONE",
                "textResponses": [
                    {
                        "isCorrect": 1,
                        "title": "viande",
                        "icon": "0_viande"
                    },
                    {
                        "isCorrect": 2,
                        "title": "maracuja",
                        "icon": "0_maracuja"
                    },
                    {
                        "isCorrect": 3,
                        "title": "beurre",
                        "icon": "0_beurre"
                    },
                    {
                        "isCorrect": 4,
                        "title": "cabillaud'",
                        "icon": "0_cabillaud"                    
                    },
                ]
            }
        ],
        "mainUnit": "kg de CO<sub>2</sub>",
        "measures": [
            {
                "id": "0",
                "title": "Viande de porc",
                "isCorrect": "1",
                "mainValue": "0,6",
                "graphLevel": "1",
                "mainDesc": "0,6kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_viande"
            },
            {
                "id": "1",
                "title": "Maracuja",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "2",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_maracuja"
            },
            {
                "id": "2",
                "title": "Beurre",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "3",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_beurre"
            },
            {
                "id": "3",
                "title": "Cabillaud",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "4",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_cabillaud"
            },
            {
                "id": "4",
                "title": "Oeufs",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "4",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_oeufs"
            },
            {
                "id": "5",
                "title": "Jus de fruit",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "4",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_jusdefruit"
            },
            {
                "id": "6",
                "title": "Fromage frais",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "4",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_fromage"
            },
            {
                "id": "7",
                "title": "Poivrons",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "4",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_poivrons"
            },
        ],
        "icon": "0_frigo",
        "shortTitle": "Le Frigo",
        "objectLabel": "Aliment",
        "tutorialHelpMessage": "Trouvons des alimens&nbsp;!"
    },    
    {
        "id": "2",
        "status": "IDLE",
        "type": "",
        "title": "La plaque de cuisson",
        "desc": "Aide nous à préparer des pâtes pour le club avant le match de ce soir face à l’OM. Trouve la meilleure solution pour pour chauffer l’eau le plus rapidement",
        "quizz": [
            {
                "type": "MEASURE",
                "question": "Quelle est la configuration la plus économe ?",
                "successMessage": "Bravo, En effet pour battre l’OM les pates doivent cuire rapidement avec la bonne taille de cassreole et d’eau ainsi qu’un couvercle pour éviter l’évaporation trop importante",
                "failMessage": "Ce n’est pas la bonne réponse. Tu y étais presque mais tu sais maintenant que pour battre l’OM il faut manger des pâtes cuites dans casserole adéquate avec eau et couvercle&nbsp;!",
                "nextQuestionButtonLabel": "Mission suivante",
                "status": "UNDONE",
                "textResponses": []
            },
        ],
        "mainUnit": "minutes ",
        "measures": [
            {
                "id": "0",
                "title": "Casserole de Jean",
                "isCorrect": "0",
                "mainValue": "12",
                "graphLevel": "",
                "mainDesc": "trop grande trop d’eau + jauge haute  ",
                "secondaryDesc": "Qui éclaire fort&nbsp;!",
                "icon": "0_casserole1"
            },
            {
                "id": "1",
                "title": "Casserole d'Edith",
                "isCorrect": "1",
                "mainValue": "10",
                "graphLevel": "",
                "mainDesc": "Taille Ok, eau OK sans couvercle jauge moyenne",
                "secondaryDesc": "Basse consommation ",
                "icon": "0_casserole2"
            },
            {
                "id": "2",
                "title": "Casserole du voisin",
                "isCorrect": "0",
                "mainValue": "5",
                "graphLevel": "",
                "mainDesc": "Taille Ok, eau OK + jauge nickel ",
                "secondaryDesc": "Chauffe très vite&nbsp;!",
                "icon": "0_casserole3"
            }
        ],
        "icon": "0_plaquedecuisson",
        "shortTitle": "La plaque de cuissons",
        "objectLabel": "Casserole",
        "tutorialHelpMessage": "Cherche la cuisine&nbsp;!"
    },
    {
        "id": "3",
        "status": "IDLE",
        "type": "",
        "title": "Le lave vaisselle",
        "desc": "Après ce bon repas avec les copains du club, il est l’heure de faire tourner le lave vaisselle. Connais-tu les bons éco-gestes pour que le lave vaisselle puisse durer le plus longtemps possible&nbsp;? ",
        "quizz": [
            {
                "type": "MEASURE",
                "question": "Choisissez au moins 1 geste que vous jugez écologiques&nbsp;",
                "successMessage": "Bravo, En effet ces éco-gestes sont nécessaires pour éviter à papa et maman de racheter un lave vaisselle dans 6 mois&nbsp;!",
                "failMessage": "Ce n’est pas la bonne réponse. Tu y étais presque mais tu sais maintenant que taper des mains ne sers a rien si ce n’est faire rire les copains&nbsp;!",
                "nextQuestionButtonLabel": "Mission suivante",
                "status": "UNDONE",
                "textResponses": [
                    {
                        "isCorrect": 1,
                        "title": "Vider son assiette avant de l’insérer",
                        "icon": "0_ecogeste1"
                    },
                    {
                        "isCorrect": 1,
                        "title": "Mettre du produit vaisselle pour le lancement",
                        "icon": "0_ecogeste2"
                    },
                    {
                        "isCorrect": 0,
                        "title": "Le nettoyer au vinaigre entre chaque lavage",
                        "icon": "0_ecogeste3"
                    },
                    {
                        "isCorrect": 0,
                        "title": "Faire brûler une bougie avant de le vider",
                        "icon": "0_ecogeste4"
                    },
                    {
                        "isCorrect": 0,
                        "title": "Taper dans ses mains avant de le lancer",
                        "icon": "0_ecogeste5"
                    }
                ]
            }
        ],
        "mainUnit": "euros",
        "measures": [
            {
                "id": "0",
                "title": "Vider son assiette avant de l’insérer",
                "isCorrect": "1",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "(information 1)",
                "secondaryDesc": "(information 2)",
                "icon": "0_ecogeste1"
            },
            {
                "id": "1",
                "title": "Penser à nettoyer le joint de temps en temps",
                "isCorrect": "1",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "(information 1)",
                "secondaryDesc": "(information 2)",
                "icon": "0_ecogeste2"
            },
            {
                "id": "2",
                "title": "Le nettoyer au vinaigre entre chaque lavage",
                "isCorrect": "1",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "(information 1)",
                "secondaryDesc": "(information 2)",
                "icon": "0_ecogeste3"
            },
            {
                "id": "3",
                "title": "Faire brûler une bougie avant de le vider",
                "isCorrect": "0",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "(information 1)",
                "secondaryDesc": "(information 2)",
                "icon": "0_ecogeste4"
            },
            {
                "id": "4",
                "title": "Taper dans ses mains avant de le lancer ",
                "isCorrect": "0",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "(information 1)",
                "secondaryDesc": "(information 2)",
                "icon": "0_ecogeste5"
            },
        ],
        "icon": "0_lavevaisselle",
        "shortTitle": "Le lave-vaisselle",
        "objectLabel": "Geste",
        "tutorialHelpMessage": "Regardons dans le catalogue&nbsp;!"
    },
    {
        "id": "4",
        "status": "IDLE",
        "type": "",
        "title": "Le téléviseur&nbsp;!",
        "desc": "Après avoir réalisé quelques dribbles dans le salon un des joueurs a malencontreusement cassé son écran TV. Il vient juste de l’acheter et ne veut pas la changer&nbsp;!",
        "quizz": [
            {
                "type": "TEXT",
                "question": "Aide le à trouver la solution la plus adaptée&nbsp;?",
                "successMessage": "Bravo, en effet faire appel au SAV Hisense permet de réparer et de donner une nouvelle vie à la télé. C’est mieux que de la jeter pour en racheter une nouvelle non ?",
                "failMessage": "Ce n’est pas la bonne réponse. Tu y étais presque mais tu sais à présent que faire réparer son téléviseur est plus écologique et responsable que d’en racheter une neuve sans la faire diagnostiquer",
                "nextQuestionButtonLabel": "Mission suivante",
                "status": "UNDONE",
                "textResponses": [
                    {
                        "isCorrect": 1,
                        "title": "Appeler le Service Après Vente Hisense pour le réparer",
                        "icon": "0_tv1"
                    },
                    {
                        "isCorrect": 0,
                        "title": "Racheter une nouvelle Télé",
                        "icon": "0_tv2"
                    },
                    {
                        "isCorrect": 0,
                        "title": "Appeler le coach pour lui demander conseil",
                        "icon": "0_tv3"
                    }                    
                ]
            }
        ],
        "mainUnit": "litres d'eau (L)",
        "measures": [
            {
                "id": "0",
                "title": "Racheter une nouvelle Télé",
                "isCorrect": "0",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "Ai-je assez d'argent ?",
                "secondaryDesc": "La mienne n'est pas assez grande de tout de façon",
                "icon": "0_tv1"
            },
            {
                "id": "1",
                "title": "Appeler le coach pour lui demander conseil",
                "isCorrect": "0",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "Il saura quoi faire",
                "secondaryDesc": "C'est un bon gars en plus",
                "icon": "0_tv2"
            },
            {
                "id": "2",
                "title": "Appeler le Service Après Vente Hisense pour le réparer ",
                "isCorrect": "1",
                "mainValue": "1 000",
                "graphLevel": "",
                "mainDesc": "Je vais attendre trop longtemps :(",
                "secondaryDesc": "A tout les coups ça ne sera plus sous garantie :(",
                "icon": "0_tv3"
            },
        ],
        "icon": "0_televiseur",
        "shortTitle": "Le téléviseur",
        "objectLabel": "Action",
        "tutorialHelpMessage": "Direction le canapé&nbsp;!"
    },
    {
        "id": "5",
        "status": "IDLE",
        "type": "Le Lave-linge",
        "title": "Le Lave-linge",
        "desc": "Le coach fait tourner son lave linge avec 1 seul maillot sale à l’intérieur. C’est du gaspillage énergétique et du gâchis d’eau Coach ! <br/> Il est préférable de la faire tourner quand elle est pleine",
        "quizz": [
            {
                "type": "FRUIT",
                "question": "Mettez le maximum d'éléments lavable dans la machine&nbsp;!",
                "successMessage": "Bravo, en effet lancer une machine quand elle est pleine permet de ne pas gaspiller de l’électricité et l’eau de manière inutile.&nbsp;!",
                "failMessage": "Ce n’est pas la bonne réponse. Tu y étais presque mais tu sais à présent que faire ctourner une machine à moitié vide utilise de l’eau et de l’électricité de manière inutile. Et puis ça réduit la facture des parents. Et on ne met pas le chat dans la machine même s'il est plein de boue :) &nbsp;!",
                "nextQuestionButtonLabel": "Mission suivante",
                "status": "UNDONE",
                "textResponses": []
            }
        ],
        "mainUnit": " minutes",
        "measures": [
            {
                "id": "0",
                "title": "Ballon de foot",
                "isCorrect": "0",
                "mainValue": "2",
                "graphLevel": "3",
                "mainDesc": "2 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_ballonfoot"
            },
            {
                "id": "1",
                "title": "Chaussures à crampons",
                "isCorrect": "0",
                "mainValue": "7",
                "graphLevel": "6",
                "mainDesc": "7 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_chaussurescrampon"
            },
            {
                "id": "2",
                "title": "Play Station 4",
                "isCorrect": "0",
                "mainValue": "10",
                "graphLevel": "8",
                "mainDesc": "10 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_playstation"
            },
            {
                "id": "3",
                "title": "Débardeur",
                "isCorrect": "1",
                "mainValue": "10",
                "graphLevel": "8",
                "mainDesc": "10 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_debardeur"
            },
            {
                "id": "4",
                "title": "Chaussettes",
                "isCorrect": "1",
                "mainValue": "10",
                "graphLevel": "8",
                "mainDesc": "10 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_chaussettes"
            },
            {
                "id": "5",
                "title": "Serviettes",
                "isCorrect": "1",
                "mainValue": "10",
                "graphLevel": "8",
                "mainDesc": "10 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_serviette"
            },
            {
                "id": "6",
                "title": "Caleçons",
                "isCorrect": "1",
                "mainValue": "10",
                "graphLevel": "8",
                "mainDesc": "10 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_calecon"
            },
            {
                "id": "7",
                "title": "Chat",
                "isCorrect": "0",
                "mainValue": "10",
                "graphLevel": "8",
                "mainDesc": "10 minutes",
                "secondaryDesc": "pour 1 litre d'eau",
                "icon": "0_chat"
            },
        ],
        "icon": "0_lavelinge",
        "shortTitle": "Le lave-linge",
        "objectLabel": "Element",
        "tutorialHelpMessage": "C'est l'heure de faire une machine &nbsp;!"
    },
    {
        "id": "6",
        "status": "IDLE",
        "type": "Le four",
        "title": "Du pain sur la planche&nbsp;!",
        "desc": "Trouvez le moyen le plus économe pour faire un gateau.",
        "quizz": [
            {
                "type": "MEASURE",
                "question": "Quel est la façon la plus économe de faire son gateau&nbsp;?",
                "successMessage": "Pour les trajets courts, je me déplace à pieds ou en vélo. J'évite de prendre la voiture, car en plus d'être néfaste pour l'environnement, elle ne vous permettra pas d'arriver plus vite à la boulangerie&nbsp;!",
                "failMessage": "Pour les trajets courts, je me déplace à pied ou en vélo. J'évite de prendre la voiture, car en plus d'être néfaste pour l'environnement, elle ne vous permettra pas d'arriver plus vite à la boulangerie&nbsp;!",
                "nextQuestionButtonLabel": "Question suivante",
                "status": "UNDONE",
                "textResponses": []
            },            
        ],
        "mainUnit": "kg de CO<sub>2</sub>",
        "measures": [
            {
                "id": "0",
                "title": "150° pendant 20 mn",
                "isCorrect": "0",
                "mainValue": "0,6",
                "graphLevel": "3",
                "mainDesc": "0,6kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_four1"
            },
            {
                "id": "1",
                "title": "250° pendant 30 mn",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "6",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_four2"
            },
            {
                "id": "2",
                "title": "180° pendant 10 mn",
                "isCorrect": "1",
                "mainValue": "0",
                "graphLevel": "8",
                "mainDesc": "0kg de CO<sub>2</sub>",
                "secondaryDesc": "pour 2 km",
                "icon": "0_four3"
            }
        ],
        "icon": "0_four",
        "shortTitle": "Le four",
        "objectLabel": "Technique",
        "tutorialHelpMessage": "En route&nbsp;!"
    },
    {
        "id": "7",
        "status": "IDLE",
        "type": "Le chauffage",
        "title": "Chauffe qui peut&nbsp;!",
        "desc": "Trouvez la température idéale pour diminuer la consommation d'énergie liée au chauffage.",
        "quizz": [
            {
                "type": "MEASURE",
                "question": "Quelle est la température idéale pour bien chauffer la pièce&nbsp;?",
                "successMessage": "En hiver, baisser la température de 20°C à 19°C permet de réaliser jusqu'à 7% d'économies d'énergie en ayant tout aussi chaud&nbsp;!",
                "failMessage": "19°C, c'est la température idéale pour avoir tout aussi chaud dans la pièce à vivre tout en réalisant des économies d'énergie&nbsp;!",
                "nextQuestionButtonLabel": "Question suivante",
                "status": "UNDONE",
                "textResponses": []
            },
            {
                "type": "TEXT",
                "question": "Question Bonus : <br>Pour dormir, quelle est la température idéale de la chambre&nbsp;?",
                "successMessage": "En hiver, baisser la température de 1°C dans la chambre par rapport à la pièce à vivre permet d'économiser de l'énergie pour un confort optimal&nbsp;!",
                "failMessage": "La température idéale de la chambre doit être 1°C en dessous de celle de la pièce principale.",
                "nextQuestionButtonLabel": "Mission suivante",
                "status": "UNDONE",
                "textResponses": [
                    {
                        "isCorrect": 1,
                        "title": "1°C de moins"
                    },
                    {
                        "isCorrect": 0,
                        "title": "La même température"
                    },
                    {
                        "isCorrect": 0,
                        "title": "2°C de plus"
                    }
                ]
            }
        ],
        "mainUnit": "°C (Celcius)",
        "measures": [
            {
                "id": "0",
                "title": "Chauffage 1",
                "isCorrect": "0",
                "mainValue": "22",
                "graphLevel": "",
                "mainDesc": "22°C (Celcius)",
                "secondaryDesc": "",
                "icon": "temp_22"
            },
            {
                "id": "1",
                "title": "Chauffage 2",
                "isCorrect": "0",
                "mainValue": "18",
                "graphLevel": "",
                "mainDesc": "18°C (Celcius)",
                "secondaryDesc": "",
                "icon": "temp_18"
            },
            {
                "id": "2",
                "title": "Chauffage 3",
                "isCorrect": "1",
                "mainValue": "19",
                "graphLevel": "",
                "mainDesc": "19°C (Celcius)",
                "secondaryDesc": "",
                "icon": "temp_19"
            }
        ],
        "icon": "mission_isolation",
        "shortTitle": "Le chauffage",
        "objectLabel": "radiateur",
        "tutorialHelpMessage": "Mesurons les radiateurs&nbsp;!"
    },
    {
        "id": "8",
        "status": "IDLE",
        "type": "L'éléctricité",
        "title": "Je veille à mes appareils&nbsp;!",
        "desc": "De nombreux appareils branchés consomment de l'énergie, à vous de les trouver&nbsp;!",
        "quizz": [
            {
                "type": "MEASURE",
                "question": "Quel est l'appareil en veille qui consomme le plus d'énergie&nbsp;?",
                "successMessage": "En veille, la console est l'appareil qui consomme le plus d'énergie. Eteindre tous ses appareils en veille permet d'économiser 80 euros par an.  ",
                "failMessage": "Dommage ! En veille, la console est l'appareil qui consomme le plus d'énergie... Eteindre tous ses appareils en veille permet d'économiser 80 euros par an.  ",
                "nextQuestionButtonLabel": "Question suivante",
                "status": "UNDONE",
                "textResponses": []
            },
            {
                "type": "TEXT",
                "question": "Question Bonus : <br>Quel est le moyen le plus pratique pour éteindre ses appareils&nbsp;? ",
                "successMessage": "Bravo ! En effet, certains appareils n'ont même plus d'interrupteur on/off. La multiprise est donc l'outil idéal pour éteindre complétement plusieurs appareils simultanément.",
                "failMessage": "Dommage ! Comme certains appareils n'ont plus d'interrupteur on/off, la multiprise reste l'outil idéal pour éteindre complétement plusieurs appareils simultanément.",
                "nextQuestionButtonLabel": "Mission suivante ",
                "status": "UNDONE",
                "textResponses": [
                    {
                        "isCorrect": 1,
                        "title": "Multiprise avec interrupteur"
                    },
                    {
                        "isCorrect": 0,
                        "title": "Débrancher tous ses appreils"
                    },
                    {
                        "isCorrect": 0,
                        "title": "Éteindre le compteur éléc'"
                    }
                ]
            }
        ],
        "mainUnit": " kWh / an",
        "measures": [
            {
                "id": "0",
                "title": "Télévision ",
                "isCorrect": "0",
                "mainValue": "8,5",
                "graphLevel": "",
                "mainDesc": "8,5 kWh / an",
                "secondaryDesc": "en veille",
                "icon": "tv"
            },
            {
                "id": "1",
                "title": "Box internet",
                "isCorrect": "0",
                "mainValue": "7,3",
                "graphLevel": "",
                "mainDesc": "7,3 kWh / an",
                "secondaryDesc": "",
                "icon": "box"
            },
            {
                "id": "2",
                "title": "Console de jeux ",
                "isCorrect": "1",
                "mainValue": "9,1",
                "graphLevel": "",
                "mainDesc": "9,1 kWh / an",
                "secondaryDesc": "",
                "icon": "manette"
            }
        ],
        "icon": "mission_prise",
        "shortTitle": "L'éléctricité",
        "objectLabel": "appareil",
        "tutorialHelpMessage": ""
    },
]
export default {missions}