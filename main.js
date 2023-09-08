// references input from the form to gather name
var customName = document.getElementById('customname');
// references the button by searching the document for the css class attribute randomize
var randomize = document.querySelector('.randomize');
// references the paragraph that will populate story by searching the doc for the css class story
var story = document.querySelector('.story');

var storyText = "It was 94 fahrenheit outside so :insertx: went for a walk.  When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Batty", "Vanessa", "Shrek"];
var insertY = ["Waffle House", "Lego Land", "Atlantis"];
var insertZ = ["spontaneously combusted", "got eaten by a yeti", "turned into a slug and crawled away"];

var newStory = storyText;

var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);
newStory = newStory.replace(":insertx:", xItem);

function randomValueFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById('uk').checked) {
        var weight = Math.round(300*0.07) + " stone";
        // having to put additional parentheses because round only applied to the subtraction
        var temperature = Math.round((94-32)*(5/9)) + " centigrade";
        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 fahrenheit", temperature);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';

}