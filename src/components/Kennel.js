// import React, { Component } from "react"
// import EmployeeList from "./employee/EmployeeList"
// import LocationList from "./location/LocationList"
// import AnimalList from "./animal/AnimalList"
// import "./kennel.css"

// class Kennel extends Component {

//     /*
//         Although you will eventually be pulling your objects
//         from your json-server API, for this chapter, we're
//         faking it and just creating those arrays in the component
//         itself
//     */
//     employeesFromAPI = [
//         { id: 1, name: "Jessica Younker" },
//         { id: 2, name: "Jordan Nelson" },
//         { id: 3, name: "Zoe LeBlanc" },
//         { id: 4, name: "Blaise Roberts" }
//     ]

//     // This will eventually get pulled from the API
//     locationsFromAPI = [
//         { id: 1, name: "Nashville North", address: "500 Circle Way" },
//         { id: 2, name: "Nashville South", address: "10101 Binary Court" }
//     ]

//     animalsFromAPI = [
//         { id: 1, name: "Kiwi" },
//         { id: 2, name: "Olive" },
//         { id: 3, name: "Marcy" },
//         { id: 4, name: "Eddie" }
//     ]

//     ownersFromAPI = [
//         { id: 1, name: "Ryan Tanay" },
//         { id: 2, name: "Emma Beaton" },
//         { id: 3, name: "Dani Adkins" },
//         { id: 4, name: "Adam Oswalt" },
//         { id: 5, name: "Fletcher Bangs" },
//         { id: 6, name: "Angela Lee" }
//     ]


//     state = {
//         owners: this.ownersFromAPI,
//         employees: this.employeesFromAPI,
//         locations: this.locationsFromAPI,
//         animals: this.animalsFromAPI
//     }

//     render() {
//         return (
//             <article className="kennel">
//                 <LocationList locations={this.state.locations} />
//                 <EmployeeList employees={this.state.employees} />
//                 <AnimalList animals={this.state.animals} />
//             </article>
//         )
//     }
// }

// export default Kennel

import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel