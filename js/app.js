// Custom Scripts - Start

const data = [
  {
    name: "Asher Anderson",
    age: 27,
    gender: "male",
    city: "hastings",
    state: "auckland",
    image: "https://randomuser.me/api/portraits/men/63.jpg"
  },
  {
    name: "Jasmine Bui",
    age: 44,
    gender: "female",
    city: "liland",
    state: "akershus",
    image: "https://randomuser.me/api/portraits/women/93.jpg"
  },
  {
    name: "Julie Sanchez",
    age: 24,
    gender: "female",
    city: "manchester",
    state: "warwickshire",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "Hunter ortiz",
    age: 24,
    gender: "male",
    city: "yonkers",
    state: "new jersey",
    image: "https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
    name: "jeppe jensen",
    age: 25,
    gender: "male",
    city: "stokkemarke",
    state: "hovedstaden",
    image: "https://randomuser.me/api/portraits/men/72.jpg"
  }
];

// Profile Iterator
let profileIterator = profiles => {
  let nextIndex = 0;
  console.log("Inside the profileIterator");

  return {
    next: () =>
      nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true }
  };
};

const profiles = profileIterator(data);

// function
let nextProfile = () => {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.querySelector("#profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item"><strong>Name:</strong> ${currentProfile.name
          .charAt(0)
          .toUpperCase() + currentProfile.name.slice(1)}</li>
        <li class="list-group-item"><strong>Age:</strong> ${
          currentProfile.age
        }</li>
        <li class="list-group-item"><strong>Gender:</strong> ${currentProfile.gender
          .charAt(0)
          .toUpperCase() + currentProfile.gender.slice(1)}</li>
        <li class="list-group-item"><strong>City:</strong> ${currentProfile.city
          .charAt(0)
          .toUpperCase() + currentProfile.city.slice(1)}</li>
        <li class="list-group-item"><strong>State:</strong> ${currentProfile.state
          .charAt(0)
          .toUpperCase() + currentProfile.state.slice(1)}</li>
      </ul>
    `;

    document.querySelector("#imageDisplay").innerHTML = `
      <img class="rounded" src="${currentProfile.image}" alt="${
      currentProfile.name
    }" />
    `;
  } else {
    window.location.reload();
  }

  // console.log(currentProfile);
};

nextProfile();

// Next Event (Button)
document.querySelector("#next").addEventListener("click", nextProfile);

// Custom Scripts - End
