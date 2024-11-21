import { chargers } from "../../assets/constants"

const Chargers = () => {
  return (
    <div>
      <h2>Listado de cargadores</h2>
      <ul>
        {chargers.map((charger) => (
          <li key={charger.id}>
            {charger.id}. {charger.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chargers
