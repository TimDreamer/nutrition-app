import "./Food.css";

const Food = (props) => {
  const { imgUrl, title, kcals, carb, protein, fat } = props;

  return (
    <div className="food">
      <figure>
        <img src={imgUrl} alt="food_img" />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>kcals: {kcals}</p>
        <p>carb: {carb}</p>
        <p>protein: {protein}</p>
        <p>fat: {fat}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Calculator</h2>
        <div className="food-form-control">
          <label htmlFor="factor">factor : </label>
          <input type="text" id="factor" />
        </div>
        <div className="food-form-control">
          <label htmlFor="carb">carb : </label>
          <input type="text" id="carb" value={carb} disabled />
        </div>
        <div className="food-form-control">
          <label htmlFor="protein">protein : </label>
          <input type="text" id="protein" value={protein} disabled />
        </div>
        <div className="food-form-control">
          <label htmlFor="fat">fat : </label>
          <input type="text" id="fat" value={fat} disabled />
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
};

export default Food;
