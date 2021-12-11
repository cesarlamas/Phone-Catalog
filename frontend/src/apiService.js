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
    const res = await fetch("http://localhost:3001/phones", {
        method: "POST",
        body : JSON.stringify(phone),
        headers : {
            'content-Type' : 'application/json'
        }
    });
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
