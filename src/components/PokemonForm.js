import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onNewPokemon }) {

  const [form, setForm] = useState({
    name: "", 
    frontURL: "",
    backURL: "",
    hp: 0
  })

  function handleForm(e) {
    setForm({...form, [e.target.name] : e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({
        'name' : form.name,
        'hp': form.hp,
        'sprites': {'front': form.frontURL, 'back': form.backURL}
      })
    })
    .then(response => response.json())
    .then(newPokemon => {
      onNewPokemon(newPokemon)
    })
  }

console.log(form)

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={form.name} onChange={handleForm}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={form.hp} onChange={handleForm}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontURL"
            value={form.frontURL}
            onChange={handleForm}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backURL"
            value={form.backURL}
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
