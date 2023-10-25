function MyRecipesComponent({label, image, calories, ingredients, description, cuisineType}) {

    const LinkButton= () => {
        window.open(description, '_blank');
      };

    return (
        <div>
    <div className="container">
                  <p className="cuisine">*{cuisineType} cuisine*</p> 
                   <h2>{label}</h2>   
        
    </div>

    <div className="container">
              <img src={image} alt="recipe"/>
    </div>
 
    <ul className="container list">
{ingredients.map((ingredient, index) => (
<li key={index}>
<img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="icon"/>
{ingredient}</li>
))}
</ul>
 
<div className="container">
    <button className="btn" onClick={LinkButton}> Recipe Description</button>
    </div>  

<div className="container">
     <p>{calories.toFixed()} calories</p>
    </div>
<hr></hr>
    </div>)
}
export default MyRecipesComponent;