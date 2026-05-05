export const CandidatesProfile = ()=>{
    const name = 'rayhan';
    const role = 'web dev'
    const yearsOfExperience = '5'
  const   isAvialble = false
    return (
      <>
        <h1> {name} </h1>
        <p>
          {yearsOfExperience} years of experience as {role}
        </p>
        <p>Started in {2026 -yearsOfExperience}</p>
        <p>Status: {isAvialble ? 'rady to hire' : 'not available'} </p>
        <p>Conatct : {name.toLowerCase().replace(' ','.')}@email.com</p>
      </>
    );
}