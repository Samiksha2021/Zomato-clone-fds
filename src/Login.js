import React from 'react'

const Login = () => {
  return (
    <div className='container w-50'>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email or username</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email address"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password"/>

</div>
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Login</button>

  </div>
    </div>
  )
}

export default Login