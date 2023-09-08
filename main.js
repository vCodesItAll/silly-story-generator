// fetches input from the form to gather name
var customName = document.getElementById('customname');
// registers the button click to generate story
var randomize = document.getElementById('.randomize');
// to populate the paragraph element with the text story
var story = document.querySelector('.story');

var storyText = "It was 94 fahrenheit outside so :insertx: went for a walk.  When they got to :inserty: they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day."
var insertX = ["Batty", "Vanessa", "Shrek"];
var insertY = ["Waffle House", "Lego Land", "Atlantis"];
var insertZ = ["spontaneously combusted", "got eaten by a yeti", "turned into a slug and crawled away"];

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
        var weight = Math.round(300*0.07) + "stone";
        var temperature = Math.round(94-32)*(5/9) + "centigrade";
        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 fahrenheit", temperature);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';

}