type UtmValues = {
  first: string | null,
  second: string | null,
  third: string | null,
  fourth: string | null,
}

function Login() {
  const uuid = crypto.randomUUID();

  //Estraer las propiedades no-null de un objeto
  const utmValues: UtmValues = {
    first: null,
    second: "Banana",
    third: "Manzana",
    fourth: "Pera"
  };

  const result = Object
      .entries(utmValues)
      .reduce((res, [key, value]) =>{
    if (value !== null) {
      res = {
        ...res,
        [key]: value
      };
    }

    return res;
  }, {});

  console.log(result);

  //Extraer valores de un array segun una o mas condiciones
  const cities: string[] = [
    "La Chorrera",
    "Santiago",
    "Chitré",
    "Colón",
    "Volcán",
    "Chiriquí Grande"
  ];

  let initialValue: string[] = [];

  const citiesWithLetterC = Object
      .entries(cities)
      .reduce((res, [key, value]) => {
    if (
      !value.toUpperCase().startsWith("C")
    ) {
      res.push(value);
    }

    return res;
  }, initialValue);

  console.log(citiesWithLetterC);

  return (
    <div>
      {uuid}
      <h1>Nuevo objeto:</h1>
    </div>
  );
}

export default Login;