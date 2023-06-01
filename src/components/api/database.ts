import axios from "axios";

export function save(plan: any, des: string,id:string) {
    console.log(2);
    
    return axios({
      url: `http://localhost:8000/save/${id}`,
  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
       plan,des
      }),
    }).then((res) => {
      if (res.status === 200) {
      
      }
      if (res.status === 400){

      }
        
    });
  }

  export function getPlan(id:string) {
    console.log(3);
    
     axios({
      url: `http://localhost:8000/save/${id}`,
  
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    }).then((res) => {
      if (res.status === 200) {
      
      }
      if (res.status === 400){

      }
        
    });
  }