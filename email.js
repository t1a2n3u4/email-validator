   console.log("this is my js")
   let result={
        "tag": "",
        "free":  true,
        "role":  false,
        "user":  "tanu",
        "email":  "tanu@gmail.com",
        "score":  0.48,
        "state":  "undeliverable",
        "domain":  "gmail.com",
        "reason":  "invalid_mailbox",
        "mx_found":  true,
        "catch_all":  null,
        "disposable":  false,
        "smtp_check":  false,
        "did_you_mean":  "",
        "format_valid":  true
      
}

submitbtn.addEventListener("click",async(e)=>{
    e.preventDefault()
   console.log("clicked") 
   resultcont.innerHTML=`<img width="233" src="img/loading.svg"alt="">`
    let key="ema_live_Qdl0jdx8Nl0ZX3gN8mSM9ADyNxVmUnBkfphvXDS7"
    let  email=document.getElementById("username").value
let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res=await fetch(url)
let result=await res.json()
let str=``
for (key of Object.keys(result)){
    if(result[key]!=="" && result[key]!==" "){
    str = str+`<div>${key}:${result[key]}</div>`
    }
}
console.log(str)
resultcont.innerHTML=str

})

