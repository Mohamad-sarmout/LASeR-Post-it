const initstate = [
    {
        id: "1",
        title: "LEssons",
        Text: ["lessons"],
        date: "2023-11-11",
        color: "#3B6C9C",
        fontColor: "#ffff",
        stylefont: "roboto",
      },
      {
        id: "2",
        title: "todo",
        Text: ["lessons"],
        date: "2023-11-11",
        color: "#3B6C9C",
        fontColor: "#ffff",
        stylefont: "roboto",
      },
];






const favoritepostreducer = (state = initstate,action) => {
    console.log(state);
    return state
}

export default favoritepostreducer