const jsondata=
[{
    "name":"Devi",
    "title":"software developer",
    "contact_information":{
        "email":"ponmarimdeiveega@gmail.com",
        "phone":"6383577105",
        "address":"6/13,north street,kalitheerthanpatti"
    },
    "skills":[
        "Html",
        "css",
        "Javascript",
        "Bootstrap",
        "React js",
        "Express js",
        "Node js",
        "Mongodb",
        "communication",
        "problem solving"
    ],
    "Experience":[
        {
            "position":"Full stack developer",
            "company name":"Effe technology private limited",
            "location":"chennai",
            "start_date":"01.03.2023",
            "end_date":"25.06.2023",
            "responsibilities":[
                "Manage the team",
                "Admin",
                "Full stack developer"
            ]
             }],
             "education":[
                {
                "degree":"BE-CSE",
                "college_name":"Sardar raja college of engineering",
                "location":"Alangulam",
                "graduation_year":2017
             }],
                }];


//parse the jsondata
//const data=JSON.parse(jsondata)
//console.log(data);
//iterate the data using for of  loop

       for(let x of jsondata ){
            //console.log(x);
            console.log(`${x.Experience.forEach((val) =>{
             console.log(val);
        })}`);
            console.log(x.contact_information);
        }
//--------------------------------------
        //iterate the data using for in loop
        for(let y in jsondata){
            console.log(`${jsondata[y]}`);
        }  
        
        //-------------------------------------
        //iterate the data using for loop
        for(i=0;i<jsondata.length;i++){
            console.log(jsondata[i]);
        }

        //iterate the data using foreach loop
    jsondata.forEach((input) =>{
        console.log(input);
    }) 