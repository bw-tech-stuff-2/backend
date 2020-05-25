BE Endpoints

Register New Owner POST to /api/owners/auth/register

{
     "username":     // String, Unique, NEEDED
     "password":     // String, NEEDED
     "ownerName":    // String, NEEDED
     "email":        // String, Not Needed
 }


Login New Owner POST to /api/owners/auth/login

{
    "username":     // String, NEEDED
    "password":     // String, NEEDED
    "ownerName":    // String, NEEDED
}

Register New Renter POST to /api/renters/auth/register

{
     "username":   // String, Unique, NEEDED
     "password":   // String, NEEDED
     "renterName":   // String, NEEDED
     "email":     // String, Not Needed
 }


Login New Renter POST to /api/renters/auth/login

{
    "username":   // String, unique, NEEDED
    "password":   // String, NEEDED
    "renterName":   // String, NEEDED
}

