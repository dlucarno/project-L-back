
## http://127.0.0.1:3333/api/formulaires/
    recupere tous le formulaire 
    
    response :  
    [
        {
            "id": 2,
            "name": "Inscription",
            "created_at": "2022-04-01T17:49:00.000+01:00",
            "updated_at": "2022-04-01T17:49:00.000+01:00"
        },
        {
            "id": 1,
            "name": "Avis",
            "created_at": "2022-04-01T16:41:05.000+01:00",
            "updated_at": "2022-04-01T16:41:05.000+01:00"
        }
    ]

## http://127.0.0.1:3333/api/formulaire/:formulaire_id

    recupere un formulaire

    response :

    {
        "id": 1,
        "name": "Avis",
        "created_at": "2022-04-01T16:41:05.000+01:00",
        "updated_at": "2022-04-01T16:41:05.000+01:00"
    }

##   http://127.0.0.1:3333/api/fields/:formulaire_id

    recupere tous les champs d'un formulaires 

    response :

    [
        {
            "id": 4,
            "name": "VTextField",
            "label": "username",
            "formulaire_id": 2,
            "created_at": "2022-04-01T16:49:00.000Z",
            "updated_at": "2022-04-01T16:49:00.000Z"
        },
        {
            "id": 5,
            "name": "VTextField",
            "label": "password",
            "formulaire_id": 2,
            "created_at": "2022-04-01T16:49:01.000Z",
            "updated_at": "2022-04-01T16:49:01.000Z"
        },
        {
            "id": 6,
            "name": "VAutocomplete",
            "label": "couuntry",
            "formulaire_id": 2,
            "created_at": "2022-04-01T16:49:01.000Z",
            "updated_at": "2022-04-01T16:49:01.000Z"
        }
    ]

## http://127.0.0.1:3333/api/props/:field_id

    recupere toutes le props d'un champs 

    response : 

    [
        {
            "id": 12,
            "name": "filled",
            "value": 1,
            "field_id": 5,
            "created_at": "2022-04-01T16:49:01.000Z",
            "updated_at": "2022-04-01T16:49:01.000Z"
        },
        {
            "id": 13,
            "name": "outlined",
            "value": 0,
            "field_id": 5,
            "created_at": "2022-04-01T16:49:01.000Z",
            "updated_at": "2022-04-01T16:49:01.000Z"
        },
        {
            "id": 14,
            "name": "password",
            "value": 1,
            "field_id": 5,
            "created_at": "2022-04-01T16:49:01.000Z",
            "updated_at": "2022-04-01T16:49:01.000Z"
        }
    ]

## http://127.0.0.1:3333/api/items/field_id

    recuperes toute les data que contient un select

    response : 

    [
        {
            "id": 1,
            "value": "Benin",
            "field_id": 6,
            "created_at": "2022-04-01T16:49:02.000Z",
            "updated_at": "2022-04-01T16:49:02.000Z"
        },
        {
            "id": 2,
            "value": "togo",
            "field_id": 6,
            "created_at": "2022-04-01T16:49:02.000Z",
            "updated_at": "2022-04-01T16:49:02.000Z"
        },
        {
            "id": 3,
            "value": "Cote d'ivore",
            "field_id": 6,
            "created_at": "2022-04-01T16:49:02.000Z",
            "updated_at": "2022-04-01T16:49:02.000Z"
        }
    ]


## http://127.0.0.1:3333/api/formulaire/store/ 

    enregistre  le titre d'un formulaire et renvoie son id 

    data : 

    {
        "name":"formulaire"
    }

    response : 

    {
        "messages": "success",
        "id": 1
    }

## http://127.0.0.1:3333/api/fields/store/

    enregistre tout un champs d'un formulaire et renvois ont id 

    data :

    {

		"name":"VAutocomplete",

		"label":"country",

		"formulaire_id":1

	}

    response  :

    {
        "messages": "success",
        "id": 2
    }


## http://127.0.0.1:3333/api/props/store/ 

    enregistre une props d'un champs et renvoie son id 

    data :

    {
		"name":"outlinded",
		"value": false,
		"field_id":1
    }

    response  :

    {
        "messages": "success",
        "id": 1
    }

##  http://127.0.0.1:3333/api/items/store/

    enrigistre un data (un item ) d'un select et renvoie sont id 

    data : 

    {
        "value":"benin",
        "field_id":1
    }

    response  :

    {
        "messages": "success",
        "id": 3
    }

