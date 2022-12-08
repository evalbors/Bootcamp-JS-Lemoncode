const getName = () => {
  fetch("https://www.breakingbadapi.com/api/characters")
    .then(response => response.json())
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log("Error printing names");
    });
};

const getImage = () => {
  fetch("https://www.breakingbadapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
      for (item of data) {
        return item.img;
      }
    })
    .catch(error => {
      console.log("Error printing images");
    });
};

const getBirthday = () => {
  fetch("https://www.breakingbadapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
      for (item of data) {
        console.log(item.birthday);
      }
    })
    .catch(error => {
      console.log("Error printing birthdays");
    });
};

const getNickname = () => {
  fetch("https://www.breakingbadapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
      for (item of data) {
        console.log(item.nickname);
      }
    })
    .catch(error => {
      console.log("Error printing nicknames");
    });
};

export { getImage, getName, getBirthday, getNickname };

/* fetch('https://www.breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    for (item of data) {
      console.log(item.name + '\n');
    }
  })
  .catch((error) => {
    console.log('Se ha producido un error en la api');
  }); */
