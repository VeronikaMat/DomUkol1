



 const jmeno = prompt("Prosím zadej své jméno bez diakritiky:").trim()
 const prijmeni = prompt("Prosím zadej své příjmení bez diakritiky:").trim()

 

 const emailJmeno = jmeno.slice(0, 3).toLowerCase()
 const emailPrijmeni = prijmeni.slice(0, 5).toLowerCase()
 
 
 const emailovaAdresa = `${emailPrijmeni}${emailJmeno}@fit.cvut.cz`
 
 document.body.innerHTML= emailovaAdresa






