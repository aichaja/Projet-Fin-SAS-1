const prompt = require('prompt-sync')();


const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

//------------------------------------
let choix
const tickets = [];


do{
    menu()

    choix = Number(prompt("Votre choix : "))
    Afficher(choix)

}while(choix !== 0)
console.log("Quitter")
//-----------------------------------

function menu(){
    console.log("=================================")
    console.log("     RAILWAY MANAGER     ")
    console.log("=================================")
    console.log(" ")
    console.log("1. Afficher les trajets")
    console.log("2. Acheter un ticket")
    console.log("3. Afficher les tickets")
    console.log("4. Annuler un ticket")
    console.log("5. Rechercher un ticket")
    console.log("6. Filtrer les trajets")
    console.log("7. Trier les trajets")
    console.log("0. Quitter")
    console.log(" ")
    
}

function Afficher(choix){
    switch(choix){
        case 1:
            AfficherLesTrajets()
        break;
        case 2:
            AcheterUnTicket()
        break;
        case 3:
            AfficherLesTickets()
        break;
        case 4:
            AnnulerUnticket()
        break;
        case 5:
            RechercherUnTicket()
        break;
        case 6:
            FiltrerLestrajets()
        break;
        case 7:
            TrierLesTrajets()
        break;
        default:
            console.log("Choix invalide.")
    }
}


function AfficherLesTrajets(){
    console.log("=================================")
    console.log("     TRAJETS DISPONIBLES     ")
    console.log("=================================")
    
    for(let i =  0; i < trips.length;i++){
        
        console.log("   ")
        console.log("#" + trips[i].id ,trips[i].departure ,"→" ,trips[i].destination )
        console.log("Départ :" , trips[i].departureTime )
        console.log("Arrivée :", trips[i].arrivalTime )
        console.log("Prix :", trips[i].price , "DH")
        console.log("Places disponibles :", trips[i].availableSeats)
        console.log("    ")
        console.log("=================================")
        

    }
}

function AcheterUnTicket(){
    let Nomdupassager = prompt("Entre Nom du passager : ")
    let Id = Number(prompt("Entre Identifiant du trajet : "))

   
     
    const trajet =  trips.find(function(trip){
        return  trip.id == Id
    })  
    // console.log(trajet)  

    if(!trajet ){
        console.log("Trajet introuvable")
        return
    }
    // console.log(trajet.availableSeats)

    if(trajet.availableSeats <= 0){
        console.log("Train complet")
        return
    }
    
    let seatNombre = 1

    for(let i = 0; i < tickets.length;i++){
        console.log(tickets[i])
        if(tickets[i].tripId == trajet.id){
            seatNombre++
        }
        // console.log(seatNombre)
    }
        
    const ticket = {

        id: tickets.length + 1,
        passengerName: Nomdupassager,
        tripId: trajet.id,
        seatNumber: seatNombre,
        price: trajet.price,

    }
    // console.log(ticket)

    // console.log(trajet.availableSeats)
    trajet.availableSeats--
    // console.log(trajet.availableSeats)
    
    
    
    tickets.push(ticket)
    // console.log(tickets)

    


    
 
}



function AfficherLesTickets(){
    for(let i = 0 ; i < tickets.length ; i++){
        const trajet =  trips.find(function(trip){
            return  trip.id == tickets[i].tripId
        })  
    
        console.log("===TICKETS===")
        console.log("   ")
        console.log("Ticket #" + tickets[i].id)
        console.log("Passager : " , tickets[i].passengerName )
        console.log("Trajet :" , trajet.departure ,"→", trajet.destination)
        console.log("Place :", tickets[i].seatNumber)
        console.log("Prix :",tickets[i].price,"DH")
        console.log("    ")
    }

}

// function AnnulerUnticket(){
//     let IdDeTicket = Number(prompt("Entre Identifiant du ticket : "))
//     const ticket =  tickets.find(function(ticket){
//         return  ticket.id == IdDeTicket
//     })
//     console.log(ticket)

//     if(!ticket ){
//         console.log("Ticket introuvable")
//         return
//     }

   
   
    
//     const trajet =  trips.find(function(trip){
//         return  trip.id == ticket.tripId
//     }) 
//     console.log(trajet)

    
//     tickets.splice( , 1)

    
//     console.log(trajet.availableSeats)
//     trajet.availableSeats++
//     console.log(trajet.availableSeats)

// }

function RechercherUnTicket(){
    let NomDePassager = prompt("Entre Nom de passager :")

    for(let i = 0; i <tickets.length ;i++){
        if( NomDePassager == tickets[i].passengerName){
            const trajet =  trips.find(function(trip){
                return  trip.id == tickets[i].tripId
            })
            console.log("   ")
            console.log("Ticket #" + tickets[i].id)
            console.log("Passager : " , tickets[i].passengerName )
            console.log("Trajet :" , trajet.departure ,"→", trajet.destination)
            console.log("Place :", tickets[i].seatNumber)
            console.log("Prix :",tickets[i].price,"DH")
            console.log("    ")

        }
    }
}  


function FiltrerLestrajets(){
    
    let VilleDeDépart  = prompt("Entre Ville de départ  :")

    for(let i = 0; i < trips.length ;i++){
        if( VilleDeDépart == trips[i].departure){

            console.log("    ")
            console.log("Résultat :")
            console.log(trips[i].departure ,"→" ,trips[i].destination , ":" , trips[i].price , "DH" )
            console.log("    ")

        }
    }
}

function TrierLesTrajets(){
    for(let i = 0 ; i < trips.length ; i++){
        for(let j = 0; j < trips.length - 1; j++){
            if(trips[j].price > trips[j + 1].price){
                let c = trips[j]
                trips[j] = trips[j + 1]
                trips[j + 1] = c
            }
        }
        
    }
    for(let i = 0 ; i < trips.length ; i++){

    console.log(trips[i].departure ,"→" ,trips[i].destination ,":" , trips[i].price, "DH")
    }
}







