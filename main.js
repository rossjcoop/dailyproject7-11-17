// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line -------


///////////////////////////////////////////////////////////////
//{ ///or
///or
//formData.forEach(function(item)){            Was trying to loop through option data:(
//let optionlist = []
//for(i = 0; i < formData.length; i++ ){
//optionlist.push(formData[i].options)
//}
//let languageoptions = []
//for(i = 0; i < optionlist.length; i++){
//languageoptions.push(optionlist[i].label)
//}

let myfields = document.getElementById("fields")////the div for the form
let myform = document.createElement("form")
myfields.appendChild(myform)

formData.forEach(function(item){
  let inputtype = item.type
  let inputlabel = item.label
  let inputid = item.id
  let inputicon = item.icon
  let inputoption = item.option
  //let inputoptions = item.option.label

  if(inputtype === "text" || "email" || "tel"){
   let myinput = document.createElement("input") 
   myinput.setAttribute("type", inputtype)
   myinput.setAttribute("placeholder", inputlabel)
   myinput.setAttribute("id", inputid)
   myform.appendChild(myinput)
 } else if(inputtype === "textarea"){
   let mytext = document.createElement("textarea")
   mytext.setAttribute("type", inputtype)
   mytext.setAttribute("placeholder", inputlabel)
   mytext.setAttribute("id", inputid)
   myform.appendChild(mytext)
 } else if(inputtype === "select"){
   let myselect = document.createElement("select")
   myform.appendChild(myselect)
 }

})

//let inputtype = formData[i].type
//let inputlabel = formData[i].label       Before Jase's help
//let languageoption1label = languageoptions[i].label

//let myfname = document.createElement("input")  
//let mylname = document.createElement("input")
//let myemail = document.createElement("input")
//let myurl = document.createElement("input")
//let mylanguage = document.createElement("select")
//let mylanguageoptions1 = document.createElement("option")
//let mylanguageoptions2 = document.createElement("option")
//let mylanguageoptions3 = document.createElement("option")
//let mylanguageoptions4 = document.createElement("option")
//let mylanguageoptions5 = document.createElement("option")
//let mycomment = document.createElement("textarea")
//let mymobile = document.createElement("input")
//let myhome = document.createElement("input")


//myfname.setAttribute("type", inputtype)
//myfname.setAttribute("placeholder", inputlabel)
//mylname.setAttribute("type", inputtype)
//mylname.setAttribute("placeholder", inputlabel)
//myemail.setAttribute("type", inputtype)
//myemail.setAttribute("placeholder", inputlabel)
//myurl.setAttribute("type", inputtype)
//myurl.setAttribute("placeholder", inputlabel)
//mylanguage.setAttribute()

//mycomment.setAttribute("type", inputtype)
//mycomment.setAttribute("placeholder", inputlabel)
//mymobile.setAttribute("type", inputtype)
///mymobile.setAttribute("placeholder", inputlabel)
//myhome.setAttribute("type", inputtype)
//myhome.setAttribute("placeholder", inputlabel)



//myfields.appendChild(myfname)
//myfields.appendChild(mylname)
//myfields.appendChild(myemail)
//myfields.appendChild(myurl)
//myfields.appendChild(mylanguage)
//mylanguage.appendChild(mylanguageoptions1)
//mylanguage.appendChild(mylanguageoptions2)
//mylanguage.appendChild(mylanguageoptions3)
//mylanguage.appendChild(mylanguageoptions4)
//mylanguage.appendChild(mylanguageoptions5)
//myfields.appendChild(mycomment)
//myfields.appendChild(mymobile)
//myfields.appendChild(myhome)

//}














//   "#" += `<input type="${item.type}" placeholder="${item.label}" id="${item.id}" />`
//}



//dropdown
//item.options.forEach(function(option){})
//htmlStr += `<option value="${option.value}">${option.label}</option>`

//}
//}
//let user-first-name
