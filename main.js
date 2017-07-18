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




let myfields = document.getElementById("fields")
let myform = document.createElement("form")

myfields.appendChild(myform)

formData.forEach(function(item){
  let inputtype = item.type
  let inputlabel = item.label
  let inputid = item.id
  let inputicon = item.icon
  let inputoption = item.option


  if(inputtype == "text"){
   let myinput = document.createElement("input") 
   myinput.setAttribute("type", inputtype)
   myinput.setAttribute("placeholder", inputlabel)
   myinput.setAttribute("id", inputid)
   myinput.setAttribute("icon", inputicon)
   myform.appendChild(myinput)

 } else if(inputtype == "email"){
   let myemail = document.createElement("input") 
   myemail.setAttribute("type", inputtype)
   myemail.setAttribute("placeholder", inputlabel)
   myemail.setAttribute("id", inputid)
   myemail.setAttribute("icon", inputicon)
   myform.appendChild(myemail)

 } else if(inputtype == "tel"){
   let mytel = document.createElement("input") 
   mytel.setAttribute("type", inputtype)
   mytel.setAttribute("placeholder", inputlabel)
   mytel.setAttribute("id", inputid)
   mytel.setAttribute("icon", inputicon)
   myform.appendChild(mytel)

 } else if(inputtype == "textarea"){
   let mytextarea = document.createElement("textarea")
   mytextarea.setAttribute("type", inputtype)
   mytextarea.setAttribute("placeholder", inputlabel)
   mytextarea.setAttribute("id", inputid)
   mytextarea.setAttribute("rows", "10")
   mytextarea.setAttribute("icon", inputicon)
   myform.appendChild(mytextarea)

 } else if(inputtype == "select"){
   let myselect = document.createElement("select")
   let myselectoptions = document.createElement("option")
   let myselecttext = document.createTextNode(inputlabel)
   myselectoptions.appendChild(myselecttext)
   myselect.appendChild(myselectoptions)
      item.options.forEach(function(item){
      let myselectoption = document.createElement("option")
      myselectoption.setAttribute("value", item.value)
      let myselectoptiontext = document.createTextNode(item.label)
      myselectoption.appendChild(myselectoptiontext)
      myselect.appendChild(myselectoption)
      })
   myform.appendChild(myselect)
 }


})

