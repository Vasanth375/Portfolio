
export async function Repos() {
  try{
    const respose = await fetch("https://api.github.com/users/vasanth375/repos");
    return respose.json();
  }catch(err){

  }
}
