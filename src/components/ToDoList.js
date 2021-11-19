import React from "react";

const ToDoList = () => (
    <ul className="list-grous m-3">
        <li className="list-group-item d-flex align-items-center">
            Rangement
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
            Répondre aux appels d'offres
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
            Signer les contrats
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
            Ranger
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
    </ul>
)

export default ToDoList