import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./animal.css"

export default class AnimalList extends Component {

    animalOwners(animal) {
        const ao = this.props.animalsOwned
        const own = this.props.owners
        const ownerNameArr = []
    
        ao.forEach(animalOwner => {
          if(animal.id === animalOwner.animalId) {
            let petOwnerId = animalOwner.ownerId
            own.forEach(owner => {
              if(owner.id === petOwnerId) {
                ownerNameArr.push(owner.name)
              }
            })
          }
        })
        return ` Owner(s): ${ownerNameArr.join(" and ")}`
      }

    render () {
        return (
            <section className="animals list">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                <p>Pet Name: {animal.name}</p>
                                {this.animalOwners(animal)}
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}