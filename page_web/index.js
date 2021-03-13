function comment(num){
    if (num==0){
        return "Et rate lamentablement..."
    }else if (num<3){
        return "C'est peu efficace..."
    }else if(num<5){
        return "C'est moyennement efficace."
    }else{
        return "C'est super efficace!"
    }
}
function end(){
    document.getElementById("attack").setAttribute("disabled","")
    document.getElementById("defend").setAttribute("disabled","")
}
p1=document.getElementById("pok1")
p2=document.getElementById("pok2")
choice=document.getElementById("prompt")
ref={"Bastien":{"src":"magneti.png","attack":"Bastien raconte une blague vaseuses!"},
"Quentin":{"src":"elctrode.png","attack":"Quentin envoie une meta-balise!"},
"Tymothe":{"src":"canarticho.png","attack":"Tymothe utilise son potentiel (trop) bien caché et attaque!"},
"Christophe":{"src":"colossinge.png","attack":"Cristophe provoque un hard reboot de son adversaire(ne le faites surtout pas....)!"},
"Mathieu Paris":{"src":"saquedeneu.png","attack":"Mathieu gonfle son propre ego et choque son adversaire!"},
"Lady Catherine":{"src":"Lippoutou.png","attack":"Lady Catherine instantly translate the opponent thoughts and confuse him!"},
"Laurence":{"src":"Ramol.png","attack":"Laurence emet sa poudre dodo!"},
"Morgane":{"src":"rondoudou.png","attack":"Morgane utilise le protocole ipv4 pour hack le compte de son adversaire!"},
"Lucie":{"src":"Psykokwak.png","attack":"Lucie pose une énigme à son adversaire qui lui provoque de violent maux de tête!"},
"Sophie":{"src":"miaouss.png","attack":"Sophie modifie le planning de son adversaire!"},
"Christine":{"src":"coconfort.png","attack":"Christine utilise son assertivité pour contrer l'aggressivité de son opposant!"}
}
list=["Bastien","Quentin","Tymothe","Christophe","Mathieu Paris","Lady Catherine","Laurence","Morgane","Lucie","Sophie","Christine"]
feminine=["Lady Catherine","Laurence","Morgane","Lucie","Sophie","Christine"]
sel=document.getElementById("choosep")
butval=document.getElementById("validate")
sel.addEventListener("change",function(){
    p1.setAttribute("src",ref[document.getElementById("choosep").value]["src"])
    p1.setAttribute("rel",sel.value)

})
butval.addEventListener("click",function(){
    var randp=Math.floor(Math.random()*list.length)
    
    p2.setAttribute("src",ref[list[randp]]["src"])
    p2.setAttribute("rel",list[randp])
    var article=""
    p1.removeAttribute("hidden")
    p2.removeAttribute("hidden")

    if (feminine.includes(p2.getAttributeNode("rel").value)){
        article="une "
    }else{
        article="un "
    }
    document.getElementById("prompt").innerHTML= "Votre "+sel.value +" rencontre "+article+p2.getAttributeNode("rel").value+" sauvage!"
    document.getElementById("prompt").removeAttribute("hidden")
    document.getElementById("playerpv").removeAttribute("hidden")
    document.getElementById("attack").removeAttribute("hidden")
    document.getElementById("defend").removeAttribute("hidden")
    document.getElementById("otherpv").removeAttribute("hidden")
    document.getElementById("validate").setAttribute("hidden","")
    document.getElementById("choosep").setAttribute("hidden","")
    document.getElementById("text").setAttribute("hidden","")


})
pvj=30
pva=30
butatt=document.getElementById("attack")
butdef=document.getElementById("defend")
butatt.addEventListener("click",function(){
    var attaque=ref[p1.getAttribute("rel")]["attack"]+"<br/>"
    degj=Math.floor(Math.random()*6)
    pva-=degj
    document.getElementById("otherpv").innerHTML=pva
    if (pva<=0){
        document.getElementById("end").innerHTML="YOU WON!!!"
        document.getElementById("end").removeAttribute("hidden")
        document.getElementById("rst").removeAttribute("hidden")
        end()
    }
    attaque+= comment(degj)+"<br/>"
    dega=Math.floor(Math.random()*6)
    attaque+=ref[p2.getAttribute("rel")]["attack"]+"<br/>"
    pvj-=dega
    attaque+= comment(dega)+"<br/>"
    document.getElementById("prompt").innerHTML=attaque
    document.getElementById("playerpv").innerHTML=pvj
    if (pvj<=0){
        document.getElementById("end").innerHTML="YOU LOSE!"
        document.getElementById("end").removeAttribute("hidden")
        document.getElementById("rst").removeAttribute("hidden")
        end()
    }


})
butdef.addEventListener("click",function(){
    var attaque=p1.getAttribute("rel")+" se défend."+"<br/>"
    dega=Math.floor(Math.random()*3)
    attaque+=ref[p2.getAttribute("rel")]["attack"]+"<br/>"
    pvj-=dega
    attaque+= comment(dega)+"<br/>"
    document.getElementById("prompt").innerHTML=attaque
    document.getElementById("playerpv").innerHTML=pvj
    if (pvj<=0){
        document.getElementById("end").innerHTML="YOU LOSE!"
        document.getElementById("end").removeAttribute("hidden")
        document.getElementById("rst").removeAttribute("hidden")
        end()
    }


})
butrst=document.getElementById("rst")
butrst.addEventListener("click",function(){
    document.getElementById("validate").removeAttribute("hidden")
    document.getElementById("choosep").removeAttribute("hidden")
    document.getElementById("text").removeAttribute("hidden")
    document.getElementById("prompt").setAttribute("hidden","")
    document.getElementById("playerpv").setAttribute("hidden","")
    document.getElementById("playerpv").innerHTML=30
    pvj=30
    document.getElementById("attack").setAttribute("hidden","")
    document.getElementById("defend").setAttribute("hidden","")
    document.getElementById("otherpv").setAttribute("hidden","")
    document.getElementById("otherpv").innerHTML=30
    pva=30
    document.getElementById("pok1").setAttribute("hidden","")
    document.getElementById("pok2").setAttribute("hidden","")
    document.getElementById("end").setAttribute("hidden","")
    document.getElementById("rst").setAttribute("hidden","")
    document.getElementById("attack").removeAttribute("disabled")
    document.getElementById("defend").removeAttribute("disabled")
})
