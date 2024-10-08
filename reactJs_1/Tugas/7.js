const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

  const fetchDataAsync = async () => {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchDataAsync();
