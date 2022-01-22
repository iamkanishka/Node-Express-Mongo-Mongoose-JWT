
exports.emailcheck=(email)=>{
 
    const emailreq = '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'.test(email)
    return emailreq 
}