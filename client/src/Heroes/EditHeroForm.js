import React from 'react'

const EditHeroForm = ({name, superPower, universe, nemesis, img, submitHeroEdit, onNameChange, onSuperPowerChange, onUniverseChange, onNemesisChange, onImageChange}) =>
  <form >
    <input type='text' placeholder='name' onChange={onNameChange} value={name} />
    <input type='text' placeholder='superPower' onChange={onSuperPowerChange} value={superPower} />
    <input type='text' placeholder='universe' onChange={onUniverseChange} value={universe} />
    <input type='text' placeholder='nemesis' onChange={onNemesisChange} value={nemesis} />
    <input type='text' placeholder='IMG' onChange={onImageChange} value={img} />
    <button onClick={submitHeroEdit}>Submit</button>
  </form>

export default EditHeroForm
