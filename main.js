const customName = document.getElementById('customname');
const randomize = document.getElementById('.randomize');
const story = document.querySelector('.story');

var storyText = "It was 94 fahrenheit outside so :insertx: went for a walk.  When they got to :inserty: they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day."
insertX = ["Batty", "Vanessa", "Shrek"];
insertY = ["Waffle House", "Lego Land", "Atlantis"];
insertZ = ["spontaneously combusted", "got eaten by a yeti", "turned into a slug and crawled away"];

var newStory = storyText;

var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replaceAll(":insertz:", zItem);

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById('uk').checked) {
        const weight = Math.round(300);
        const temperature = Math.round(94);

    }

    story.textContent = ;
    story.style.visibility = 'visible';

}