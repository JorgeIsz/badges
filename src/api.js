let callApi = () => {
	return new Promise((resolve,reject)=>{
		let data = [
			{id:"1",firstName:"Jorge",lastName:"Isaza",twitter:"jorgeisz",career:"Software Engineer"},
			{id:"2",firstName:"Luis",lastName:"Barrera",twitter:"luisib",career:"Software Engineer"},
			{id:"3",firstName:"Miguel",lastName:"Carranza",twitter:"mcar",career:"Software Engineer"},
			{id:"4",firstName:"Antonio",lastName:"Fernandez",twitter:"afernandez",career:"Software Engineer"},
		]
		resolve(data)
	})
}


const api = {
	badges: {
		list(){
			return [] 
		}
	}
}

export default api
