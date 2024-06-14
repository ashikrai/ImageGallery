// import moduleName from ''

export function getAPIoptions(API_KEY:string){
    const options= {
        method: 'GET', // or 'POST', 'PUT', etc.
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Pexels/JavaScript",
            Authorization: API_KEY // Include the apiKey in the headers
        },
    }
    return options
}

export async function getInitialImage(api:string): Promise<any>{
    console.log(`Api: ${api} `)
    try{
        const response= await fetch(api);
        if(response.ok){
            const data= await response.json();
            console.log(`data is: ${data}`)
            return data
        }else{
            throw new Error(`Error while fetching initial Images. HTTP Response: ${response.status}`)
        }
    }catch(error){
        console.error("Error while fetching initial Images",error)
    }

}