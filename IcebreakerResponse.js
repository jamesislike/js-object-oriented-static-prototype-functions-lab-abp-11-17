function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  //emails = ["blah"]
  return emails.map(function(email){
    retrun new IcebreakerResponse(email)
  })
}
