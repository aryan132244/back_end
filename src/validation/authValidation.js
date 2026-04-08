exports.validname= (name) =>{
    const nameregex = /^[a-zA-Z0-9_-]{5,20}$/
    return nameregex.test.test(name)
}

exports.validemail= (email) =>{
    const emailregex = / ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailregex.test.test(email)
}

exports.validpassword= (password) =>{
    const passwordregex = / ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return passwordregex.test.test(password)
}
