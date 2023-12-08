import React from 'react'

const SignUp = () => {
  return (
    <div className='container w-50'>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your first name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your last name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email address"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Create password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Create password"/>
</div>

<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Signup</button>

  </div>

    </div>
  )
}

export default SignUp