// JSON 
let values =  {
    1: {
        carrier: "CCH",
        service: "DEX",
    },
    2: {
        carrier: "CCH",
        service: "express",
    },
    3: {
        carrier: "CCH",
        service: "priority",
    },
    15: {
        carrier: "CHP",
        service: "nextday",
    },
    16: {
        carrier: "CHP",
        service: "sameday",
    },
    17: {
        carrier: "CHP",
        service: "express",
    }
}
// JSON
let json = {
    data: {
        BUIN: [
            {
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            },
            {
                limit: 2,
                over_carrier_service_id: 15,
                under_carrier_service_id: 15
            }
        ],
        LAJA: [
            {
                limit: 2,
                over_carrier_service_id: 1,
                under_carrier_service_id: 1
            },{
                limit: 5,
                over_carrier_service_id: 2,
                under_carrier_service_id: 2
            },{
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            }
        ],

        LEBU: [
            {
                limit: 2,
                over_carrier_service_id: 1,
                under_carrier_service_id: 1
            },{
                limit: 6,
                over_carrier_service_id: 3,
                under_carrier_service_id: 3
            },{
                limit: 5,
                over_carrier_service_id: 2,
                under_carrier_service_id: 2
            },{
                limit: 4,
                over_carrier_service_id: 16,
                under_carrier_service_id: 16
            }
        ],

        LOTA: [
            {
                limit: 2,
                over_carrier_service_id: 15,
                under_carrier_service_id: 15
            },{
                limit: 4,
                over_carrier_service_id: 16,
                under_carrier_service_id: 16
            },{
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            }
        ]
    }
}

let result = {
    BUIN: {
        limit: 2,
        over: {
            carrier: "CHP",
            service: "nextday",
        },
        under: {
            carrier: "CHP",
            service: "nextday",
        }
    },
    LAJA: {
        limit: 5,
        over: {
            carrier: "CCH",
            service: "express",
        },
        under: {
             carrier: "CCH",
            service: "express",
        }
    },
    LEBU: {
        limit: 6,
        over: {
            carrier: "CCH",
            service: "priority",
        },
        under: {
             carrier: "CCH",
            service: "priority",
        }
    },
    LOTA: {
        limit: 4,
        over: {
            carrier: "CHP",
            service: "sameday",
        },
        under: {
            carrier: "CHP",
            service: "sameday",
        }
    }
}

function getHigherLimit(city){
    let higher = 0;
    let service = {
        over:0,
        under:0
    }
    city.map((c)=>{
        if(c.limit > higher){
            higher = c.limit
            service.over = c.over_carrier_service_id
            service.under = c.under_carrier_service_id
        }
    })
    return {limit:higher,over:service.over,under:service.under}

}
const getServiceById = (id)=> values[id];


function serviceByCity (){
    let data = json.data;
    let results={};
    for (let city in data){
        results[city]= getHigherLimit(data[city]);
        results[city].over= getServiceById(results[city].over)
        results[city].under= getServiceById(results[city].under)
    }
    return results;
}

function moreServicesPerCity(){
    let data = json.data;
    let higher = 0;
    let cities ;
    for (let city in data){
        if (higher < data[city].length){
            higher = data[city].length
            cities = city;
        }
    }
    return `${cities} con ${higher} servicios`;
}

function serviceMost (id){
    id = parseInt(id,10)
    let acum=0;
    let data = json.data;
    for (let city in data){
        if(data[city].filter((c)=>c.under_carrier_service_id===id || c.over_carrier_service_id === id).length >0){
            acum++
        }
    }
    return acum
}

function mostUsedService(){
    let higher=0;
    let idService=0;
    for (let id in values){
        let service = serviceMost(id);
        if(higher < service){
            higher = service;
            idService = id;
        }
    }

    return `${values[idService].service} y carrier ${values[idService].carrier} siendo utilizado en ${higher} localidades`

}



console.log('Resultado de los servicios para cada localidad con mayor limite:');
console.log(serviceByCity());
console.log('La localidad con mayor cantidad de servicios disponibles es:')
console.log(moreServicesPerCity());
console.log('El servicio con mayor cobertura es:')
console.log(mostUsedService());