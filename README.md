BE Endpoints

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



