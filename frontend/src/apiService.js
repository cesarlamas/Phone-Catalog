const PHONE_URL = "http://localhost:3001/phones"

exports.fetchPhones = async() =>  {
    const phones = await fetch(PHONE_URL)
    return await phones.json()
  }

exports.fetchOnePhone = async(id) => {
    const onePhone = await fetch(`${PHONE_URL}/${id}`)
    return await onePhone.json()
}

exports.addNewPhones = async (phone) => {
    console.log("executing the add http call")
    console.log(Date.now())
    const res = await fetch("http://localhost:3001/phones", {
        method: "POST",
        body : JSON.stringify(phone),
        headers : {
            'content-Type' : 'application/json'
        }
    });
    console.log("returning res in json")
    console.log(Date.now())
    return await res.json();
}

exports.deleteById = async(id) => {
    await fetch(`${PHONE_URL}/${id}`, {
      method : `DELETE`,
      headers : {
          'Content-Type': 'application/json',
      }
  })
  alert("item deleted");
}
