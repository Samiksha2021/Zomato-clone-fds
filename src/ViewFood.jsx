import React, { useEffect,useState } from 'react'
import arr from './CardData'
const ViewFood = () => {

    const zomatologo='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
    const [data,SetData]=useState()
    const [search,SetSearch]=useState(arr)

    const fun1=(e)=>{
       SetData(e.target.value)
      // console.log(e.target.value,'rrr');
    }


    const fun2=(e)=>{
      e.preventDefault()
      let newR=arr.filter((str)=>{
        return str.text===data
      })
      SetSearch(newR)
    }

    

  
    
  return (
    <>
    <div className='container w-75 d-flex justify-content-between align-items-center'>
       <img style={{width:'8rem'}} src={zomatologo}/>
       <h2>Search here</h2>
    </div>

    <div className=''>
    <form class='container d-flex justify-content-center align-items-center m-2'>

    <div class="col-lg-4">
    <input name='data' value={data} onChange={fun1} type='text' class="form-control" id=" inputPassword2" placeholder='Search'/>    
    </div>
    <div class="col-auto mx-2">
        <button  onClick={fun2} type="submit" class="btn btn-primary">Search </button>
    </div>
    </form>
    </div>

    <section className='container w-75'>
      <h2 style={{fontWeight:400}} className=''>Best food in Bhopal</h2>
      <div className='row  d-flex justify-content-between align-items-center'>
        {
          search.map((res)=>{
            return(<>
            <div class="card mt-4" style={{width: 300}}>
              <img src={res.img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">{res.text}</p>
             </div>
           </div> 

            </>)
          })
        }
      </div>
    </section>
    </>
     
  )

}

export default ViewFood