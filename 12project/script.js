var presetBtn = document.getElementById('preset-btn');
var presetMenu = document.getElementById('preset-menu');
var moreBtn = document.getElementById('more-btn');
var moreMenu = document.getElementById('more-menu');
var modelBtn = document.getElementById('model-btn');
var modelMenu = document.getElementById('model-menu');
var saveBtn = document.getElementById('save-btn');
var viewCodeBtn = document.getElementById('view-code-btn');
var shareBtn = document.getElementById('share-btn');
var submitBtn = document.getElementById('submit-btn');
var resetBtn = document.getElementById('reset-btn');
var playgroundInput = document.getElementById('playground-input');

// Slider elements
var temperatureSlider = document.getElementById('temperature-slider');
var temperatureValue = document.getElementById('temperature-value');
var maxLengthSlider = document.getElementById('max-length-slider');
var maxLengthValue = document.getElementById('max-length-value');
var topPSlider = document.getElementById('top-p-slider');
var topPValue = document.getElementById('top-p-value');

// Default settings
var defaultSettings = {
    model: 'text-davinci-003',
    temperature: 0.56,
    maxLength: 256,
    topP: 0.9,
    prompt: ''
};

// Current settings
var currentSettings = Object.assign({}, defaultSettings);

// Toggle dropdown function
function toggleDropdown(menu) {
    // Close all other dropdowns first
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function (dropdown) {
        if (dropdown !== menu && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
    
    // Toggle the current dropdown
    menu.classList.toggle('show');
}

// Close dropdowns when clicking outside
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-content') && 
        !event.target.closest('button')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function (dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});

// Preset dropdown toggle
presetBtn.addEventListener('click', function () {
    toggleDropdown(presetMenu);
});

// More options dropdown toggle
moreBtn.addEventListener('click', function () {
    toggleDropdown(moreMenu);
});

// Model dropdown toggle
modelBtn.addEventListener('click', function () {
    toggleDropdown(modelMenu);
});

// Handle preset selection
presetMenu.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;
    if (target.tagName === 'A') {
        var presetName = target.textContent;
        presetBtn.querySelector('span').textContent = presetName;
        presetMenu.classList.remove('show');
        
        // Apply preset settings (this would be expanded in a real implementation)
        switch(presetName) {
            case 'Grammatical Standard English':
                playgroundInput.placeholder = 'Correct this to standard English';
                break;
            case 'Q&A':
                playgroundInput.placeholder = 'Ask a question';
                break;
            case 'Classification':
                playgroundInput.placeholder = 'Classify the following text';
                break;
            case 'English to Other Languages':
                playgroundInput.placeholder = 'Translate this to Spanish';
                break;
            case 'Text to Command':
                playgroundInput.placeholder = 'Convert this text to a command';
                break;
            case 'Chat':
                playgroundInput.placeholder = 'Start a conversation';
                break;
        }
    }
});

// Handle model selection
modelMenu.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;
    if (target.tagName === 'A') {
        var modelName = target.textContent;
        modelBtn.querySelector('span').textContent = modelName;
        modelMenu.classList.remove('show');
        currentSettings.model = modelName || 'text-davinci-003';
    }
});

// Update slider values
temperatureSlider.addEventListener('input', function () {
    var value = parseFloat(temperatureSlider.value);
    temperatureValue.textContent = value.toFixed(2);
    currentSettings.temperature = value;
});

maxLengthSlider.addEventListener('input', function () {
    var value = parseInt(maxLengthSlider.value);
    maxLengthValue.textContent = value.toString();
    currentSettings.maxLength = value;
});

topPSlider.addEventListener('input', function () {
    var value = parseFloat(topPSlider.value);
    topPValue.textContent = value.toFixed(2);
    currentSettings.topP = value;
});

// Handle save button
saveBtn.addEventListener('click', function () {
    alert('Settings saved!');
    // In a real implementation, this would save the current settings
});

// Handle view code button
viewCodeBtn.addEventListener('click', function () {
    alert('Viewing code...');
    // In a real implementation, this would show the code for the current configuration
});

// Handle share button
shareBtn.addEventListener('click', function () {
    alert('Sharing playground...');
    // In a real implementation, this would generate a shareable link
});

// Handle submit button
submitBtn.addEventListener('click', function () {
    var prompt = playgroundInput.value.trim();
    if (!prompt) {
        alert('Please enter a prompt');
        return;
    }
    
    currentSettings.prompt = prompt;
    
    // In a real implementation, this would send the request to an AI API
    alert("Submitting with settings:\nModel: " + currentSettings.model + 
          "\nTemperature: " + currentSettings.temperature + 
          "\nMax Length: " + currentSettings.maxLength + 
          "\nTop P: " + currentSettings.topP + 
          "\nPrompt: " + currentSettings.prompt);
});

// Handle reset button
resetBtn.addEventListener('click', function () {
    playgroundInput.value = '';
    // Reset to default settings
    temperatureSlider.value = defaultSettings.temperature.toString();
    temperatureValue.textContent = defaultSettings.temperature.toFixed(2);
    maxLengthSlider.value = defaultSettings.maxLength.toString();
    maxLengthValue.textContent = defaultSettings.maxLength.toString();
    topPSlider.value = defaultSettings.topP.toString();
    topPValue.textContent = defaultSettings.topP.toFixed(2);
    
    currentSettings = Object.assign({}, defaultSettings);
});
