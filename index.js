function predictGender() 
{
  const nameInput = document.getElementById('nameInput');
  const result = document.getElementById('result');
  const name = nameInput.value.trim();
  
  if (name === '') 
  {
    result.innerText = 'Please enter a name to predict gender.';
    return;
  }

  result.innerText = 'Predicting...';

  fetch(`https://api.genderize.io?name=${name}`)
    .then(response => 
    {
      if (!response.ok) 
      {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => 
    {
      result.innerText = `The Predicted Gender for the Name "${name}" is ${data.gender}. (Probability: ${data.probability})`;
    })
    .catch(error => 
    {
      result.innerText = 'An error occurred while predicting gender. Please try again.';
    });
}



const facts = [
  "The human brain contains approximately 86 billion neurons.",
  "About 71% of Earth's surface is covered by water.",
  "Light travels at a speed of approximately 299,792 kilometers per second.",
  "The blue whale is the largest animal on Earth, weighing up to 200 tons.",
  "Methuselah, a bristlecone pine in California, is over 4,800 years old.",
  "The International Space Station orbits Earth at a speed of 28,000 km/h.",
  "Mount Everest is the tallest mountain on Earth, standing at 8,848 meters.",
  "The average distance between Earth and the Moon is about 384,400 kilometers.",
  "The human genome contains about 3 billion base pairs of DNA.",
  "The solar system is approximately 4.6 billion years old.",
  "Earth's atmosphere is primarily composed of nitrogen (78%) and oxygen (21%).",
  "Dinosaurs went extinct about 65 million years ago.",
  "Quarks are among the smallest known particles in the universe.",
  "The Mariana Trench is the deepest part of the world's oceans, reaching about 11,000 meters.",
  "The cheetah is the fastest land animal, capable of speeds up to 70 mph (113 km/h).",
  "The average human lifespan is around 72.6 years globally.",
  "The Great Pyramid of Giza is over 4,500 years old and is the only surviving ancient wonder.",
  "Antarctica is the world's largest desert by area.",
  "About 28% of global energy production is from renewable sources.",
  "The human body contains about 5 liters of blood.",
  "A total solar eclipse occurs when the Moon completely covers the Sun.",
  "Asia is the largest continent, covering about 30% of Earth's land area.",
  "English is the most widely spoken language globally, with over 1.5 billion speakers.",
  "The peregrine falcon is the fastest animal in flight, diving at speeds over 240 mph.",
  "The human body contains about 37 trillion cells.",
  "The current world population is over 7.9 billion people.",
  "The tallest building in the world is the Burj Khalifa in Dubai, at 828 meters.",
  "The galaxy GN-z11 is one of the oldest known galaxies, formed over 13 billion years ago.",
  "The Earth's core can reach temperatures over 5,000 degrees Celsius.",
  "The Nile is traditionally considered the longest river, stretching over 6,650 km.",
  "Lake Baikal in Russia is the deepest lake, reaching over 1,642 meters.",
  "The African elephant is the largest land animal, weighing up to 12,000 pounds.",
  "The universe is expanding, with galaxies moving away from each other.",
  "Fossil fuels (coal, oil, natural gas) formed from ancient plants and animals over millions of years.",
  "Jupiter is the largest planet in our solar system, with a diameter of over 139,820 km.",
  "Earth rotates at approximately 1,670 km/h at the equator.",
  "There are about 1,500 active volcanoes on Earth.",
  "Honeybees communicate through a dance called the 'waggle dance.'",
  "Some mammals, like the platypus and echidna, lay eggs.",
  "Vatican City is the smallest independent state, covering just 44 hectares.",
  "The Milky Way galaxy contains about 100 billion stars.",
  "The Arctic tern holds the record for the longest migration, traveling over 70,000 km annually.",
  "Death Valley in California holds the record for the hottest temperature at 56.7 degrees Celsius.",
  "Charles Darwin's theory of evolution was published in 1859 in his book 'On the Origin of Species.'",
  "Earth is approximately 4.5 billion years old.",
  "Hydrogen is the most abundant element in the universe, comprising about 75% of its elemental mass.",
  "An adult human has 206 bones, while a newborn has 270.",
  "The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 km.",
  "The bee hummingbird is the smallest bird, measuring about 5 cm.",
  "Yuri Gagarin became the first human to travel to space in 1961."
];



function updateFact() {
  const factElement = document.getElementById("fact");
  let randomIndex = Math.floor(Math.random() * facts.length);
  factElement.textContent = facts[randomIndex];
}


document.addEventListener("DOMContentLoaded", function () {
  updateFact();
  setInterval(updateFact, 3000); 
});

