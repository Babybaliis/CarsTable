
const getData=()=>{
    const url = 'http://109.236.74.74:9900/getdata';
        axios.get(url)
            .then(response => {
                if(localStorage.length==0){
                    localStorage.setItem("Name",response.data.Garage.Name)
                    localStorage.setItem("Email",response.data.Garage.Email)
                    localStorage.setItem("Owner",response.data.Garage.Owner)
                }
                
                document.getElementById("Name").value = localStorage.getItem("Name") 
                document.getElementById("Email").value=localStorage.getItem("Email")
                document.getElementById("Owner").value=localStorage.getItem("Owner")
                document.getElementById("Title").innerHTML = response.data.Item.Title;
                document.getElementById("Description").innerHTML = response.data.Item.Description;
                document.getElementById("KeyValues").innerHTML = '<ul className="First">' + '<li>FuelType: ' + (response.data.Item.KeyValues.FuelType) + ', </br>' + 
                '<li>TrimLevel: ' + (response.data.Item.KeyValues.TrimLevel) + ', </br>' +
                '<li>GearBox: ' + (response.data.Item.KeyValues.GearBox) + '</ul>';
                document.getElementById("Original").innerHTML ='<ul> ' + '<li> Make: ' + (response.data.Item.Original.Make) 
                    + '<li> Models: ' +(response.data.Item.Original.Model) 
                        +'  <li> <ul> CarOptions:'+
                            '<li> Code:' + response.data.Item.Original.CarOptions.Code + 
                            '<li> Title:' + response.data.Item.Original.CarOptions.Title +'</li>'
                    
            });  
} 
            
const data=getData()

const onStaticClick=()=>{
        document.getElementById('edit').hidden=true
        document.getElementById('save').hidden=false
        
        let elements=document.querySelectorAll('input');
        for (i=0; i<elements.length; i++) {
            elements[i].disabled=false
            let id = elements[i].getAttribute('id');
            if(elements[i].getAttribute('type')=='text'){
                elements[i].value=localStorage.getItem(id)
            }
        }
    
}
const onDynamicClick=()=>{
        document.getElementById('save').hidden=true
        document.getElementById('edit').hidden=false
        
        let inputElements=document.querySelectorAll('input');
       
        for (i=0; i<inputElements.length; i++) {
            let id = inputElements[i].getAttribute('id');
            if(inputElements[i].getAttribute('type')=='text'){
                inputElements[i].disabled=true
                localStorage.setItem(id,inputElements[i].value) 
                inputElements[i].value=localStorage.getItem(id)  
            }
        }
}
            