import React from 'react';

function Admin() {
  return (
    <div className='content'>
      <form>
        <h1>New Product Input</h1>
        <div>
          <div>
            <label for='name'>Category</label>
            <input type='text' name='Category'></input>
          </div>
          <div>
            <label for='name'>Name</label>
            <input type='text' name='name'></input>
          </div>
          <div>
            <label for='header'>Header</label>
            <input type='text' name='header'></input>
          </div>
          <div>
            <label for='title'>Title</label>
            <input type='text' name='title'></input>
          </div>

          <div>
            <label for='description'>Description</label>
            <input type='text' name='description'></input>
          </div>
          <div>
            <label for='file'>Product Image</label>
            <input type='file' name='file' id='file'></input>
          </div>
        </div>
        <input type='submit'></input>
      </form>
    </div>
  );
}

export default Admin;
