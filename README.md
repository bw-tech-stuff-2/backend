BE Endpoints



# Owners
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| username | string | yes | yes | owners username |
| password | string | yes | no | owners password |
| ownerName | string | yes | no | owners name |
| email | string | no | no | owners email) |

Register New Owner POST to /api/owners/auth/register

 {
     username:  Doc               // String, Unique, NEEDED
     password:  backtothefuture   // String, NEEDED
     ownerName: Emmett Brown      // String, NEEDED
     email:     docbrown@mail.com // String, Not Needed
 }


Login New Owner POST to /api/owners/auth/login

 {
    username:  Doc                // String, NEEDED
    password:  backtothefuture    // String, NEEDED
    ownerName: Emmett Brown       // String, NEEDED
 }

Register New Renter POST to /api/renters/auth/register

 {
     username:   flyguy            // String, Unique, NEEDED
     password:   backtothefuture   // String, NEEDED
     renterName: Marty McFly       // String, NEEDED
     email:      flyguy@mail.com   // String, Not Needed
 }


Login New Renter POST to /api/renters/auth/login

 {
    username:    flyguy            // String, unique, NEEDED
    password:    backtothefuture   // String, NEEDED
    renterName:  Marty McFly       // String, NEEDED
 }



Owner goes to Tech and returns array of tech GET to /api/tech/

[
    {
        "id": 1,
        "techItem": "Time Traveling DeLorean",
        "techDescription": "This car can travel through time, please return yesterday.",
        "owner": "Doc",
        "price": "$7.00"
    },
    {
        "id": 2,
        "techItem": "Mechanical Arm",
        "techDescription": "Need a hand?",
        "owner": "techgirl",
        "price": "$1,000,000"
    }
]

Owner gets tech by id GET to /api/tech/:id
Example /api/tech/1

    {
        "id": 1,      // this is the tech id
        "techItem": "Time Traveling DeLorean",
        "techDescription": "This car can travel through time, please return yesterday.",
        "owner": "Doc",
        "price": "$7.00"
    }

   Owner adds item to tech list POST to api/tech/

    {
        "techItem": "Time Traveling DeLorean",
        "techDescription": "This car can travel through time, please return yesterday.",
        "owner": "Doc",
        "price": "$70.00",
        "ownersId": "2"
    }

    Owner edits item on tech list PUT to api/tech/:id
    example api/tech/1

    {
        "techItem": "Time Traveling DeLorean",
        "techDescription": "This car can travel through time, please return yesterday.",
        "owner": "Doc",
        "price": "$700.00"
    }

    Owner deletes item on tech list DELETE to api/tech/:id
    example api/tech/1


    Renter goes to request and returns an array of tech GET to /api/request

    [
    {
        "id": 1,
        "techItem": "Time Traveling DeLorean",
        "techDescription": "This car can travel through time, please return yesterday.",
        "owner": "Doc",
        "price": "$7.00",
        "request": "I need this now!!",
        "rentersId": 1,
        "username": "flyguy"
    },
    {
        "id": 2,
        "techItem": "Mechanical Arm",
        "techDescription": "Need a hand?",
        "owner": "techgirl",
        "price": "$1,000,000",
        "request": "I need this by Friday",
        "rentersId": 2,
        "username": "alchemist"
    }
    ]

    Renter gets tech by id GET to /api/request/:id
    example /api/request/2 

    {
    "id": 2,
    "techItem": "Mechanical Arm",
    "techDescription": "Need a hand?",
    "owner": "techgirl",
    "price": "$1,000,000",
    "request": "I need this by Friday",
    "rentersId": 2,
    "username": "alchemist"
    }

    Renter adds tech by POST to /api/request/
    example /api/request/

    {
        "techId": "1",         //the id of the tech not the id of the request
        "request": "yessss pleasessssss",
        "rentersId": "2"
    }

    Renter edits by id PUT to /api/request/:id
    example /api/request/2

    {
    "request": "I need this now!!",
    "rentersId": 2
    }

    Renter deletes request by id DELETE to /api/request/:id
    example /api/request/2

    



