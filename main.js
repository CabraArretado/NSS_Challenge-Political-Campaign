/* The challenge instructions were not so precise,
so I had to try figure out what to do,
so I created the data typeof each of the elements */

// Campaign DATA 
let congressionalDistrict = "TN-6";
let plataformStatements = {
    taxes: [],
    jobs: [],
    infrastruture: [],
    healthCare: [],
    crimeAndEnforcement: []
}
let donationURL = "string";
let calendarEvents = {

}
let voluntarInformation = [{
    name: "String",
    adress: "string",
    email: "string",
    phone: 123456789,
    availability: [],
    activities: [],
}]
let biography = "string";
let images = {
    head: "URL",
    family: "URL",
    constituents: "URL"
}
let missionStatement = "String"
let registerVoteURL = "string"


// Functions to change the state of the data

// Changes the congressional district
let changeDistrict = (newDistrict) => {
    congressionalDistrict = newDistrict;
}