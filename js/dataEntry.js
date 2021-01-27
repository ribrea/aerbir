function _isId(des){
    if(des.includes("#")){return 1;}
    return 0;
}
function _isClass(des){
    if(des.includes(".")){return 1;}
    return 0;
}
function _setInner(des , data){
        if(_isClass(des)) {
            document.getElementsByClassName(des.replace(".", "")).innerHTML = data
            return 1;
        }else if(_isId(des)){
            document.getElementById(des.replace("#","")).innerHTML=data;
            return 1;
        }
        return 0;
}
function _setTittle(title){
    document.title=title;
}
function _setAttr(des , attrName , attrVal){
    if(_isClass(des)) {
        document.getElementsByClassName(des.replace(".", "")).setAttribute(attrName , attrVal);
        return 1;
    }else if(_isId(des)){
        document.getElementById(des.replace("#","")).setAttribute(attrName , attrVal);
        return 1;
    }
}





function HomeText(homeData) {
    _setTittle(homeData[0].title);
    _setInner("#name",homeData[0].name);
    _setInner("#email",homeData[0].email);
    _setInner("#phone",homeData[0].phone);
    _setInner("#object",homeData[0].object);
    _setAttr("#profilePic" , 'src' ,homeData[0].profilePic);
}

function Skill(skillData) {
    let x=Object.keys(skillData).length;
    if (x===0){
        document.getElementById("skills").remove()
    }
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("p");
        _elementDiv.setAttribute("class"," skill");
        _elementDiv.setAttribute("id","skill"+i);
        document.getElementById("skills").appendChild(_elementDiv);
        document.getElementById("skill"+i).innerHTML= "<p>"+skillData[i].title.toLocaleUpperCase()+"</p>"

    }

}
function Language(langData) {

    let x=Object.keys(langData).length;
    if (x===0){
        document.getElementById("lang").remove()
    }
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("p");
        _elementDiv.setAttribute("class"," skill");
        _elementDiv.setAttribute("id","lang"+i);
        document.getElementById("lang").appendChild(_elementDiv);
        document.getElementById("lang"+i).innerHTML= "<p>"+langData[i].title+"</p>"
    }

}
function Experience(experienceData) {
    let x=Object.keys(experienceData).length;
    if (x===0){
        document.getElementById("experiences").remove()
    }
    let i;
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("div");
        _elementDiv.setAttribute("class","experienceBoxBox");
        _elementDiv.setAttribute("id","experience"+i);
        document.getElementById("experiences").appendChild(_elementDiv);
        let exYear=experienceData[0].endDate-experienceData[i].startDate;
        document.getElementById("experience"+i).innerHTML=
            "<h4 class='experienceTitle'>"+experienceData[i].title+"</h4>" +
            "<h5 class='experienceRole' >"+experienceData[i].at+"</h5>" +
            "<p class='experienceContent'>" +experienceData[i].des+ "</p>" +
            "<p class='experienceTime'>"
            +experienceData[i].startDate+
            " - "+
            experienceData[i].endDate+
            " - "+
            exYear+
            " years"+

            "</p>"


    }
}
function Education(educationData) {
    let x=Object.keys(educationData).length;
    if (x===0){
        document.getElementById("educations").remove()
    }
    let i;
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("div");
        _elementDiv.setAttribute("class","educationBoxBox");
        _elementDiv.setAttribute("id","educations"+i);
        document.getElementById("educations").appendChild(_elementDiv);
        document.getElementById("educations"+i).innerHTML=
            "<h4 class='educationTitle'>"+educationData[i].title+"</h4>" +
            "<h5 class='educationRole'>"+educationData[i].study+"</h5>" +
            "<p class='educationContent'>"+educationData[i].grade+"</p>" +
            "<p class='educationTime'>"+educationData[i].endDate+"</p>"

    }
}
function Project(projectData) {
    let x=Object.keys(projectData).length;
    if (x===0){
        document.getElementById("projects").remove()
    }
    let i;
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("div");
        _elementDiv.setAttribute("class","projectBoxBox");
        _elementDiv.setAttribute("id","project"+i);
        document.getElementById("projects").appendChild(_elementDiv);
        document.getElementById("project"+i).innerHTML=
            "<h4 class='projectBoxTitle'>"+projectData[i].title+"</h4>" +
            "<h5 class='projectBoxLink'><a class='projectBoxLink' target='_blank' href='"+projectData[i].href+"'>"+projectData[i].link+"</a></h5>" +
            "<p class='projectContent'>"+projectData[i].des+"</p>";
    }
}
function Activity(activityData) {

    let x=Object.keys(activityData).length;
    if (x===0){
        document.getElementById("activates").remove()
    }

    let i;
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("div");
        _elementDiv.setAttribute("class","activityBoxBox");
        _elementDiv.setAttribute("id","activity"+i);
        document.getElementById("activates").appendChild(_elementDiv);
        document.getElementById("activity"+i).innerHTML=
            "<h4 class='activityTitle'>"+activityData[i].title+"</h4>" +
            "<p class='activityContent'>"+activityData[i].des+"</p>";
    }
}
function Article(articleData) {
    let x=Object.keys(articleData).length;
    if (x===0){
        document.getElementById("articles").remove()
    }
    let i;
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("div");
        _elementDiv.setAttribute("class","articleBoxBox");
        _elementDiv.setAttribute("id","article"+i);
        document.getElementById("articles").appendChild(_elementDiv);
        document.getElementById("article"+i).innerHTML=
            "<h4 class='articleTitle'>"+articleData[i].title+"</h4>" +
            "<h5 class='articlesLink'><a target='_blank' href='"+articleData[i].href+"' class='articlesLink'>"+articleData[i].link+"</a></h5>" +
            "<p class='articleContent'>"+articleData[i].des+"</p>" +
            "<p class='articlesTimeAt'>"+articleData[i].time+" - "+articleData[i].at+"</p>";
    }
}
function Links(linksData) {
    let x=Object.keys(linksData).length;
    let i;
    for ( i=0 ; i < x; i++){
        let _elementA = document.createElement("a");
        let _elementI = document.createElement("i");
        _elementA.setAttribute("href",linksData[i].href);
        _elementA.setAttribute("id", "headerSocialLinkA"+i);
        _elementA.setAttribute("class", "socialIcon");
        _elementA.setAttribute("target", "_blank");
        _elementI.setAttribute("class",linksData[i].icon+" headerSocialLink");
        document.getElementById("socials").appendChild(_elementA);
        document.getElementById("headerSocialLinkA"+i).appendChild(_elementI);
    }
}
